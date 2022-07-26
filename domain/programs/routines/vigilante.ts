import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, RoutineSet, Workout } from '../interfaces';

const startingWeight = 'tenRepMax';
const warmup = [
  { percentage: 50, reps: 5 },
  { percentage: 60, reps: 5 },
  { percentage: 70, reps: 3 },
];

export const vigilanteRoutines: Program[] = [
  {
    id: 'Vigilante2Day',
    name: 'Vigilante Minimalist 2 Day Training',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean, Goal.Speed],
    daysPerWeek: 2,
    weeklySchedule: [0, 3],
    workoutDuration: 60,
    duration: 12,
    workouts: (): Workout[] => {
      const mainSets = [{ targetReps: 5 }, { targetReps: 5 }, { targetReps: 5, AMRAP: true }];
      const secondarySets = [{ targetReps: 5 }, { targetReps: 5, AMRAP: true }];
      const mainRest = 2;
      return [
        {
          name: 'Workout A',
          routine: [
            {
              exercise: Exercise.Bench,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Squat,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Row,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Press,
              sets: secondarySets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Deadlift,
              sets: [{ targetReps: 5, AMRAP: true }],
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Pullup,
              sets: secondarySets,
              rest: mainRest,
              startingWeight,
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
              exercise: Exercise.Press,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Deadlift,
              warmup,
              sets: [{ targetReps: 3 }, { targetReps: 3 }, { targetReps: 3, AMRAP: true }],
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Pullup,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Bench,
              sets: secondarySets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Squat,
              sets: secondarySets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Row,
              sets: secondarySets,
              rest: mainRest,
              startingWeight,
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
    id: 'Vigilante3Day',
    name: 'Vigilante Full Body Training',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean, Goal.Speed],
    daysPerWeek: 3,
    weeklySchedule: [0, 2, 4],
    workoutDuration: 60,
    duration: 12,
    workouts: (level: ExperienceLevel): Workout[] => {
      const mainSets = [
        { targetReps: 5 },
        { targetReps: 5 },
        { targetReps: 5, AMRAP: true },
        ...(level === ExperienceLevel.Intermediate
          ? [{ targetReps: 10, AMRAP: true, percentage: 65, ignoreForTracking: true }]
          : []),
      ];
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
              startingWeight,
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
              startingWeight,
            },
            {
              exercise: Exercise.Row,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
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
              startingWeight,
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
              startingWeight,
            },
            {
              exercise: Exercise.Pullup,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
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
    level: [ExperienceLevel.Intermediate, ExperienceLevel.Advanced, ExperienceLevel.Vigilante],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean, Goal.Speed],
    daysPerWeek: 3,
    weeklySchedule: [0, 2, 4],
    workoutDuration: 60,
    duration: 12,
    workouts: (): Workout[] => {
      const mainSets: RoutineSet[] = [
        { targetReps: 5, AMRAP: true },
        { targetReps: 10, AMRAP: true, percentage: 70, ignoreForTracking: true },
        { targetReps: 15, AMRAP: true, percentage: 60, ignoreForTracking: true },
      ];
      const mainRest = 2;
      return [
        {
          name: 'Workout A',
          routine: [
            {
              exercise: Exercise.MuscleUp,
              bodyweight: true,
              sets: Array(3).fill({ AMRAP: true }),
            },
            {
              exercise: Exercise.Squat,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
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
              startingWeight,
            },
            {
              exercise: Exercise.Row,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
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
              startingWeight,
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
              startingWeight,
            },
            {
              exercise: Exercise.Pullup,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Dip,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
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
              exercise: Exercise.TurkishGetUp,
              sets: Array(4).fill({ minReps: 8, maxReps: 12 }),
            },
          ],
        },
        {
          name: 'Workout C',
          routine: [
            {
              exercise: Exercise.HandstandPushup,
              bodyweight: true,
              sets: Array(3).fill({ AMRAP: true }),
            },
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
              sets: Array(4).fill({ minReps: 6, maxReps: 10 }),
              rest: mainRest,
              startingWeight: 'twelveRepMax',
            },
            {
              exercise: Exercise.DumbbellRow,
              sets: Array(4).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.DiamondPushUp,
              sets: Array(3).fill({ AMRAP: true }),
            },
            {
              exercise: Exercise.Chinup,
              sets: Array(3).fill({ AMRAP: true }),
            },
            {
              exercise: Exercise.HighPulls,
              sets: Array(3).fill({ targetReps: 12 }),
            },
            {
              exercise: Exercise.DbOverheadCarry,
              sets: Array(4).fill({ targetReps: 50 }),
            },
          ],
        },
      ];
    },
  },
];
