import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, RoutineSet, Workout } from '../interfaces';

export const vigilanteRoutines: Program[] = [
  {
    id: 'Vigilante3Day',
    name: 'Vigilante Full Body Training',
    author: 'Vigilante Training',
    link: '',
    video: '',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean, Goal.Speed],
    daysPerWeek: 3,
    weeklySchedule: [0, 2, 4],
    workoutDuration: 60,
    duration: 12,
    workouts: (): Workout[] => {
      const warmup = [
        { percentage: 50, reps: 5 },
        { percentage: 60, reps: 5 },
        { percentage: 70, reps: 3 },
      ];
      const mainSets = [{ targetReps: 5 }, { targetReps: 5 }, { targetReps: 5, AMRAP: true }];
      const mainRest = 3;
      return [
        {
          name: 'Workout A',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.RDL,
              sets: Array(3).fill({ minReps: 10, maxReps: 12 }),
            },
            {
              exercise: Exercise.Bench,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.Row,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.Curl,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.Facepull,
              sets: Array(3).fill({ targetReps: 12 }),
            },
            {
              exercise: Exercise.DbCarry,
              sets: Array(3).fill({ targetReps: 50 }),
            },
          ],
        },
        {
          name: 'Workout B',
          routine: [
            {
              exercise: Exercise.Deadlift,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.WalkingLunges,
              sets: Array(3).fill({ minReps: 12, maxReps: 15 }),
            },
            {
              exercise: Exercise.Press,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.Pullup,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.TricepExtensions,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.LateralRaises,
              sets: Array(3).fill({ targetReps: 12 }),
            },
            {
              exercise: Exercise.DbOverheadCarry,
              sets: Array(3).fill({ targetReps: 50 }),
            },
          ],
        },
      ];
    },
  },
  {
    id: 'VigilanteAdvanced3Day',
    name: 'Vigilante Advanced Full Body Training',
    author: 'Vigilante Training',
    link: '',
    video: '',
    level: [ExperienceLevel.Intermediate, ExperienceLevel.Advanced, ExperienceLevel.Vigilante],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean, Goal.Speed],
    daysPerWeek: 3,
    weeklySchedule: [0, 2, 4],
    workoutDuration: 60,
    duration: 12,
    workouts: (): Workout[] => {
      const warmup = [
        { percentage: 50, reps: 5 },
        { percentage: 60, reps: 5 },
        { percentage: 70, reps: 3 },
      ];
      const mainSets: RoutineSet[] = [
        { targetReps: 5, AMRAP: true },
        { targetReps: 8, AMRAP: true, percentage: 70 },
      ];
      const mainRest = 2;
      return [
        {
          name: 'Workout A',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.HipThrust,
              sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
            },
            {
              exercise: Exercise.Bench,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.Row,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.TricepExtensions,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.Curl,
              sets: mainSets,
            },
            {
              exercise: Exercise.Facepull,
              sets: Array(3).fill({ targetReps: 12 }),
            },
            {
              exercise: Exercise.DbCarry,
              sets: Array(4).fill({ targetReps: 50 }),
            },
          ],
        },
        {
          name: 'Workout B',
          routine: [
            {
              exercise: Exercise.Deadlift,
              warmup,
              sets: [{ targetReps: 5, AMRAP: true }],
              rest: mainRest,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.WalkingLunges,
              sets: Array(4).fill({ minReps: 12, maxReps: 15 }),
            },
            {
              exercise: Exercise.Press,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.Pullup,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.Dip,
              sets: mainSets,
              rest: mainRest,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.HammerCurl,
              sets: Array(3).fill({ minReps: 10, maxReps: 12 }),
            },
            {
              exercise: Exercise.LateralRaises,
              sets: Array(3).fill({ targetReps: 12 }),
            },
            {
              exercise: Exercise.DbOverheadCarry,
              sets: Array(4).fill({ targetReps: 50 }),
            },
          ],
        },
        {
          name: 'Workout C',
          routine: [
            {
              exercise: Exercise.FrontSquat,
              warmup,
              sets: Array(4).fill({ minReps: 6, maxReps: 10 }),
              rest: mainRest,
              startingWeight: 'twelveRepMax',
            },
            {
              exercise: Exercise.RDL,
              sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
            },
            {
              exercise: Exercise.InclineBench,
              warmup,
              sets: Array(4).fill({ minReps: 6, maxReps: 10 }),
              rest: mainRest,
              startingWeight: 'twelveRepMax',
            },
            {
              exercise: Exercise.DumbbellRow,
              warmup,
              sets: Array(4).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.DiamondPushUp,
              sets: Array(3).fill({ AMRAP: true }),
            },
            {
              exercise: Exercise.Chinup,
              warmup,
              sets: Array(3).fill({ AMRAP: true }),
            },
            {
              exercise: Exercise.HighPulls,
              sets: Array(3).fill({ targetReps: 12 }),
            },
            {
              exercise: Exercise.LegRaises,
              sets: Array(3).fill({ AMRAP: true }),
            },
          ],
        },
      ];
    },
  },
];
