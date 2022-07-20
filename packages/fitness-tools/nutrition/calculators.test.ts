import { ActivityLevel, Gender } from '../constants';
import { BmrFormula, calculateBMI, calculateBMR, calculateMinimumProteinRequirement, calculateTDEE } from './calculators';

test('bmr formulas', () => {
  expect(
    calculateBMR({ weightInLbs: 165, heightInInches: 70, age: 38, gender: Gender.Male, bodyFat: 17 }, BmrFormula.MiffinStJeor)
  ).toEqual(1676);
  expect(
    calculateBMR({ weightInLbs: 165, heightInInches: 70, age: 38, gender: Gender.Male, bodyFat: 17 }, BmrFormula.HarrisBenedict)
  ).toBe(1728);
  expect(
    calculateBMR({ weightInLbs: 165, heightInInches: 70, age: 38, gender: Gender.Male, bodyFat: 17 }, BmrFormula.KatchMcArdle)
  ).toEqual(1715);
});

test('bmr average', () => {
  expect(calculateBMR({ weightInLbs: 165, heightInInches: 70, age: 38, gender: Gender.Male, bodyFat: 17 })).toEqual(1706);
});

test('tdee', () => {
  expect(calculateTDEE(ActivityLevel.Sedentary, 1706)).toEqual(2040);
  expect(calculateTDEE(ActivityLevel.LightlyActive, 1706)).toEqual(2340);
  expect(calculateTDEE(ActivityLevel.Active, 1706)).toEqual(2640);
  expect(calculateTDEE(ActivityLevel.VeryActive, 1706)).toEqual(2940);
});

test('protein', () => {
  expect(calculateMinimumProteinRequirement(165)).toEqual(165);
  expect(calculateMinimumProteinRequirement(165, 30)).toEqual(116);
  expect(calculateMinimumProteinRequirement(165, 15, 5)).toEqual(140);
  expect(calculateMinimumProteinRequirement(165, 10, 5)).toEqual(150);
});

test('BMI', () => {
  expect(calculateBMI(165, 70)).toEqual(23.7);
});
