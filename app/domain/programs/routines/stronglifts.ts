import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, RoutineSet, Workout } from '../interfaces';

export const slRoutines: Program[] = [
  {
    id: 'StrongLifts',
    author: 'Mehdi (StrongLifts)',
    name: 'Strong Lifts',
    link: 'https://stronglifts.com/5x5/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 60,
    weeklySchedule: [0, 2, 4],
    duration: 12,
    workouts: (): Workout[] => {
      const rest = 3;
      const warmup = [
        { percentage: 40, reps: 5 },
        { percentage: 50, reps: 5 },
        { percentage: 60, reps: 5 },
      ];
      const sets = [{ targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }];
      return [
        {
          name: 'Workout A',
          video: 'EP2g3Sj3qSw',
          routine: [
            {
              exercise: Exercise.Squat,
              video: 'VnV7vEi7Sz8',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Bench,
              video: 'uwygcGdazeM',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Row,
              video: 'gQBSRBgRLVI',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Dips,
              optional: true,
              bodyweight: true,
              sets: [{ AMRAP: true }, { AMRAP: true }, { AMRAP: true }],
              rest: 2,
            },
          ],
        },
        {
          name: 'Workout B',
          video: 'ro3Mh9o7JPU',
          routine: [
            {
              exercise: Exercise.Squat,
              video: 'VnV7vEi7Sz8',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Press,
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Deadlift,
              video: 'WP8lEbeY4LM',
              warmup,
              sets: [{ targetReps: 5 }],
              rest,
            },
            {
              exercise: Exercise.Chinup,
              optional: true,
              bodyweight: true,
              sets: [{ AMRAP: true }, { AMRAP: true }, { AMRAP: true }],
              rest: 2,
            },
          ],
        },
      ];
    },
  },
  {
    id: 'ICF',
    author: 'Jason Blaha',
    name: 'Ice Cream Fitness 5x5',
    video: 'oAuARgqS6aQ',
    link: 'https://www.muscleandstrength.com/workouts/jason-blaha-ice-cream-fitness-5x5-novice-workout',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Size, Goal.Strength, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 90,
    weeklySchedule: [0, 2, 4],
    duration: 12,
    workouts: (): Workout[] => {
      const rest = 2;
      const warmup = [
        { weight: 20, reps: 5 },
        { percentage: 50, reps: 5 },
        { percentage: 60, reps: 5 },
      ];
      const sets = [{ targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }];
      const secondaryRest = 1.5;
      const secondarySets = [{ targetReps: 8 }, { targetReps: 8 }, { targetReps: 8 }];
      return [
        {
          name: 'Workout A',
          routine: [
            {
              exercise: Exercise.Squat,
              video: 'E9WmTCmITkY',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Bench,
              video: 'yS8yUgRMiy4',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Row,
              video: '2hbnw_wJ5-0',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Shrugs,
              sets: secondarySets,
              rest: secondaryRest,
            },
            {
              exercise: Exercise.TricepExtensions,
              video: 'Io4Fq0SpMAY',
              sets: secondarySets,
              rest: secondaryRest,
            },
            {
              exercise: Exercise.Curl,
              sets: secondarySets,
              rest: secondaryRest,
            },
            {
              exercise: Exercise.Hyperextensions,
              sets: [{ targetReps: 10 }, { targetReps: 10 }],
              rest: 1,
            },
            {
              exercise: Exercise.CableCrunches,
              video: '2SchEsVqgKc',
              sets: [{ targetReps: 10 }, { targetReps: 10 }, { targetReps: 10 }],
              rest: 1,
            },
          ],
        },
        {
          name: 'Workout B',
          video: 'ro3Mh9o7JPU',
          routine: [
            {
              exercise: Exercise.Squat,
              video: 'E9WmTCmITkY',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Press,
              video: 'm_WPH1NYPxc',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Row,
              video: '2hbnw_wJ5-0',
              note: '10% ligther than Workout A',
              ignoreForTracking: true,
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Deadlift,
              video: 'V8bDeB7UPFo',
              warmup,
              sets: [{ targetReps: 5 }],
              rest,
            },
            {
              exercise: Exercise.CloseGripBench,
              video: '8hgpyLrdWXs',
              sets: secondarySets,
              rest: secondaryRest,
            },
            {
              exercise: Exercise.InclineCurls,
              video: 'H2T3tSbI_iQ',
              sets: secondarySets,
              rest: secondaryRest,
            },
            {
              exercise: Exercise.CableCrunches,
              video: '2SchEsVqgKc',
              sets: [{ targetReps: 10 }, { targetReps: 10 }, { targetReps: 10 }],
              rest: 1,
            },
          ],
        },
      ];
    },
  },
  {
    id: 'Madcow',
    author: 'Mehdi (StrongLifts)',
    name: 'Madcow 5x5',
    link: 'https://stronglifts.com/madcow-5x5/',
    level: [ExperienceLevel.Intermediate, ExperienceLevel.Advanced],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 60,
    weeklySchedule: [0, 2, 4],
    duration: 12,
    workouts: (): Workout[] => {
      const rest = 3;
      const warmup: RoutineSet[] = [
        { percentage: 50, reps: 5, basis: 'fiveRepMax' },
        { percentage: 62.5, reps: 5, basis: 'fiveRepMax' },
        { percentage: 75, reps: 5, basis: 'fiveRepMax' },
        { percentage: 87.5, reps: 5, basis: 'fiveRepMax' },
      ];
      return [
        {
          name: 'Workout A',
          routine: [
            {
              exercise: Exercise.Squat,
              video: 'VnV7vEi7Sz8',
              warmup,
              sets: [{ targetReps: 5 }],
              rest,
            },
            {
              exercise: Exercise.Bench,
              video: 'uwygcGdazeM',
              warmup,
              sets: [{ targetReps: 5 }],
              rest,
            },
            {
              exercise: Exercise.Row,
              video: 'gQBSRBgRLVI',
              warmup,
              sets: [{ targetReps: 5 }],
              rest,
            },
            {
              exercise: Exercise.Hyperextensions,
              sets: [{ targetReps: 12 }, { targetReps: 12 }],
              rest: 2,
            },
            {
              exercise: Exercise.Situp,
              sets: [{ targetReps: 12 }, { targetReps: 12 }],
              rest: 2,
            },
          ],
        },
        {
          name: 'Workout B',
          routine: [
            {
              exercise: Exercise.Squat,
              video: 'VnV7vEi7Sz8',
              note: 'Lighter than monday for recovery',
              ignoreForTracking: true,
              warmup: [
                { percentage: 50, reps: 5, basis: 'fiveRepMax' },
                { percentage: 62.5, reps: 5, basis: 'fiveRepMax' },
              ],
              sets: [
                { percentage: 75, reps: 5, basis: 'fiveRepMax' },
                { percentage: 75, reps: 5, basis: 'fiveRepMax' },
              ],
              rest,
            },
            {
              exercise: Exercise.Press,
              warmup,
              sets: [{ targetReps: 5 }],
              rest,
            },
            {
              exercise: Exercise.Deadlift,
              video: 'WP8lEbeY4LM',
              warmup,
              sets: [{ targetReps: 5 }],
              rest,
            },
            {
              exercise: Exercise.Situp,
              sets: [{ targetReps: 12 }, { targetReps: 12 }, { targetReps: 12 }],
              rest: 2,
            },
          ],
        },
        {
          name: 'Workout C',
          routine: [
            {
              exercise: Exercise.Squat,
              video: 'VnV7vEi7Sz8',
              ignoreForTracking: true,
              warmup,
              sets: [
                { percentage: 102.5, targetReps: 3, basis: 'fiveRepMax' },
                { percentage: 77.5, targetReps: 8, basis: 'fiveRepMax' },
              ],
              rest,
            },
            {
              exercise: Exercise.Bench,
              video: 'uwygcGdazeM',
              ignoreForTracking: true,
              warmup,
              sets: [
                { percentage: 102.5, targetReps: 3, basis: 'fiveRepMax' },
                { percentage: 77.5, targetReps: 8, basis: 'fiveRepMax' },
              ],
              rest,
            },
            {
              exercise: Exercise.Row,
              video: 'gQBSRBgRLVI',
              ignoreForTracking: true,
              warmup,
              sets: [
                { percentage: 102.5, targetReps: 3, basis: 'fiveRepMax' },
                { percentage: 77.5, targetReps: 8, basis: 'fiveRepMax' },
              ],
              rest,
            },
            {
              exercise: Exercise.Dips,
              sets: [{ targetReps: 6 }, { targetReps: 6 }, { targetReps: 6 }],
              rest: 2,
            },
            {
              exercise: Exercise.Curl,
              sets: [{ targetReps: 8 }, { targetReps: 8 }, { targetReps: 8 }],
              rest: 2,
            },
            {
              exercise: Exercise.TricepExtensions,
              sets: [{ targetReps: 8 }, { targetReps: 8 }, { targetReps: 8 }],
              rest: 2,
            },
          ],
        },
      ];
    },
  },
];
