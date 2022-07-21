import { ActivityLevel, Gender } from '../constants';

interface BmrArgs {
  weightInLbs: number;
  heightInInches: number;
  age: number;
  gender: Gender;
  bodyFat?: number;
}

const bmrFormulas: { [key: string]: (args: BmrArgs) => number } = {
  miffinStJeor: ({ gender, weightInLbs, heightInInches, age }: BmrArgs) => {
    if (gender === Gender.Female) {
      return 10 * (weightInLbs / 2.2) + 6.25 * (heightInInches * 2.54) - 5 * age - 161;
    }

    return 10 * (weightInLbs / 2.2) + 6.25 * (heightInInches * 2.54) - 5 * age + 5;
  },
  harrisBenedict: ({ gender, weightInLbs, heightInInches, age }: BmrArgs) => {
    if (gender === Gender.Female) {
      return 655.1 + 4.35 * weightInLbs + 4.7 * heightInInches - 4.7 * age;
    }

    return 66.47 + 6.24 * weightInLbs + 12.7 * heightInInches - 6.755 * age;
  },
  katchMcArdle: ({ bodyFat = 20, weightInLbs }: BmrArgs) => {
    const leanMass = ((weightInLbs / 2.2) * (100 - bodyFat)) / 100;
    return 370 + 21.6 * leanMass;
  },
};

export const calculateBMR = (args: BmrArgs, formula?: keyof typeof bmrFormulas): number => {
  if (formula) {
    return Math.round(bmrFormulas[formula](args));
  }

  const acc = Object.keys(bmrFormulas).reduce<number>((acc, current) => {
    return acc + bmrFormulas[current as unknown as keyof typeof bmrFormulas](args);
  }, 0);

  return Math.round(acc / Object.keys(bmrFormulas).length);
};

export const calculateTDEE = (activityLevel: ActivityLevel, bmr: number): number => {
  let tdee;
  switch (activityLevel) {
    case ActivityLevel.Sedentary:
      tdee = bmr * 1.2;
      break;
    case ActivityLevel.Active:
      tdee = bmr * 1.55;
      break;
    case ActivityLevel.VeryActive:
      tdee = bmr * 1.725;
      break;
    case ActivityLevel.LightlyActive:
    default:
      tdee = bmr * 1.375;
  }

  return Math.floor(tdee / 10) * 10;
};

export const calculateMinimumProteinRequirement = (bodyWeightInLbs: number, bodyFat?: number, roundToNearest = 1): number => {
  let grams = bodyWeightInLbs;
  if (bodyFat) grams = bodyWeightInLbs - bodyWeightInLbs * (bodyFat / 100);
  return Math.round(grams / roundToNearest) * roundToNearest;
};

export const calculateBMI = (weightInLbs: number, heightInInches: number) => {
  const bmi = (weightInLbs / heightInInches ** 2) * 703;
  return Math.round(bmi * 10) / 10;
};
