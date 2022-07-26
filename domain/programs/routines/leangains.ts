import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, RoutineSet, Workout } from '../interfaces';

const startingWeight = 'eightRepMax';

const warmup: RoutineSet[] = [
  { percentage: 40, reps: 5, basis: 'fiveRepMax' },
  { percentage: 60, reps: 5, basis: 'fiveRepMax' },
  { percentage: 70, reps: 3, basis: 'fiveRepMax' },
];

const rptSets: RoutineSet[] = [
  { targetReps: 8, AMRAP: true },
  { targetReps: 10, AMRAP: true, percentage: 90, basis: 'firstSet' },
  { targetReps: 12, AMRAP: true, percentage: 80, basis: 'firstSet' },
];

const mainRest = 3;

export const leanGainsRoutines: Program[] = [
  {
    id: 'LeangainsRPT',
    name: 'Leangains RPT',
    author: 'Martin Berkhan',
    link: 'https://leangains.com/reverse-pyramid-training-guide/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 60,
    weeklySchedule: [0, 2, 4],
    duration: 8,
    workouts: (): Workout[] => {
      return [
        {
          name: 'Workout A',
          routine: [
            {
              exercise: Exercise.Deadlift,
              warmup,
              sets: [
                { targetReps: 6, AMRAP: true },
                { targetReps: 8, AMRAP: true },
              ],
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Press,
              warmup,
              sets: rptSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(2).fill({ targetReps: 10 }),
            },
            {
              exercise: Exercise.Curl,
              sets: Array(2).fill({ targetReps: 10 }),
            },
            {
              exercise: Exercise.TricepExtensions,
              sets: Array(2).fill({ targetReps: 10 }),
            },
          ],
        },
        {
          name: 'Workout B',
          routine: [
            {
              exercise: Exercise.Bench,
              warmup,
              sets: rptSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Row,
              warmup,
              sets: rptSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(2).fill({ targetReps: 10 }),
            },
            {
              exercise: Exercise.HammerCurl,
              sets: Array(2).fill({ targetReps: 10 }),
            },
            {
              exercise: Exercise.Skullcrushers,
              sets: Array(2).fill({ targetReps: 10 }),
            },
          ],
        },
        {
          name: 'Workout C',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: rptSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Chinup,
              warmup,
              sets: rptSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(2).fill({ targetReps: 10 }),
            },
            {
              exercise: Exercise.InclineCurls,
              sets: Array(2).fill({ targetReps: 10 }),
            },
            {
              exercise: Exercise.TricepRopePushdowns,
              sets: Array(2).fill({ targetReps: 10 }),
            },
          ],
        },
      ];
    },
  },
];
