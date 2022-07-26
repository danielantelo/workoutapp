import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, Workout } from '../interfaces';

export const oldSchoolRoutines: Program[] = [
  {
    id: 'OldSchool2Day',
    author: 'Kevin Hellman',
    name: 'Old School Trainer 2 Days a Week Minimalist Routine',
    link: 'https://oldschooltrainer.com/minimalist-power-and-bulk/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 2,
    workoutDuration: 45,
    weeklySchedule: [0, 3],
    duration: 12,
    workouts: (): Workout[] => {
      const mainSets = [
        { targetReps: 5 },
        { targetReps: 5 },
        { targetReps: 5, AMRAP: true },
        ...Array(3).fill({ targetReps: 15, percentage: 50 }),
      ];
      const mainRest = 2;
      const startingWeight = 'eightRepMax';
      const warmup = [
        { percentage: 50, reps: 5 },
        { percentage: 60, reps: 5 },
        { percentage: 70, reps: 3 },
      ];
      return [
        {
          name: 'Lower',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.WalkingLunges,
              sets: Array(3).fill({ targetReps: 10 }),
            },
            {
              exercise: Exercise.RomanianDeadlift,
              sets: [...Array(3).fill({ targetReps: 8 }), ...Array(2).fill({ targetReps: 10, percentage: 50 })],
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(3).fill({ targetReps: 15 }),
            },
            {
              exercise: Exercise.LegRaises,
              sets: Array(3).fill({ targetReps: 10 }),
            },
          ],
        },
        {
          name: 'Upper',
          routine: [
            {
              exercise: Exercise.Bench,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Press,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.DumbbellRow,
              sets: Array(3).fill({ targetReps: 15 }),
            },
            {
              exercise: Exercise.Pullup,
              sets: Array(3).fill({ AMRAP: true }),
            },
            {
              exercise: Exercise.Curl,
              sets: Array(3).fill({ targetReps: 12 }),
            },
          ],
        },
      ];
    },
  },
];
