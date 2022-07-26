import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, Workout } from '../interfaces';

const warmup = [
  { percentage: 50, reps: 5 },
  { percentage: 60, reps: 5 },
  { percentage: 70, reps: 3 },
];

export const builtWithScienceRoutines: Program[] = [
  {
    id: 'BWSFullBody',
    author: 'Jeremy Ethier',
    name: 'Built With Science Full Body Workout For Growth',
    link: 'https://builtwithscience.com/best-full-body-workout/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate, ExperienceLevel.Advanced],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 60,
    weeklySchedule: [0, 2, 4],
    duration: 8,
    workouts: (level: ExperienceLevel): Workout[] => {
      const numberOfSets = level === ExperienceLevel.Intermediate || level == ExperienceLevel.Advanced ? 4 : 3;
      return [
        {
          name: 'Workout A',
          routine: [
            {
              exercise: Exercise.Bench,
              warmup,
              sets: Array(numberOfSets).fill({ minReps: 6, maxReps: 10 }),
              rest: 2.5,
              startingWeight: 'tenRepMax',
            },
            {
              exercise: Exercise.Squat,
              warmup,
              sets: Array(numberOfSets).fill({ minReps: 6, maxReps: 10 }),
              rest: 2.5,
              startingWeight: 'tenRepMax',
            },
            {
              exercise: Exercise.Pullup,
              warmup: [{ reps: 5 }, { reps: 5 }],
              sets: Array(numberOfSets).fill({ minReps: 6, maxReps: 10 }),
              rest: 2.5,
              startingWeight: 'tenRepMax',
            },
            {
              exercise: Exercise.LegCurls,
              sets: Array(numberOfSets).fill({ minReps: 10, maxReps: 15 }),
              rest: 2,
            },
            {
              exercise: Exercise.Press,
              sets: Array(numberOfSets).fill({ minReps: 6, maxReps: 10 }),
              rest: 2.5,
              startingWeight: 'tenRepMax',
            },
            {
              exercise: Exercise.Facepull,
              sets: Array(numberOfSets).fill({ minReps: 10, maxReps: 15 }),
              rest: 1.5,
            },
            {
              exercise: Exercise.DragCurl,
              sets: Array(numberOfSets - 1).fill({ minReps: 8, maxReps: 10 }),
              rest: 1.5,
            },
          ],
        },
        {
          name: 'Workout B',
          routine: [
            {
              exercise: Exercise.Deadlift,
              warmup,
              sets: Array(numberOfSets).fill({ minReps: 6, maxReps: 10 }),
              rest: 2.5,
              startingWeight: 'tenRepMax',
            },
            {
              exercise: Exercise.InclineDumbbellBench,
              warmup,
              sets: Array(numberOfSets).fill({ minReps: 6, maxReps: 10 }),
              rest: 2.5,
              startingWeight: 'tenRepMax',
            },
            {
              exercise: Exercise.BulgarianSplitSquat,
              sets: Array(numberOfSets).fill({ minReps: 6, maxReps: 10 }),
              rest: 2,
              startingWeight: 'tenRepMax',
            },
            {
              exercise: Exercise.CableRow,
              warmup,
              rest: 2,
              sets: Array(numberOfSets).fill({ minReps: 6, maxReps: 12 }),
            },
            {
              exercise: Exercise.LateralRaises,
              sets: Array(numberOfSets).fill({ minReps: 10, maxReps: 15 }),
              rest: 1.5,
            },
            {
              exercise: Exercise.Kickbacks,
              sets: Array(numberOfSets).fill({ minReps: 10, maxReps: 15 }),
              rest: 1.5,
            },
            {
              exercise: Exercise.Flyes,
              sets: Array(numberOfSets).fill({ minReps: 10, maxReps: 15 }),
            },
          ],
        },
      ];
    },
  },
  {
    id: 'BWSUpperLower',
    author: 'Jeremy Ethier',
    name: 'Built With Science Upper Lower Workout For Growth',
    link: 'https://builtwithscience.com/upper-body-workout/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 4,
    workoutDuration: 60,
  },
  {
    id: 'BWSPPL',
    author: 'Jeremy Ethier',
    name: 'Built With Science Push Pull Legs Workout For Growth',
    link: 'https://builtwithscience.com/push-pull-legs-routine/',
    level: [ExperienceLevel.Intermediate, ExperienceLevel.Advanced, ExperienceLevel.Vigilante],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 6,
    workoutDuration: 60,
  },
];
