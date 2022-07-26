import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, Workout } from '../interfaces';

export const otherRoutines: Program[] = [
  {
    id: 'StartingAesthetics',
    name: 'Starting Aesthetics',
    link: 'https://powerexplosive.com/starting-aesthetics/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 4,
    workoutDuration: 45,
    weeklySchedule: [0, 1, 3, 5],
    duration: 8,
    workouts: (): Workout[] => {
      const startingWeight = 'tenRepMax';
      const warmup = [
        { percentage: 50, reps: 5 },
        { percentage: 60, reps: 5 },
        { percentage: 70, reps: 3 },
      ];
      const mainSets = [{ targetReps: 6 }, { targetReps: 6 }, { targetReps: 6, AMRAP: true }];
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
              exercise: Exercise.Press,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Dip,
              sets: Array(3).fill({ targetReps: 8 }),
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(3).fill({ AMRAP: true }),
            },
          ],
        },
        {
          name: 'Workout B',
          routine: [
            {
              exercise: Exercise.Deadlift,
              warmup,
              sets: [{ targetReps: 5 }, { targetReps: 5 }, { targetReps: 5, AMRAP: true }],
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
              exercise: Exercise.Pullup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Curl,
              sets: Array(3).fill({ targetReps: 8 }),
            },
            {
              exercise: Exercise.CableCrunches,
              sets: Array(3).fill({ targetReps: 10 }),
            },
          ],
        },
      ];
    },
  },
  {
    id: 'PHAT',
    author: 'Layne Norton',
    name: 'PHAT: Power Hypertrophy Adaptive Training',
    link: 'https://simplyshredded.com/mega-feature-layne-norton-training-series-full-powerhypertrophy-routine-updated-2011.html',
    level: [ExperienceLevel.Beginner],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 5,
    workoutDuration: 60,
    weeklySchedule: [0, 1, 3, 4, 5],
    duration: 12,
    workouts: (): Workout[] => {
      const warmup = [
        { percentage: 50, reps: 5 },
        { percentage: 60, reps: 5 },
        { percentage: 70, reps: 3 },
      ];
      return [
        {
          name: 'Upper Power',
          routine: [
            {
              exercise: Exercise.Row,
              warmup,
              sets: Array(3).fill({ minReps: 3, maxReps: 5 }),
              rest: 3,
              startingWeight: 'fiveRepMax',
            },
            {
              exercise: Exercise.Pullup,
              sets: Array(2).fill({ minReps: 6, maxReps: 10 }),
              rest: 2,
            },
            {
              exercise: Exercise.RackChins,
              sets: Array(2).fill({ minReps: 6, maxReps: 10 }),
            },
            {
              exercise: Exercise.DumbbellBench,
              warmup,
              sets: Array(3).fill({ minReps: 3, maxReps: 5 }),
              rest: 3,
              startingWeight: 'fiveRepMax',
            },
            {
              exercise: Exercise.Dip,
              sets: Array(2).fill({ minReps: 6, maxReps: 10 }),
              rest: 2,
            },
            {
              exercise: Exercise.DumbbellPress,
              sets: Array(3).fill({ minReps: 6, maxReps: 10 }),
              rest: 2,
            },
            {
              exercise: Exercise.Curl,
              sets: Array(3).fill({ minReps: 6, maxReps: 10 }),
            },
            {
              exercise: Exercise.Skullcrushers,
              sets: Array(3).fill({ minReps: 6, maxReps: 10 }),
            },
          ],
        },
        {
          name: 'Lower Power',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: Array(3).fill({ minReps: 3, maxReps: 5 }),
              rest: 3,
              startingWeight: 'fiveRepMax',
            },
            {
              exercise: Exercise.HackSquats,
              sets: Array(2).fill({ minReps: 6, maxReps: 10 }),
              rest: 2,
            },
            {
              exercise: Exercise.LegExtensions,
              sets: Array(2).fill({ minReps: 6, maxReps: 10 }),
            },
            {
              exercise: Exercise.RomanianDeadlift,
              sets: Array(3).fill({ minReps: 5, maxReps: 8 }),
              rest: 3,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.LegCurls,
              sets: Array(2).fill({ minReps: 6, maxReps: 10 }),
              rest: 2,
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(5).fill({ minReps: 6, maxReps: 10 }),
            },
          ],
        },
        {
          name: 'Back & Shoulders Hypertrophy',
          routine: [
            {
              exercise: Exercise.Row,
              warmup,
              sets: Array(6).fill({ targetReps: 3, percentage: 70, basis: 'fiveRepMax' }),
              rest: 1.5,
            },
            {
              exercise: Exercise.RackChins,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.CableRow,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.DumbbellRow,
              sets: Array(2).fill({ minReps: 12, maxReps: 15 }),
            },
            {
              exercise: Exercise.DumbbellPress,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
              rest: 1.5,
            },
            {
              exercise: Exercise.HighPulls,
              sets: Array(2).fill({ minReps: 12, maxReps: 15 }),
            },
            {
              exercise: Exercise.LateralRaises,
              sets: Array(3).fill({ minReps: 12, maxReps: 20 }),
            },
          ],
        },
        {
          name: 'Lower Body Hypertrophy',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: Array(6).fill({ targetReps: 3, percentage: 70, basis: 'fiveRepMax' }),
              rest: 1.5,
            },
            {
              exercise: Exercise.HackSquats,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.LegPress,
              sets: Array(3).fill({ minReps: 12, maxReps: 15 }),
            },
            {
              exercise: Exercise.LegExtensions,
              sets: Array(3).fill({ minReps: 15, maxReps: 20 }),
            },
            {
              exercise: Exercise.RomanianDeadlift,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
              rest: 1.5,
            },
            {
              exercise: Exercise.LegCurls,
              sets: Array(2).fill({ minReps: 12, maxReps: 15 }),
            },
            {
              exercise: Exercise.LegCurls,
              sets: Array(2).fill({ minReps: 15, maxReps: 20 }),
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(4).fill({ minReps: 10, maxReps: 15 }),
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(3).fill({ minReps: 15, maxReps: 20 }),
            },
          ],
        },
        {
          name: 'Chest & Arms Hypertrophy',
          routine: [
            {
              exercise: Exercise.DumbbellPress,
              warmup,
              sets: Array(6).fill({ targetReps: 3, percentage: 70, basis: 'fiveRepMax' }),
              rest: 1.5,
            },
            {
              exercise: Exercise.InclineDumbbellBench,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.MachineChestPress,
              sets: Array(3).fill({ minReps: 12, maxReps: 15 }),
            },
            {
              exercise: Exercise.InclineFlyes,
              sets: Array(2).fill({ minReps: 15, maxReps: 20 }),
            },
            {
              exercise: Exercise.PreacherCurl,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.ConcentrationCurl,
              sets: Array(2).fill({ minReps: 12, maxReps: 15 }),
            },
            {
              exercise: Exercise.SpiderCurls,
              sets: Array(2).fill({ minReps: 15, maxReps: 20 }),
            },
            {
              exercise: Exercise.TricepExtensions,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.TricepRopePushdowns,
              sets: Array(2).fill({ minReps: 12, maxReps: 15 }),
            },
            {
              exercise: Exercise.Kickbacks,
              sets: Array(2).fill({ minReps: 15, maxReps: 20 }),
            },
          ],
        },
      ];
    },
  },
  {
    id: 'PHUL',
    author: 'Brandon Campbell',
    name: 'PHUL: Power Hypertrophy Upper Lower',
    link: 'https://www.muscleandstrength.com/workouts/phul-workout',
    level: [ExperienceLevel.Beginner],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 4,
    workoutDuration: 60,
    weeklySchedule: [0, 1, 3, 4],
    duration: 12,
    workouts: (): Workout[] => {
      const warmup = [
        { percentage: 50, reps: 5 },
        { percentage: 60, reps: 5 },
        { percentage: 70, reps: 3 },
      ];
      return [
        {
          name: 'Upper Power',
          routine: [
            {
              exercise: Exercise.Bench,
              warmup,
              sets: Array(4).fill({ minReps: 3, maxReps: 5 }),
              rest: 3,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.InclineDumbbellBench,
              sets: Array(4).fill({ minReps: 6, maxReps: 10 }),
              rest: 2,
            },
            {
              exercise: Exercise.Row,
              warmup,
              sets: Array(4).fill({ minReps: 3, maxReps: 5 }),
              rest: 3,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.Pulldowns,
              sets: Array(4).fill({ minReps: 6, maxReps: 10 }),
              rest: 2,
            },
            {
              exercise: Exercise.Press,
              sets: Array(3).fill({ minReps: 5, maxReps: 8 }),
              rest: 2,
              startingWeight: 'tenRepMax',
            },
            {
              exercise: Exercise.Curl,
              sets: Array(3).fill({ minReps: 6, maxReps: 10 }),
            },
            {
              exercise: Exercise.Skullcrushers,
              sets: Array(3).fill({ minReps: 6, maxReps: 10 }),
            },
          ],
        },
        {
          name: 'Lower Power',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: Array(4).fill({ minReps: 3, maxReps: 5 }),
              rest: 3,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.Deadlift,
              warmup,
              sets: Array(4).fill({ minReps: 3, maxReps: 5 }),
              rest: 3,
              startingWeight: 'eightRepMax',
            },
            {
              exercise: Exercise.LegPress,
              sets: Array(4).fill({ minReps: 10, maxReps: 15 }),
              rest: 2,
            },
            {
              exercise: Exercise.LegCurls,
              sets: Array(4).fill({ minReps: 6, maxReps: 10 }),
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(4).fill({ minReps: 6, maxReps: 10 }),
            },
          ],
        },
        {
          name: 'Upper Hyperthrophy',
          routine: [
            {
              exercise: Exercise.InclineBench,
              warmup,
              sets: Array(4).fill({ minReps: 8, maxReps: 12, percentage: 70 }),
              rest: 2,
            },
            {
              exercise: Exercise.DumbbellBench,
              sets: Array(4).fill({ minReps: 8, maxReps: 12, percentage: 70 }),
              rest: 2,
            },
            {
              exercise: Exercise.CableRow,
              warmup,
              sets: Array(4).fill({ minReps: 8, maxReps: 12, percentage: 70 }),
              rest: 2,
            },
            {
              exercise: Exercise.DumbbellRow,
              sets: Array(4).fill({ minReps: 8, maxReps: 12, percentage: 70 }),
            },
            {
              exercise: Exercise.LateralRaises,
              sets: Array(4).fill({ minReps: 8, maxReps: 12, percentage: 70 }),
            },
            {
              exercise: Exercise.InclineCurls,
              sets: Array(4).fill({ minReps: 8, maxReps: 12, percentage: 70 }),
            },
            {
              exercise: Exercise.TricepRopePushdowns,
              sets: Array(4).fill({ minReps: 8, maxReps: 12, percentage: 70 }),
            },
          ],
        },
        {
          name: 'Lower Hyperthrophy',
          routine: [
            {
              exercise: Exercise.FrontSquat,
              warmup,
              sets: Array(4).fill({ minReps: 8, maxReps: 12, percentage: 70 }),
              rest: 2,
            },
            {
              exercise: Exercise.Lunge,
              sets: Array(4).fill({ minReps: 8, maxReps: 12, percentage: 70 }),
            },
            {
              exercise: Exercise.LegExtensions,
              sets: Array(4).fill({ minReps: 10, maxReps: 15, percentage: 70 }),
            },
            {
              exercise: Exercise.LegCurls,
              sets: Array(4).fill({ minReps: 10, maxReps: 15, percentage: 70 }),
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(8).fill({ minReps: 8, maxReps: 12, percentage: 70 }),
            },
          ],
        },
      ];
    },
  },
];
