import { Exercise } from '../exercises';
import { ScheduledWorkout } from '../trainee';

export const mockCurrentLifts = {
  [Exercise.Bench]: { weight: 60, reps: 5 },
  [Exercise.Deadlift]: { weight: 150, reps: 2, targetReps: 5, fails: 3 },
  [Exercise.Row]: { weight: 40, reps: 5, targetReps: 5, AMRAP: true },
};

export const mockStrengthStandards = {
  [Exercise.Bench]: { oneRepMax: 140 },
  [Exercise.Row]: { oneRepMax: 100 },
  [Exercise.Press]: { oneRepMax: 65, eightRepMax: 45 },
};

export const mockSchedule = [
  {
    id: 0,
    date: '2022-06-01',
    status: 'done',
    name: 'Workout A',
    routine: [
      {
        exercise: Exercise.Bench,
        sets: [
          { reps: 5, targetReps: 5, status: 'done', weight: 60 },
          { reps: 5, targetReps: 5, status: 'done', weight: 60 },
          { reps: 5, targetReps: 5, status: 'done', weight: 60 },
        ],
      },
      {
        exercise: Exercise.Deadlift,
        sets: [
          { targetReps: 5, status: 'done', reps: 2, weight: 150 },
          { targetReps: 5, status: 'done', reps: 1, weight: 150 },
          { targetReps: 5, status: 'done', reps: 2, weight: 150 },
        ],
      },
      {
        exercise: Exercise.MultiLunge,
        warmup: [
          { targetReps: 10, status: 'done', reps: 10 },
          { targetReps: 10, status: 'done', reps: 10 },
          { targetReps: 10, status: 'done', reps: 10 },
        ],
      },
    ],
  },
  {
    id: 1,
    date: '2022-06-02',
    status: 'done',
    name: 'Workout B',
    routine: [
      {
        exercise: Exercise.Row,
        warmup: [
          { targetReps: 5, percentage: 40 },
          { targetReps: 5, percentage: 60 },
          { targetReps: 5, percentage: 80 },
        ],
        sets: [
          { weight: 40, targetReps: 5, reps: 5, status: 'done' },
          { weight: 40, targetReps: 5, reps: 5, status: 'done' },
          { weight: 40, targetReps: 5, reps: 5, status: 'done', AMRAP: true },
        ],
      },
      {
        exercise: Exercise.Press,
        startingWeight: 'eightRepMax',
        sets: [
          { targetReps: 10, reps: 10, status: 'done' },
          { targetReps: 10, reps: 10, status: 'done' },
          { targetReps: 10, reps: 10, status: 'done' },
        ],
      },
    ],
  },
  {
    id: 2,
    date: '2022-06-01',
    status: 'pending',
    name: 'Workout A',
    routine: [
      {
        exercise: Exercise.Bench,
        sets: [
          { targetReps: 5, status: 'pending' },
          { targetReps: 5, status: 'pending' },
          { targetReps: 5, status: 'pending' },
        ],
      },
      {
        exercise: Exercise.Deadlift,
        sets: [
          { targetReps: 5, status: 'pending' },
          { targetReps: 5, status: 'pending' },
          { targetReps: 5, status: 'pending' },
        ],
      },
      {
        exercise: Exercise.MultiLunge,
        warmup: [
          { targetReps: 10, status: 'pending' },
          { targetReps: 10, status: 'pending' },
          { targetReps: 10, status: 'pending' },
        ],
      },
    ],
  },
  {
    id: 3,
    date: '2022-06-02',
    status: 'pending',
    name: 'Workout B',
    routine: [
      {
        exercise: Exercise.Row,
        warmup: [
          { targetReps: 5, percentage: 40 },
          { targetReps: 5, percentage: 60 },
          { targetReps: 5, percentage: 80 },
        ],
        sets: [
          { targetReps: 5, status: 'done' },
          { targetReps: 5, status: 'pending' },
          { targetReps: 5, status: 'pending', AMRAP: true },
        ],
      },
      {
        exercise: Exercise.Press,
        startingWeight: 'eightRepMax',
        sets: [
          { targetReps: 10, status: 'pending' },
          { targetReps: 10, status: 'pending' },
          { targetReps: 10, status: 'pending', AMRAP: true },
        ],
      },
    ],
  },
] as unknown as ScheduledWorkout[];
