import {
  calculateBMI,
  calculateBMR,
  calculateMinimumProteinRequirement,
  calculateTDEE,
  UnitsType,
  ActivityLevel,
  Gender,
  cmToInches,
  kgToLbs,
} from 'fitness-tools';

import { isDateWeekend } from '../../utils/calendar';
import { Goal } from '../constants';

const AGGRESSIVE_CUT_DEFICIT = -600;
const CUT_DEFICIT = -400;
const BULK_SURPLUS = 300;
const MAX_CALORIES = 2600;
const UNDERWEIGHT_BMI = 18.5;

export enum NutritionType {
  AggressiveCut = 'Aggressive Cut',
  Cut = 'Cut',
  Bulk = 'Lean Bulk',
  Maintain = 'Maintain',
}

export interface NutritionProtocol {
  type: NutritionType;
  note?: string;
  bmi: number;
  bmr: number;
  tdee: number;
  cycleNutrition: boolean;
  higherCaloriesOnWeekends: boolean;
  targetCalories: {
    energyExpenditureModifier: number;
    trainingDay: number;
    restDay: number;
    weekend: number;
    average: number;
  };
  targetProtein: number;
}

const getNutritionTypeRecommendation = ({
  gender,
  bodyFat,
  primaryGoal,
  secondaryGoal,
  needsMetabolicReset,
  bmi,
}: {
  gender: Gender;
  bodyFat: number;
  primaryGoal: Goal;
  secondaryGoal: Goal;
  needsMetabolicReset: boolean;
  bmi: number;
}): { type: NutritionType; reason?: string } => {
  const largeDeficitDueToBodyfatMessage =
    'Your bodyfat is high enough to handle an aggressive deficit while still making gains in strength and muscle mass.';
  const smallDeficitDueToBodyfatMessage =
    'Your bodyfat is high enough to make gains in strength and muscle while on a small deficit.';
  const metabolicResetMessage =
    'Given you have been dieting on low or unknown calories for some time without results, it is essential you eat at maintenance for 2-4 weeks.';
  const lowBMIMessage = 'You are underweight for your height and should focus on adding muscle to your frame.';

  if (bmi < UNDERWEIGHT_BMI && bodyFat > 10) {
    return { type: NutritionType.Bulk, reason: lowBMIMessage };
  }

  if (needsMetabolicReset) {
    return { type: NutritionType.Maintain, reason: metabolicResetMessage };
  }

  if (gender === Gender.Male && bodyFat > 20) {
    return { type: NutritionType.AggressiveCut, reason: largeDeficitDueToBodyfatMessage };
  }

  if (gender === Gender.Female && bodyFat >= 30) {
    return { type: NutritionType.AggressiveCut, reason: largeDeficitDueToBodyfatMessage };
  }

  if (gender === Gender.Male && bodyFat > 15) {
    return { type: NutritionType.Cut, reason: smallDeficitDueToBodyfatMessage };
  }

  if (gender === Gender.Female && bodyFat >= 20) {
    return { type: NutritionType.Cut, reason: smallDeficitDueToBodyfatMessage };
  }

  if (primaryGoal === Goal.Lean) {
    return { type: NutritionType.Cut };
  }

  if (secondaryGoal === Goal.Lean && bodyFat >= 15) {
    return { type: NutritionType.Cut };
  }

  if (
    primaryGoal === Goal.Size ||
    secondaryGoal === Goal.Size ||
    primaryGoal === Goal.Strength ||
    secondaryGoal === Goal.Strength
  ) {
    return { type: NutritionType.Bulk };
  }

  return { type: NutritionType.Maintain };
};

const getEnergyExpenditureModifier = (goal: NutritionType, preferAggressiveCut: boolean) => {
  switch (goal) {
    case NutritionType.AggressiveCut:
    case NutritionType.Cut:
      if (preferAggressiveCut) {
        return AGGRESSIVE_CUT_DEFICIT;
      }
      return CUT_DEFICIT;
    case NutritionType.Bulk:
      return BULK_SURPLUS;
    case NutritionType.Maintain:
    default:
      return 0;
  }
};

const getTargetCalories = ({
  tdee,
  goal,
  cycleNutrition,
  numberOfWorkoutDays,
  higherCaloriesOnWeekends,
  preferAggressiveCut,
}: {
  tdee: number;
  goal: NutritionType;
  cycleNutrition: boolean;
  numberOfWorkoutDays?: number;
  higherCaloriesOnWeekends: boolean;
  preferAggressiveCut: boolean;
}): { trainingDay: number; restDay: number; weekend: number; average: number; energyExpenditureModifier: number } => {
  const isCut = goal === NutritionType.Cut || goal === NutritionType.AggressiveCut;

  const modifier = getEnergyExpenditureModifier(goal, preferAggressiveCut);
  const average = tdee + modifier;

  let workoutdaysTarget = average;
  let restdaysTarget = average;
  let weekendTarget = average;

  if (cycleNutrition) {
    workoutdaysTarget = average + Math.abs(modifier);
    restdaysTarget = average - Math.abs((modifier * numberOfWorkoutDays!) / (7 - numberOfWorkoutDays!));
    weekendTarget = restdaysTarget;
  }

  if (higherCaloriesOnWeekends) {
    weekendTarget = weekendTarget + 500;
    workoutdaysTarget = workoutdaysTarget - 200;
    restdaysTarget = restdaysTarget - 200;
  }

  if (isCut && workoutdaysTarget > MAX_CALORIES) {
    workoutdaysTarget = MAX_CALORIES;
  }

  if (isCut && restdaysTarget > MAX_CALORIES) {
    restdaysTarget = MAX_CALORIES;
  }

  if (isCut && weekendTarget > MAX_CALORIES) {
    weekendTarget = MAX_CALORIES;
  }

  return {
    trainingDay: workoutdaysTarget,
    restDay: restdaysTarget,
    weekend: weekendTarget,
    average,
    energyExpenditureModifier: modifier,
  };
};

export const getNutritionRecommendation = ({
  gender,
  weight,
  height,
  age,
  unitsType,
  bodyFat,
  activityLevel,
  primaryGoal,
  secondaryGoal,
  needsMetabolicReset = false,
  cycleNutrition = false,
  numberOfWorkoutDays,
  higherCaloriesOnWeekends = false,
  preferAggressiveCut = false,
}: {
  gender: Gender;
  weight: number;
  height: number;
  age: number;
  unitsType: UnitsType;
  bodyFat: number;
  activityLevel: ActivityLevel;
  primaryGoal: Goal;
  secondaryGoal: Goal;
  needsMetabolicReset?: boolean;
  cycleNutrition?: boolean;
  numberOfWorkoutDays?: number;
  higherCaloriesOnWeekends?: boolean;
  preferAggressiveCut?: boolean;
}): NutritionProtocol => {
  const calcWeight = unitsType === UnitsType.Metric ? kgToLbs(weight) : weight;
  const calcHeight = unitsType === UnitsType.Metric ? cmToInches(height) : height;

  const bmi = calculateBMI(calcWeight, calcHeight);
  const bmr = calculateBMR({ heightInInches: calcHeight, weightInLbs: calcWeight, gender, bodyFat, age });
  const tdee = calculateTDEE(activityLevel, bmr);
  const targetProtein = calculateMinimumProteinRequirement(calcWeight, bodyFat);

  const { type, reason } = getNutritionTypeRecommendation({
    gender,
    bodyFat,
    primaryGoal,
    secondaryGoal,
    needsMetabolicReset,
    bmi,
  });

  const targetCalories = getTargetCalories({
    tdee,
    goal: type,
    cycleNutrition: cycleNutrition ?? false,
    numberOfWorkoutDays,
    higherCaloriesOnWeekends,
    preferAggressiveCut,
  });

  return {
    type,
    note: reason,
    bmi,
    bmr,
    tdee,
    targetCalories,
    targetProtein,
    cycleNutrition,
    higherCaloriesOnWeekends,
  };
};

export const getTodaysCalories = (recommendedNutrition: NutritionProtocol, isWorkoutDay: boolean) => {
  const { targetCalories } = recommendedNutrition;
  const isWeekend = isDateWeekend();
  return (
    (isWeekend ? targetCalories.weekend : isWorkoutDay ? targetCalories.trainingDay : targetCalories.restDay) ??
    targetCalories.average
  );
};
