import { mockCurrentLifts, mockSchedule, mockStrengthStandards } from '../__mocks__';
import {
  getCompleteSetCount,
  getPreviousLift,
  getPreviousWorkoutOfType,
  getRecommendedWeight,
  getWorkoutById,
  getWorkoutTotalSetCount,
} from './helpers';

test('getWorkoutById', () => {
  expect(getWorkoutById(mockSchedule)(1)).toMatchObject({ id: 1, date: '2022-06-02', status: 'done', name: 'Workout B' });
});

test('getWorkoutTotalSetCount', () => {
  expect(getWorkoutTotalSetCount(mockSchedule[0])).toEqual(9);
  expect(getWorkoutTotalSetCount(mockSchedule[1])).toEqual(9);
});

test('getCompleteSetCount', () => {
  expect(getCompleteSetCount(mockSchedule[0])).toEqual(9);
  expect(getCompleteSetCount(mockSchedule[1])).toEqual(6);
});

test('getPreviousWorkoutOfType', () => {
  expect(getPreviousWorkoutOfType(mockSchedule)(2)).toEqual(mockSchedule[0]);
});

test('getPreviousLift', () => {
  expect(getPreviousLift(mockSchedule, 2)(0, 0)).toEqual({ reps: 5, weight: 60 });
  // with no previous and no global currentLifts
  expect(getPreviousLift(mockSchedule, 0)(0, 0)).toEqual(undefined);
  // with no previoys but with global currentLifts, but only for first set
  expect(getPreviousLift(mockSchedule, 0, mockCurrentLifts)(0, 0)).toEqual({ reps: 5, weight: 60 });
  expect(getPreviousLift(mockSchedule, 0, mockCurrentLifts)(0, 1)).toEqual(undefined);
});

test('getRecommendedWeight', () => {
  const conf = {
    schedule: mockSchedule,
    barbellIncrement: 2.5,
    barbellDecrement: 10,
    dumbbellIncrement: 2,
    dumbbellDecrement: 15,
    strengthStandards: mockStrengthStandards,
    bodyweight: 75,
    currentLifts: mockCurrentLifts,
  };
  // increments previous workout lift
  expect(getRecommendedWeight({ ...conf, workoutId: 2 })(0, 0)).toEqual(62.5);
  // calculates from set percentage
  expect(getRecommendedWeight({ ...conf, workoutId: 1 })(0, 0, true)).toEqual(40);
  expect(getRecommendedWeight({ ...conf, workoutId: 1 })(0, 1, true)).toEqual(60);
  // calculates from exercise startingWeight RM recommendation in program
  expect(getRecommendedWeight({ ...conf, workoutId: 1 })(1, 0)).toEqual(45);
  // deloads when 3 fails
  expect(getRecommendedWeight({ ...conf, workoutId: 2 })(1, 0)).toEqual(135);
  // does not increment warmup weight
  expect(getRecommendedWeight({ ...conf, workoutId: 2 })(2, 0, true)).toEqual(undefined);
  // does not increment AMRAP sets if not higher than targetReps weight
  expect(getRecommendedWeight({ ...conf, workoutId: 3 })(0, 0)).toEqual(40);
});
