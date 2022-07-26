import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, Workout } from '../interfaces';

export const arnoldRoutines: Program[] = [
  {
    id: 'GoldenSix',
    name: "Arnold's Golden Six",
    author: 'Arnold Schwarzenegger',
    link: 'https://www.t-nation.com/training/tip-train-with-arnolds-golden-six/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean, Goal.Speed],
    daysPerWeek: 3,
    workoutDuration: 60,
    weeklySchedule: [0, 2, 4],
    duration: 8,
    workouts: (): Workout[] => {
      return [
        {
          name: 'Golden Six',
          routine: [
            {
              exercise: Exercise.Squat,
              sets: Array(4).fill({ targetReps: 10 }),
              rest: 2,
              startingWeight: 'fithteenRepMax',
            },
            {
              exercise: Exercise.Bench,
              sets: Array(3).fill({ targetReps: 10 }),
              rest: 2,
              startingWeight: 'fithteenRepMax',
            },
            {
              exercise: Exercise.Chinup,
              bodyweight: true,
              sets: Array(3).fill({ AMRAP: true }),
            },
            {
              exercise: Exercise.BehindNeckPress,
              sets: Array(4).fill({ targetReps: 10 }),
            },
            {
              exercise: Exercise.Curl,
              sets: Array(3).fill({ targetReps: 10 }),
            },
            {
              exercise: Exercise.Situp,
              sets: Array(4).fill({ AMRAP: true }),
            },
          ],
        },
      ];
    },
  },
];
