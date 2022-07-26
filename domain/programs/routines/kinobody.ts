import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, RoutineSet, Workout } from '../interfaces';

const startingWeight = 'fiveRepMax';

const warmup: RoutineSet[] = [
  { percentage: 50, reps: 5, basis: 'fiveRepMax' },
  { percentage: 70, reps: 5, basis: 'fiveRepMax' },
  { percentage: 80, reps: 3, basis: 'fiveRepMax' },
];

const rptSets: RoutineSet[] = [
  { targetReps: 6 },
  { targetReps: 8, percentage: 90, basis: 'firstSet' },
  { targetReps: 10, percentage: 80, basis: 'firstSet' },
];

const mainRest = 3;

export const kinobodyRoutines: Program[] = [
  {
    id: 'KinoLucifer',
    name: 'Kinobody Greek God - Lucifer Workout',
    author: "Greg O'Gallagher",
    link: 'https://blog.kinobody.com/best-of/celebrity-workout-routines/build-devilish-strength-with-the-kinobody-tom-ellis-lucifer-workout/',
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
          name: 'Workout A: Chest, Shoulders, Triceps and Abs',
          routine: [
            {
              exercise: Exercise.InclineBench,
              warmup,
              sets: rptSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Press,
              sets: rptSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.TricepRopePushdowns,
              sets: [
                { targetReps: 8 },
                { targetReps: 10, percentage: 90, basis: 'firstSet' },
                { targetReps: 12, percentage: 80, basis: 'firstSet' },
              ],
              rest: 2,
            },
            {
              exercise: Exercise.LateralRaises,
              sets: [{ targetReps: 15 }, { targetReps: 6 }, { targetReps: 6 }, { targetReps: 6 }],
              rest: 0.25,
            },
            {
              exercise: Exercise.LegRaises,
              sets: [{ targetReps: 12 }, { targetReps: 12 }, { targetReps: 12 }],
            },
          ],
        },
        {
          name: 'Workout B: Back, Biceps and Legs',
          routine: [
            {
              exercise: Exercise.Chinup,
              warmup: [
                { reps: 5, weight: 0 },
                { reps: 5, weight: 0 },
              ],
              sets: rptSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.HammerCurl,
              sets: [
                { targetReps: 8 },
                { targetReps: 8, percentage: 90, basis: 'firstSet' },
                { targetReps: 10, percentage: 80, basis: 'firstSet' },
              ],
              rest: 2,
            },
            {
              exercise: Exercise.BulgarianSplitSquat,
              warmup,
              sets: [{ targetReps: 8 }, { targetReps: 8 }, { targetReps: 8 }, { targetReps: 8 }],
              rest: 2,
            },
            {
              exercise: Exercise.RomanianDeadlift,
              sets: [{ targetReps: 12 }, { targetReps: 12 }, { targetReps: 12 }, { targetReps: 12 }],
              rest: 2,
            },
            {
              exercise: Exercise.Facepull,
              sets: [{ targetReps: 15 }, { targetReps: 15 }, { targetReps: 15 }, { targetReps: 15 }],
            },
          ],
        },
      ];
    },
  },
  {
    id: 'KinoThor',
    name: 'Kinobody Superhero - Thor Workout',
    author: "Greg O'Gallagher",
    link: 'https://blog.kinobody.com/workouts-and-exercises/chris-hemsworth-thor-ragnarok-workout-routine/',
    level: [ExperienceLevel.Novice, ExperienceLevel.Intermediate, ExperienceLevel.Advanced],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 60,
    weeklySchedule: [0, 2, 4],
    duration: 8,
    workouts: (): Workout[] => {
      return [
        {
          name: 'Workout A: Upperbody (Chest Emphasis)',
          routine: [
            {
              exercise: Exercise.InclineBench,
              warmup,
              sets: rptSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.CableRow,
              warmup,
              sets: Array(3).fill({ minReps: 6, maxReps: 10 }),
              rest: 2,
            },
            {
              exercise: Exercise.DumbbellBench,
              sets: rptSets,
              rest: 2,
            },
            {
              exercise: Exercise.Curl,
              sets: Array(3).fill({ minReps: 6, maxReps: 8 }),
              rest: 2,
            },
            {
              exercise: Exercise.Skullcrushers,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.LateralRaises,
              sets: [{ targetReps: 15 }, { targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }],
              rest: 0.25,
            },
          ],
        },
        {
          name: 'Workout B: Legs & Abs',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: rptSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.RomanianDeadlift,
              sets: Array(4).fill({ minReps: 8, maxReps: 10 }),
              rest: 2,
            },
            {
              exercise: Exercise.LegExtensions,
              sets: Array(3).fill({ minReps: 10, maxReps: 15 }),
              rest: 1.5,
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(3).fill({ minReps: 10, maxReps: 15 }),
              rest: 1,
            },
            {
              exercise: Exercise.LegRaises,
              sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
            },
            {
              exercise: Exercise.AbWheel,
              sets: Array(4).fill({ minReps: 10, maxReps: 15 }),
            },
          ],
        },
        {
          name: 'Workout C: Upperbody (Shoulder & Arm Emphasis)',
          routine: [
            {
              exercise: Exercise.Press,
              warmup,
              sets: rptSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Chinup,
              warmup: [{ reps: 5 }, { reps: 5 }],
              sets: rptSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.InclineFlyes,
              sets: [{ targetReps: 15 }, { targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }],
              rest: 0.25,
            },
            {
              exercise: Exercise.InclineCurls,
              sets: Array(3).fill({ minReps: 6, maxReps: 8 }),
              rest: 2,
            },
            {
              exercise: Exercise.TricepRopePushdowns,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.OneArmLateralRaises,
              sets: [{ targetReps: 15 }, { targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }],
              rest: 0.25,
            },
          ],
        },
      ];
    },
  },
  {
    id: 'KinoSuperman',
    name: 'Kinobody Superhero - Superman Workout',
    author: "Greg O'Gallagher",
    link: 'https://blog.kinobody.com/workouts-and-exercises/henry-cavill-workout/',
    level: [ExperienceLevel.Novice, ExperienceLevel.Intermediate, ExperienceLevel.Advanced],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 60,
    weeklySchedule: [0, 2, 4],
    duration: 8,
    workouts: (): Workout[] => {
      const mainSets: RoutineSet[] = [
        { minReps: 6, maxReps: 8 },
        { minReps: 6, maxReps: 8 },
        { minReps: 8, maxReps: 10 },
        { minReps: 8, maxReps: 10 },
      ];
      return [
        {
          name: 'Workout A: Upperbody (Chest Emphasis)',
          routine: [
            {
              exercise: Exercise.InclineBench,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.CableRow,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.DumbbellBench,
              sets: [{ targetReps: 12 }, { targetReps: 10 }, { targetReps: 8 }, { targetReps: 6 }],
              rest: 0.5,
            },
            {
              exercise: Exercise.Curl,
              sets: Array(3).fill({ minReps: 6, maxReps: 8 }),
              rest: 2,
            },
            {
              exercise: Exercise.Skullcrushers,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.LateralRaises,
              sets: [{ targetReps: 12 }, { targetReps: 10 }, { targetReps: 8 }, { targetReps: 6 }, { minReps: 12, maxReps: 15 }],
              rest: 0.5,
            },
          ],
        },
        {
          name: 'Workout B: Legs & Abs',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: rptSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.RomanianDeadlift,
              sets: Array(4).fill({ minReps: 8, maxReps: 10 }),
              rest: 2,
            },
            {
              exercise: Exercise.LegExtensions,
              sets: Array(3).fill({ minReps: 10, maxReps: 15 }),
              rest: 1.5,
            },
            {
              exercise: Exercise.LegCurls,
              sets: Array(3).fill({ minReps: 10, maxReps: 15 }),
              rest: 1.5,
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(3).fill({ minReps: 10, maxReps: 15 }),
              rest: 1,
            },
            {
              exercise: Exercise.LegRaises,
              sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
            },
            {
              exercise: Exercise.AbWheel,
              sets: Array(4).fill({ minReps: 10, maxReps: 15 }),
            },
          ],
        },
        {
          name: 'Workout C: Upperbody (Shoulder Emphasis)',
          routine: [
            {
              exercise: Exercise.Press,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Pullup,
              warmup: [{ reps: 5 }, { reps: 5 }],
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.InclineDumbbellBench,
              sets: [{ targetReps: 12 }, { targetReps: 10 }, { targetReps: 8 }, { targetReps: 6 }],
              rest: 0.5,
            },
            {
              exercise: Exercise.InclineCurls,
              sets: Array(3).fill({ minReps: 6, maxReps: 8 }),
              rest: 2,
            },
            {
              exercise: Exercise.TricepRopePushdowns,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.LateralRaises,
              sets: [{ targetReps: 12 }, { targetReps: 10 }, { targetReps: 8 }, { targetReps: 6 }, { minReps: 12, maxReps: 15 }],
              rest: 0.5,
            },
          ],
        },
      ];
    },
  },
];
