import { Gender } from '../constants';
import { Exercise } from '../exercises';
import { SpeedMetrics, StrengthMetrics } from '../standards';
import { getNextSpeedTargets, getNextLiftTargets } from './targets';

test('getSpeedTargets beginner with no times', () => {
  expect(getNextSpeedTargets(Gender.Male, <SpeedMetrics>{})).toEqual({
    mileRun: 9.5,
    fiveKmRun: 31.5,
  });
});

test('getSpeedTargets for runner with times', () => {
  expect(getNextSpeedTargets(Gender.Male, { mileRun: 10.5, fiveKmRun: 30.25 })).toEqual({
    mileRun: 10,
    fiveKmRun: 28.75,
  });
});

test('getNextLiftTargets for beginner with no lifts', () => {
  expect(getNextLiftTargets(Gender.Male, <StrengthMetrics>{}, 75)).toEqual({
    [Exercise.Bench]: { oneRepMax: 38, ratio: 0.5, fiveRepMax: 33 },
    [Exercise.Deadlift]: { oneRepMax: 75, ratio: 1, fiveRepMax: 66 },
    [Exercise.Squat]: { oneRepMax: 56, ratio: 0.75, fiveRepMax: 49 },
    [Exercise.Press]: { oneRepMax: 30, ratio: 0.4, fiveRepMax: 26 },
    [Exercise.Row]: { oneRepMax: 38, ratio: 0.5, fiveRepMax: 33 },
  });
});

test('getNextLiftTargets for lift', () => {
  // gets the ratio if lower than the oneRepMax of the next level
  expect(
    getNextLiftTargets(
      Gender.Male,
      {
        [Exercise.Bench]: { oneRepMax: 121 },
      },
      74
    )
  ).toMatchObject({
    [Exercise.Bench]: { oneRepMax: 130 },
  });

  // gets the oneRepMax if lower than the ratio of the next level
  expect(
    getNextLiftTargets(
      Gender.Male,
      {
        [Exercise.Bench]: { oneRepMax: 121 },
      },
      80
    )
  ).toMatchObject({
    [Exercise.Bench]: { oneRepMax: 132 },
  });

  // gets the ratio of current lift level if higher than level oneRepMax and current rep max
  // e.g. advanced bench is 131kg, but ratio is 1.75, so an 80kg lifter should aim for 1.75x (140kg)
  expect(
    getNextLiftTargets(
      Gender.Male,
      {
        [Exercise.Bench]: { oneRepMax: 132 },
      },
      80
    )
  ).toMatchObject({
    [Exercise.Bench]: { oneRepMax: 140 },
  });
});

test('getNextLiftTargets for lift when gap is to large to next level', () => {
  expect(
    getNextLiftTargets(
      Gender.Male,
      {
        [Exercise.Squat]: { oneRepMax: 144 },
        [Exercise.Deadlift]: { oneRepMax: 159 },
        [Exercise.Press]: { oneRepMax: 73 },
      },
      75
    )
  ).toMatchObject({
    [Exercise.Squat]: { oneRepMax: 154 },
    [Exercise.Deadlift]: { oneRepMax: 169 },
    [Exercise.Press]: { oneRepMax: 79, fiveRepMax: 69 },
  });
});
