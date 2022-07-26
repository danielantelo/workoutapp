import { ActivityLevel, DietType, ExperienceLevel, Gender, Goal, UnitsType, WeekDay } from '../constants';
import { Exercise } from '../exercises';
import { getNutritionRecommendation, NutritionType } from '../nutrition';
import { getProgramRecommendations } from '../programs';
import { calculateStrengthStandards, getSpeedLevel, getStrengthLevel, SpeedMetrics, StrengthMetrics } from '../standards';
import { getNextLiftTargets, getNextSpeedTargets } from './targets';

export interface Trainee {
  preferredUnitsType: keyof typeof UnitsType;

  gender: keyof typeof Gender;
  age: number;
  weight: number;
  height: number;
  waist: number;
  bodyFat: number;

  bestMileRunTime: number;
  bestfiveKmRunTime: number;
  maxPushUps: number;
  maxPullUps: number;
  hasLifted: boolean;
  currentLifts: Lifts;

  activityLevel: keyof typeof ActivityLevel;
  primaryGoal: keyof typeof Goal;
  secondaryGoal: keyof typeof Goal;

  preferredDietType: keyof typeof DietType;
  preferredWeekStart: keyof typeof WeekDay;
  preferredNumberOfWorkoutsPerWeek: number;
  preferredWorkoutDuration: number;
  preferredWorkoutDays: Array<keyof typeof WeekDay>;
  prefersProgramHoping: boolean;
  prefersMinimalLegs: boolean;

  returningFromBreak: boolean;
  needsMetabolicReset: boolean;
  prefersCycledNutrition: boolean;
  prefersHigherCaloriesOnWeekends: boolean;
  prefersAggressiveCut: boolean;

  preferredBarbellIncrement: number;
  preferredBarbellDecrement: number;
  preferredDumbbellIncrement: number;
  preferredDumbbellDecrement: number;
}

export type LiftAttempt = { weight: number; reps: number; targetReps?: number; fails?: number };

export type Lifts = {
  [key in Exercise]?: LiftAttempt;
};

export interface TraineeMetrics {
  strengthMetrics: StrengthMetrics;
  strengthLevel: ExperienceLevel;
  speedMetrics: SpeedMetrics;
  speedLevel: ExperienceLevel;
}

export const getTraineeMetrics = (trainee: Trainee): TraineeMetrics => {
  const { gender, weight, currentLifts, hasLifted, bestMileRunTime, bestfiveKmRunTime } = trainee;

  const strengthMetrics = calculateStrengthStandards(weight, currentLifts);
  const strengthLevel = getStrengthLevel(Gender[gender], hasLifted, strengthMetrics);

  const speedMetrics: SpeedMetrics = { mileRun: bestMileRunTime, fiveKmRun: bestfiveKmRunTime };
  const speedLevel = getSpeedLevel(Gender[gender], bestMileRunTime, bestfiveKmRunTime);

  return { strengthMetrics, strengthLevel, speedLevel, speedMetrics };
};

export const getTraineeRecommendations = (trainee: Trainee, traineeMetrics: TraineeMetrics) => {
  const {
    gender,
    primaryGoal,
    secondaryGoal,
    preferredNumberOfWorkoutsPerWeek,
    preferredWorkoutDuration,
    bodyFat,
    preferredUnitsType,
    weight,
    height,
    age,
    activityLevel,
    needsMetabolicReset,
    prefersHigherCaloriesOnWeekends,
    prefersCycledNutrition,
    prefersAggressiveCut,
  } = trainee;
  const { strengthLevel, strengthMetrics, speedLevel, speedMetrics } = traineeMetrics;

  const recommendedPrograms = getProgramRecommendations({
    gender: Gender[gender],
    strengthLevel: strengthLevel!,
    primaryGoal: Goal[primaryGoal],
    secondaryGoal: Goal[secondaryGoal],
    maxDaysPerWeek: preferredNumberOfWorkoutsPerWeek,
    maxWorkoutDuration: preferredWorkoutDuration,
    speedLevel: speedLevel!,
  });

  const recommendedNutrition = getNutritionRecommendation({
    gender: Gender[gender],
    weight: weight,
    height: height,
    age: age,
    unitsType: UnitsType[preferredUnitsType],
    bodyFat: bodyFat,
    activityLevel: ActivityLevel[activityLevel],
    primaryGoal: Goal[primaryGoal],
    secondaryGoal: Goal[secondaryGoal],
    needsMetabolicReset: needsMetabolicReset,
    higherCaloriesOnWeekends: prefersHigherCaloriesOnWeekends,
    cycleNutrition: prefersCycledNutrition,
    numberOfWorkoutDays: preferredNumberOfWorkoutsPerWeek, // @TODO should be the selected program
    preferAggressiveCut: prefersAggressiveCut,
  });

  const speedTargets = speedMetrics && getNextSpeedTargets(Gender[gender], speedMetrics);

  const liftTargets = getNextLiftTargets(Gender[gender], strengthMetrics, weight);

  const bodyFatTarget =
    bodyFat > 10 && recommendedNutrition && [NutritionType.Cut, NutritionType.AggressiveCut].includes(recommendedNutrition.type)
      ? bodyFat - 5
      : undefined;

  return { bodyFatTarget, liftTargets, speedTargets, recommendedNutrition, recommendedPrograms };
};
