import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, Workout } from '../interfaces';

export const redditRoutines: Program[] = [
  {
    id: 'RedditBegginers',
    author: 'r/Fitness',
    name: 'Reddit Basic Beginner Routine',
    link: 'https://thefitness.wiki/routines/r-fitness-basic-beginner-routine/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 45,
    weeklySchedule: [0, 2, 4],
    duration: 12,
    workouts: (): Workout[] => {
      const mainSets = [{ targetReps: 5 }, { targetReps: 5 }, { targetReps: 5, AMRAP: true }];
      const mainRest = 3;
      const startingWeight = 'eightRepMax';
      const warmup = [
        { percentage: 50, reps: 5 },
        { percentage: 60, reps: 5 },
        { percentage: 70, reps: 3 },
      ];
      return [
        {
          name: 'Workout A',
          routine: [
            {
              exercise: Exercise.Row,
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
              exercise: Exercise.Squat,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
          ],
        },
        {
          name: 'Workout B',
          routine: [
            {
              exercise: Exercise.Chinup,
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
              exercise: Exercise.Deadlift,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
          ],
        },
      ];
    },
  },
  {
    id: 'RedditPPL',
    author: 'Metallicadpa',
    name: 'Reddit Linear Progression Push Pull Legs',
    link: 'https://www.reddit.com/r/Fitness/comments/37ylk5/a_linear_progression_based_ppl_program_for/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 6,
    workoutDuration: 45,
    weeklySchedule: [0, 1, 2, 3, 4, 5, 6],
    duration: 12,
    workouts: (): Workout[] => {
      const mainSets = [
        { targetReps: 5 },
        { targetReps: 5 },
        { targetReps: 5 },
        { targetReps: 5 },
        { targetReps: 5, AMRAP: true },
      ];
      const mainRest = 3;
      const startingWeight = 'eightRepMax';
      const warmup = [
        { percentage: 50, reps: 5 },
        { percentage: 60, reps: 5 },
        { percentage: 70, reps: 3 },
      ];
      return [
        {
          name: 'Pull A',
          routine: [
            {
              exercise: Exercise.Deadlift,
              warmup,
              sets: [{ targetReps: 5, AMRAP: true }],
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Pullup,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
              rest: 2,
            },
            {
              exercise: Exercise.CableRow,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
              rest: 2,
            },
            {
              exercise: Exercise.Facepull,
              sets: Array(5).fill({ minReps: 12, maxReps: 20 }),
              rest: 2,
            },
            {
              exercise: Exercise.HammerCurl,
              sets: Array(4).fill({ minReps: 8, maxReps: 12 }),
              rest: 2,
            },
            {
              exercise: Exercise.InclineCurls,
              sets: Array(4).fill({ minReps: 8, maxReps: 12 }),
              rest: 2,
            },
          ],
        },
        {
          name: 'Push A',
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
              ignoreForTracking: true,
              sets: Array(3).fill({ minReps: 8, maxReps: 12, percentage: 70 }),
              rest: 2,
            },
            {
              exercise: Exercise.InclineDumbbellBench,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.TricepRopePushdowns,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.LateralRaises,
              sets: Array(6).fill({ minReps: 15, maxReps: 20 }),
            },
            {
              exercise: Exercise.TricepExtensions,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
          ],
        },
        {
          name: 'Legs A',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: [{ targetReps: 5 }, { targetReps: 5 }, { targetReps: 5, AMRAP: true }],
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.RomanianDeadlift,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
              rest: 2,
            },
            {
              exercise: Exercise.LegPress,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.LegCurls,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(5).fill({ minReps: 8, maxReps: 12 }),
            },
          ],
        },

        {
          name: 'Pull B',
          routine: [
            {
              exercise: Exercise.Row,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Pulldowns,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
              rest: 2,
            },
            {
              exercise: Exercise.CableRow,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
              rest: 2,
            },
            {
              exercise: Exercise.Facepull,
              sets: Array(5).fill({ minReps: 12, maxReps: 20 }),
              rest: 2,
            },
            {
              exercise: Exercise.Curl,
              sets: Array(4).fill({ minReps: 8, maxReps: 12 }),
              rest: 2,
            },
            {
              exercise: Exercise.HammerCurl,
              sets: Array(4).fill({ minReps: 8, maxReps: 12 }),
              rest: 2,
            },
          ],
        },
        {
          name: 'Push B',
          routine: [
            {
              exercise: Exercise.Press,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Bench,
              ignoreForTracking: true,
              sets: Array(3).fill({ minReps: 8, maxReps: 12, percentage: 70 }),
              rest: 2,
            },
            {
              exercise: Exercise.InclineDumbbellBench,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.TricepRopePushdowns,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.LateralRaises,
              sets: Array(6).fill({ minReps: 15, maxReps: 20 }),
            },
            {
              exercise: Exercise.TricepExtensions,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
          ],
        },
        {
          name: 'Legs B',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: [{ targetReps: 5 }, { targetReps: 5 }, { targetReps: 5, AMRAP: true }],
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.RomanianDeadlift,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
              rest: 2,
            },
            {
              exercise: Exercise.LegPress,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.LegCurls,
              sets: Array(3).fill({ minReps: 8, maxReps: 12 }),
            },
            {
              exercise: Exercise.Calfs,
              sets: Array(5).fill({ minReps: 12, maxReps: 20 }),
            },
          ],
        },
      ];
    },
  },
];
