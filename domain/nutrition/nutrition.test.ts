import { ActivityLevel, Gender, Goal, UnitsType } from '../constants';
import { getNutritionRecommendation, NutritionType } from './nutrition';

test('getNutritionProtocol for overweight sendentary male looking to get lean and big', () => {
  expect(
    getNutritionRecommendation({
      gender: Gender.Male,
      weight: 200,
      height: 70,
      age: 38,
      unitsType: UnitsType.Imperial,
      bodyFat: 30,
      activityLevel: ActivityLevel.LightlyActive,
      primaryGoal: Goal.Lean,
      secondaryGoal: Goal.Size,
    })
  ).toMatchObject({
    type: NutritionType.AggressiveCut,
    note: 'Your bodyfat is high enough to handle an aggressive deficit while still making gains in strength and muscle mass.',
    bmi: 28.7,
    bmr: 1842,
    tdee: 2530,
    targetCalories: {
      average: 2130,
      trainingDay: 2130,
      restDay: 2130,
      weekend: 2130,
      energyExpenditureModifier: -400,
    },
    targetProtein: 140,
  });
});

test('getNutritionProtocol for overweight sendentary male looking to get lean and big who prefers an aggressive cut', () => {
  expect(
    getNutritionRecommendation({
      gender: Gender.Male,
      weight: 200,
      height: 70,
      age: 38,
      unitsType: UnitsType.Imperial,
      bodyFat: 30,
      activityLevel: ActivityLevel.LightlyActive,
      primaryGoal: Goal.Lean,
      secondaryGoal: Goal.Size,
      preferAggressiveCut: true,
    })
  ).toMatchObject({
    type: NutritionType.AggressiveCut,
    note: 'Your bodyfat is high enough to handle an aggressive deficit while still making gains in strength and muscle mass.',
    bmi: 28.7,
    bmr: 1842,
    tdee: 2530,
    targetCalories: {
      average: 1930,
      trainingDay: 1930,
      restDay: 1930,
      weekend: 1930,
      energyExpenditureModifier: -600,
    },
    targetProtein: 140,
  });
});

test('getNutritionProtocol for average sendentary male looking to get lean and big', () => {
  expect(
    getNutritionRecommendation({
      gender: Gender.Male,
      weight: 75,
      height: 176,
      age: 38,
      unitsType: UnitsType.Metric,
      bodyFat: 17,
      activityLevel: ActivityLevel.LightlyActive,
      primaryGoal: Goal.Lean,
      secondaryGoal: Goal.Size,
    })
  ).toMatchObject({
    type: NutritionType.Cut,
    note: 'Your bodyfat is high enough to make gains in strength and muscle while on a small deficit.',
    bmr: 1697,
    tdee: 2330,
    targetCalories: {
      trainingDay: 1930,
      restDay: 1930,
      weekend: 1930,
    },
    targetProtein: 135,
  });
});

test('getNutritionProtocol for average sendentary male looking to get lean and big who prefers more aggressive cut', () => {
  expect(
    getNutritionRecommendation({
      gender: Gender.Male,
      weight: 75,
      height: 176,
      age: 38,
      unitsType: UnitsType.Metric,
      bodyFat: 17,
      activityLevel: ActivityLevel.LightlyActive,
      primaryGoal: Goal.Lean,
      secondaryGoal: Goal.Size,
      preferAggressiveCut: true,
    })
  ).toMatchObject({
    type: NutritionType.Cut,
    note: 'Your bodyfat is high enough to make gains in strength and muscle while on a small deficit.',
    bmr: 1697,
    tdee: 2330,
    targetCalories: {
      energyExpenditureModifier: -600,
      average: 1730,
    },
  });
});

test('getNutritionProtocol for active lean male looking to get leaner and bigger', () => {
  expect(
    getNutritionRecommendation({
      gender: Gender.Male,
      weight: 75,
      height: 176,
      age: 38,
      unitsType: UnitsType.Metric,
      bodyFat: 10,
      activityLevel: ActivityLevel.Active,
      primaryGoal: Goal.Lean,
      secondaryGoal: Goal.Size,
    })
  ).toMatchObject({
    type: NutritionType.Cut,
    note: undefined,
    bmr: 1735,
    tdee: 2680,
    targetCalories: {
      trainingDay: 2280,
      restDay: 2280,
      weekend: 2280,
    },
    targetProtein: 150,
  });
});

test('getNutritionProtocol for lean male looking to get bigger and stronger', () => {
  expect(
    getNutritionRecommendation({
      gender: Gender.Male,
      weight: 75,
      height: 176,
      age: 38,
      unitsType: UnitsType.Metric,
      bodyFat: 10,
      activityLevel: ActivityLevel.LightlyActive,
      primaryGoal: Goal.Size,
      secondaryGoal: Goal.Strength,
    })
  ).toMatchObject({
    type: NutritionType.Bulk,
    note: undefined,
    bmr: 1735,
    tdee: 2380,
    targetCalories: {
      trainingDay: 2680,
      restDay: 2680,
      weekend: 2680,
    },
    targetProtein: 150,
  });
});

test('getNutritionProtocol for lean male looking to get bigger and leaner', () => {
  expect(
    getNutritionRecommendation({
      gender: Gender.Male,
      weight: 75,
      height: 176,
      age: 38,
      unitsType: UnitsType.Metric,
      bodyFat: 10,
      activityLevel: ActivityLevel.LightlyActive,
      primaryGoal: Goal.Size,
      secondaryGoal: Goal.Lean,
    })
  ).toMatchObject({
    type: NutritionType.Bulk,
    note: undefined,
    bmr: 1735,
    tdee: 2380,
    targetCalories: {
      trainingDay: 2680,
      restDay: 2680,
      weekend: 2680,
    },
    targetProtein: 150,
  });
});

test('getNutritionProtocol for overweight sendentary male looking to diet but who has been dieting long without results', () => {
  expect(
    getNutritionRecommendation({
      gender: Gender.Male,
      weight: 200,
      height: 70,
      age: 38,
      unitsType: UnitsType.Imperial,
      bodyFat: 30,
      activityLevel: ActivityLevel.LightlyActive,
      primaryGoal: Goal.Lean,
      secondaryGoal: Goal.Size,
      needsMetabolicReset: true,
    })
  ).toMatchObject({
    type: NutritionType.Maintain,
    note: 'Given you have been dieting on low or unknown calories for some time without results, it is essential you eat at maintenance for 2-4 weeks.',
    bmr: 1842,
    tdee: 2530,
    targetCalories: {
      trainingDay: 2530,
      restDay: 2530,
      weekend: 2530,
    },
    targetProtein: 140,
  });
});

test('getNutritionProtocol for underweight individual', () => {
  expect(
    getNutritionRecommendation({
      gender: Gender.Male,
      weight: 55,
      height: 177,
      age: 21,
      unitsType: UnitsType.Metric,
      bodyFat: 15,
      activityLevel: ActivityLevel.LightlyActive,
      primaryGoal: Goal.Lean,
      secondaryGoal: Goal.Size,
    })
  ).toMatchObject({
    type: NutritionType.Bulk,
    note: 'You are underweight for your height and should focus on adding muscle to your frame.',
    bmi: 17.4,
    bmr: 1503,
    tdee: 2060,
    targetCalories: {
      trainingDay: 2360,
      restDay: 2360,
      weekend: 2360,
    },
    targetProtein: 105,
  });
});

test('getNutritionProtocol for individual who wants to eat more on weekends', () => {
  const cutTargets = getNutritionRecommendation({
    gender: Gender.Male,
    weight: 75,
    height: 176,
    age: 38,
    unitsType: UnitsType.Metric,
    bodyFat: 17,
    activityLevel: ActivityLevel.LightlyActive,
    primaryGoal: Goal.Lean,
    secondaryGoal: Goal.Size,
    higherCaloriesOnWeekends: true,
  });
  expect(cutTargets).toMatchObject({
    type: NutritionType.Cut,
    tdee: 2330,
    targetCalories: {
      average: 1930,
      trainingDay: 1730,
      restDay: 1730,
      weekend: 2430,
    },
    targetProtein: 135,
  });
  expect((cutTargets.targetCalories.weekend * 2 + cutTargets.targetCalories.trainingDay * 5) / 7).toEqual(1930);

  const bulkTargets = getNutritionRecommendation({
    gender: Gender.Male,
    weight: 55,
    height: 177,
    age: 21,
    unitsType: UnitsType.Metric,
    bodyFat: 15,
    activityLevel: ActivityLevel.LightlyActive,
    primaryGoal: Goal.Lean,
    secondaryGoal: Goal.Size,
    higherCaloriesOnWeekends: true,
  });
  expect(bulkTargets).toMatchObject({
    type: NutritionType.Bulk,
    tdee: 2060,
    targetCalories: {
      average: 2360,
      trainingDay: 2160,
      restDay: 2160,
      weekend: 2860,
    },
    targetProtein: 105,
  });
  expect((bulkTargets.targetCalories.weekend * 2 + bulkTargets.targetCalories.trainingDay * 5) / 7).toEqual(2360);
});

test('getNutritionProtocol for individual who wants to eat more on training days', () => {
  const cutTargets = getNutritionRecommendation({
    gender: Gender.Male,
    weight: 75,
    height: 176,
    age: 38,
    unitsType: UnitsType.Metric,
    bodyFat: 17,
    activityLevel: ActivityLevel.LightlyActive,
    primaryGoal: Goal.Lean,
    secondaryGoal: Goal.Size,
    higherCaloriesOnWeekends: false,
    cycleNutrition: true,
    numberOfWorkoutDays: 3,
  });
  expect(cutTargets).toMatchObject({
    type: NutritionType.Cut,
    tdee: 2330,
    targetCalories: {
      average: 1930,
      trainingDay: 2330,
      restDay: 1630,
      weekend: 1630,
    },
    targetProtein: 135,
  });
  expect((cutTargets.targetCalories.restDay * 4 + cutTargets.targetCalories.trainingDay * 3) / 7).toEqual(1930);

  const bulkTargets = getNutritionRecommendation({
    gender: Gender.Male,
    weight: 55,
    height: 177,
    age: 21,
    unitsType: UnitsType.Metric,
    bodyFat: 15,
    activityLevel: ActivityLevel.LightlyActive,
    primaryGoal: Goal.Lean,
    secondaryGoal: Goal.Size,
    higherCaloriesOnWeekends: false,
    cycleNutrition: true,
    numberOfWorkoutDays: 3,
  });
  expect(bulkTargets).toMatchObject({
    type: NutritionType.Bulk,
    tdee: 2060,
    targetCalories: {
      average: 2360,
      trainingDay: 2660,
      restDay: 2135,
      weekend: 2135,
    },
    targetProtein: 105,
  });
  expect((bulkTargets.targetCalories.restDay * 4 + bulkTargets.targetCalories.trainingDay * 3) / 7).toEqual(2360);
});

test('getNutritionProtocol for individual who wants to eat more on training days AND weekends', () => {
  const cutTargets = getNutritionRecommendation({
    gender: Gender.Male,
    weight: 75,
    height: 176,
    age: 38,
    unitsType: UnitsType.Metric,
    bodyFat: 17,
    activityLevel: ActivityLevel.LightlyActive,
    primaryGoal: Goal.Lean,
    secondaryGoal: Goal.Size,
    higherCaloriesOnWeekends: true,
    cycleNutrition: true,
    numberOfWorkoutDays: 3,
  });
  expect(cutTargets).toMatchObject({
    type: NutritionType.Cut,
    tdee: 2330,
    targetCalories: {
      average: 1930,
      trainingDay: 2130,
      restDay: 1430,
      weekend: 2130,
    },
    targetProtein: 135,
  });
  expect(
    (cutTargets.targetCalories.restDay * 2 + cutTargets.targetCalories.trainingDay * 3 + cutTargets.targetCalories.weekend * 2) /
      7
  ).toEqual(1930);

  const bulkTargets = getNutritionRecommendation({
    gender: Gender.Male,
    weight: 55,
    height: 177,
    age: 21,
    unitsType: UnitsType.Metric,
    bodyFat: 15,
    activityLevel: ActivityLevel.LightlyActive,
    primaryGoal: Goal.Lean,
    secondaryGoal: Goal.Size,
    higherCaloriesOnWeekends: true,
    cycleNutrition: true,
    numberOfWorkoutDays: 3,
  });
  expect(bulkTargets).toMatchObject({
    type: NutritionType.Bulk,
    tdee: 2060,
    targetCalories: {
      average: 2360,
      trainingDay: 2460,
      restDay: 1935,
      weekend: 2635,
    },
    targetProtein: 105,
  });
  expect(
    (bulkTargets.targetCalories.restDay * 2 +
      bulkTargets.targetCalories.trainingDay * 3 +
      bulkTargets.targetCalories.weekend * 2) /
      7
  ).toEqual(2360);
});