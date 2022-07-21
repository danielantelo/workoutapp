import { ExperienceLevel, Gender, UnitsType } from '../constants';
import { Exercise } from '../exercises';
import { calculateStrengthStandards, getLiftLevel, getStrengthLevel, StrengthMetrics } from './strength';

test('getLiftLevel', () => {
  expect(getLiftLevel(Gender.Male, Exercise.Squat, { oneRepMax: 140, ratio: 1.87 })).toEqual(ExperienceLevel.Intermediate);
  expect(getLiftLevel(Gender.Male, Exercise.Deadlift, { oneRepMax: 100, ratio: 1.1 })).toEqual(ExperienceLevel.Beginner);
  expect(getLiftLevel(Gender.Male, Exercise.Bench, { oneRepMax: 124, ratio: 1.65 })).toEqual(ExperienceLevel.Intermediate);
  expect(getLiftLevel(Gender.Male, Exercise.Press, { oneRepMax: 72, ratio: 0.96 })).toEqual(ExperienceLevel.Intermediate);

  // caters for lbs to compare with kgs
  expect(getLiftLevel(Gender.Male, Exercise.Squat, { oneRepMax: 400 }, UnitsType.Imperial)).toEqual(ExperienceLevel.Advanced);

  // caters for rep only levels
  expect(getLiftLevel(Gender.Male, Exercise.Pullup, { reps: 30 })).toEqual(ExperienceLevel.Advanced);
});

test('getStrengthLevel', () => {
  // never lifted as beginner
  expect(getStrengthLevel(Gender.Male, false, <StrengthMetrics>{})).toBe(ExperienceLevel.Beginner);

  // lifted but no lifts as beginner
  expect(getStrengthLevel(Gender.Male, true, <StrengthMetrics>{})).toBe(ExperienceLevel.Beginner);

  // lifted and has mixed one rep maxes of at least intermediate as intermediate
  expect(
    getStrengthLevel(Gender.Male, true, <StrengthMetrics>{
      [Exercise.Bench]: { oneRepMax: 124, ratio: 1.65 }, // advanced
      [Exercise.Press]: { oneRepMax: 72, ratio: 0.96 }, // intermediate
      [Exercise.Deadlift]: { oneRepMax: 161, ratio: 2.15 }, //advanced
      [Exercise.Squat]: { oneRepMax: 140, ratio: 1.87 }, // intermediate
      [Exercise.Pullup]: { reps: 100 }, // advanced
    })
  ).toBe(ExperienceLevel.Intermediate);
});

test('calculateStrengthStandards', () => {
  expect(
    calculateStrengthStandards(75, {
      [Exercise.Bench]: { reps: 4, weight: 110 },
      [Exercise.Press]: { reps: 6, weight: 60 },
      [Exercise.Deadlift]: { reps: 4, weight: 142.5 },
      [Exercise.Squat]: { reps: 5, weight: 120 },
    })
  ).toMatchObject({
    [Exercise.Bench]: { oneRepMax: 123, fiveRepMax: 108, ratio: 1.64 },
    [Exercise.Press]: { oneRepMax: 71, fiveRepMax: 62, ratio: 0.95 },
    [Exercise.Deadlift]: { oneRepMax: 160, fiveRepMax: 140, ratio: 2.13 },
    [Exercise.Squat]: { oneRepMax: 138, fiveRepMax: 121, ratio: 1.84 },
  });
});
