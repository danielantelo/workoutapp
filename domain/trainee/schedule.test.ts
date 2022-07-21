import { mockSchedule } from '../__mocks__';
import {
  getScheduledForThisWeek,
  getTodaysWorkout,
  markAllSetsAsComplete,
  ScheduledWorkout,
  updateWorkoutWithCompletedSet,
} from './schedule';

let schedule: ScheduledWorkout[];

beforeEach(() => {
  schedule = [...mockSchedule];
});

test('getTodaysWorkout', () => {
  jest.useFakeTimers().setSystemTime(new Date('2022-05-09'));
  const schedule = [
    {
      date: new Date('2022-05-04'),
      status: 'pending',
      name: 'Workout A',
    },
  ];
  expect(getTodaysWorkout(schedule as unknown as ScheduledWorkout[])).toEqual(undefined);

  schedule.push({
    date: new Date('2022-05-09'),
    status: 'pending',
    name: 'Workout A',
  });
  expect(getTodaysWorkout(schedule as unknown as ScheduledWorkout[])).toEqual(schedule[1]);
});

test('getScheduledForThisWeek', () => {
  jest.useFakeTimers().setSystemTime(new Date('2022-05-09'));
  const schedule = [
    {
      date: new Date('2022-05-04'),
      status: 'done',
      name: 'Workout A',
    },
    {
      date: new Date('2022-05-06'),
      status: 'pending',
      name: 'Workout B',
    },
    {
      date: new Date('2022-05-09'),
      status: 'pending',
      name: 'Workout B',
    },
    {
      date: new Date('2022-05-11'),
      status: 'pending',
      name: 'Workout A',
    },
    {
      date: new Date('2022-05-13'),
      status: 'pending',
      name: 'Workout B',
    },
    {
      date: new Date('2022-05-16'),
      status: 'pending',
      name: 'Workout A',
    },
    {
      date: new Date('2022-05-18'),
      status: 'pending',
      name: 'Workout B',
    },
  ];
  expect(getScheduledForThisWeek(schedule as unknown as ScheduledWorkout[])).toEqual([schedule[2], schedule[3], schedule[4]]);
});

test('updateWorkoutWithCompletedSet', () => {
  expect(schedule[1].routine[0].sets).toMatchObject([
    { targetReps: 5, status: 'done' },
    { targetReps: 5, status: 'pending' },
    { targetReps: 5, status: 'pending' },
  ]);
  updateWorkoutWithCompletedSet(schedule, 1, 0, 0, false, 100);
  expect(schedule[1].routine[0].sets).toMatchObject([
    { reps: 5, targetReps: 5, status: 'done', weight: 100 },
    { targetReps: 5, status: 'pending' },
    { targetReps: 5, status: 'pending' },
  ]);
});

test('markAllSetsAsComplete', () => {
  expect(schedule[1].routine[0].sets).toMatchObject([
    { targetReps: 5, status: 'done' },
    { targetReps: 5, status: 'pending' },
    { targetReps: 5, status: 'pending' },
  ]);
  markAllSetsAsComplete(schedule, 1);
  expect(schedule[1].routine[0].sets).toMatchObject([
    { targetReps: 5, status: 'done' },
    { targetReps: 5, status: 'done' },
    { targetReps: 5, status: 'done' },
  ]);
});
