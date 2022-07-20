import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, RoutineSet, Workout } from '../interfaces';

export const wendlerRoutines: Program[] = [
  // {
  //   id: 'WendlerBBB',
  //   author: 'Jim Wendler',
  //   name: '5/3/1 Boring But Big',
  //   link: 'https://www.t-nation.com/workouts/boring-but-big-3-month-challenge/',
  //   level: [ExperienceLevel.Intermediate, ExperienceLevel.Advanced, ExperienceLevel.Vigilante],
  //   gender: [Gender.Male, Gender.Female],
  //   goal: [Goal.Strength, Goal.Size],
  //   daysPerWeek: 4,
  //   workoutDuration: 60,
  // },
  {
    id: 'WendlerMonolith',
    author: 'Jim Wendler',
    name: '5/3/1 Building the Monolith',
    link: 'https://www.jimwendler.com/blogs/jimwendler-com/101078918-building-the-monolith-5-3-1-for-size',
    level: [ExperienceLevel.Intermediate, ExperienceLevel.Advanced, ExperienceLevel.Vigilante],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size],
    daysPerWeek: 3,
    weeklySchedule: [0, 2, 4],
    workoutDuration: 75,
    duration: 6,
    workouts: (): Workout[] => {
      const mainRest = 2;
      const warmup: RoutineSet[] = [
        { percentage: 50, reps: 5, basis: 'threeRepMax' },
        { percentage: 60, reps: 5, basis: 'threeRepMax' },
      ];
      return [
        {
          name: 'Week 1 Workout A',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: [
                { percentage: 70, reps: 5, basis: 'threeRepMax' },
                { percentage: 80, reps: 5, basis: 'threeRepMax' },
                ...Array(5).fill({ percentage: 90, reps: 5, basis: 'threeRepMax' }),
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Press,
              warmup,
              sets: [
                { percentage: 70, reps: 5, basis: 'threeRepMax' },
                { percentage: 80, reps: 5, basis: 'threeRepMax' },
                { percentage: 90, reps: 5, basis: 'threeRepMax' },
                { percentage: 70, reps: 5, basis: 'threeRepMax', AMRAP: true },
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Chinup,
              warmup,
              sets: [{ reps: 100 }],
              bodyweight: true,
            },
            {
              exercise: Exercise.Facepull,
              sets: [{ reps: 100 }],
            },
            {
              exercise: Exercise.Dips,
              sets: [{ reps: 200 }],
              bodyweight: true,
            },
          ],
        },
        {
          name: 'Week 1 Workout B',
          routine: [
            {
              exercise: Exercise.Deadlift,
              warmup,
              sets: [
                { percentage: 70, reps: 5, basis: 'threeRepMax' },
                { percentage: 80, reps: 5, basis: 'threeRepMax' },
                ...Array(3).fill({ percentage: 90, reps: 5, basis: 'threeRepMax' }),
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Bench,
              warmup,
              sets: [
                { percentage: 70, reps: 5, basis: 'threeRepMax' },
                { percentage: 80, reps: 5, basis: 'threeRepMax' },
                ...Array(5).fill({ percentage: 90, reps: 5, basis: 'threeRepMax' }),
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.DumbbellRow,
              warmup,
              sets: Array(5).fill({ minReps: 10, maxReps: 20 }),
            },
            {
              exercise: Exercise.Curl,
              sets: [{ reps: 100 }],
            },
          ],
        },
        {
          name: 'Week 1 Workout C',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: [
                { percentage: 70, reps: 5, basis: 'threeRepMax' },
                { percentage: 80, reps: 5, basis: 'threeRepMax' },
                { percentage: 90, reps: 5, basis: 'threeRepMax' },
                { percentage: 45, targetReps: 20 },
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Press,
              warmup,
              sets: Array(10).fill({ percentage: 70, reps: 5 }),
              rest: mainRest,
            },
            {
              exercise: Exercise.Chinup,
              warmup,
              sets: Array(5).fill({ targetReps: 5 }),
            },
            {
              exercise: Exercise.Facepull,
              sets: [{ reps: 100 }],
            },
            {
              exercise: Exercise.Shrugs,
              sets: [{ reps: 100 }],
            },
          ],
        },
        {
          name: 'Week 2 Workout A',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: [
                { percentage: 65, reps: 5, basis: 'threeRepMax' },
                { percentage: 75, reps: 5, basis: 'threeRepMax' },
                ...Array(5).fill({ percentage: 85, reps: 5, basis: 'threeRepMax' }),
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Press,
              warmup,
              sets: [
                { percentage: 65, reps: 5, basis: 'threeRepMax' },
                { percentage: 75, reps: 5, basis: 'threeRepMax' },
                { percentage: 85, reps: 5, basis: 'threeRepMax' },
                { percentage: 65, reps: 5, basis: 'threeRepMax', AMRAP: true },
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Chinup,
              warmup,
              sets: [{ reps: 100 }],
              bodyweight: true,
            },
            {
              exercise: Exercise.Facepull,
              sets: [{ reps: 100 }],
            },
            {
              exercise: Exercise.Dips,
              sets: [{ reps: 200 }],
              bodyweight: true,
            },
          ],
        },
        {
          name: 'Week 2 Workout B',
          routine: [
            {
              exercise: Exercise.Deadlift,
              warmup,
              sets: [
                { percentage: 65, reps: 5, basis: 'threeRepMax' },
                { percentage: 75, reps: 5, basis: 'threeRepMax' },
                ...Array(3).fill({ percentage: 85, reps: 5, basis: 'threeRepMax' }),
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Bench,
              warmup,
              sets: [
                { percentage: 65, reps: 5, basis: 'threeRepMax' },
                { percentage: 75, reps: 5, basis: 'threeRepMax' },
                ...Array(5).fill({ percentage: 85, reps: 5, basis: 'threeRepMax' }),
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.DumbbellRow,
              warmup,
              sets: Array(5).fill({ minReps: 10, maxReps: 20 }),
            },
            {
              exercise: Exercise.Curl,
              sets: [{ reps: 100 }],
            },
          ],
        },
        {
          name: 'Week 2 Workout C',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: [
                { percentage: 65, reps: 5, basis: 'threeRepMax' },
                { percentage: 75, reps: 5, basis: 'threeRepMax' },
                { percentage: 85, reps: 5, basis: 'threeRepMax' },
                { percentage: 55, targetReps: 20 },
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Press,
              warmup,
              sets: Array(10).fill({ percentage: 50, reps: 5 }),
              rest: mainRest,
            },
            {
              exercise: Exercise.Chinup,
              warmup,
              sets: Array(5).fill({ targetReps: 5 }),
            },
            {
              exercise: Exercise.Facepull,
              sets: [{ reps: 100 }],
            },
            {
              exercise: Exercise.Shrugs,
              sets: [{ reps: 100 }],
            },
          ],
        },
        {
          name: 'Week 3 Workout A',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: [
                { percentage: 75, reps: 5, basis: 'threeRepMax' },
                { percentage: 85, reps: 5, basis: 'threeRepMax' },
                ...Array(5).fill({ percentage: 95, reps: 5, basis: 'threeRepMax' }),
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Press,
              warmup,
              sets: [
                { percentage: 75, reps: 5, basis: 'threeRepMax' },
                { percentage: 85, reps: 5, basis: 'threeRepMax' },
                { percentage: 95, reps: 5, basis: 'threeRepMax' },
                { percentage: 75, reps: 5, basis: 'threeRepMax', AMRAP: true },
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Chinup,
              warmup,
              sets: [{ reps: 100 }],
              bodyweight: true,
            },
            {
              exercise: Exercise.Facepull,
              sets: [{ reps: 100 }],
            },
            {
              exercise: Exercise.Dips,
              sets: [{ reps: 200 }],
              bodyweight: true,
            },
          ],
        },
        {
          name: 'Week 3 Workout B',
          routine: [
            {
              exercise: Exercise.Deadlift,
              warmup,
              sets: [
                { percentage: 75, reps: 5, basis: 'threeRepMax' },
                { percentage: 85, reps: 5, basis: 'threeRepMax' },
                ...Array(3).fill({ percentage: 95, reps: 5, basis: 'threeRepMax' }),
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Bench,
              warmup,
              sets: [
                { percentage: 75, reps: 5, basis: 'threeRepMax' },
                { percentage: 85, reps: 5, basis: 'threeRepMax' },
                ...Array(5).fill({ percentage: 95, reps: 5, basis: 'threeRepMax' }),
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.DumbbellRow,
              warmup,
              sets: Array(5).fill({ minReps: 10, maxReps: 20 }),
            },
            {
              exercise: Exercise.Curl,
              sets: [{ reps: 100 }],
            },
          ],
        },
        {
          name: 'Week 3 Workout C',
          routine: [
            {
              exercise: Exercise.Squat,
              warmup,
              sets: [
                { percentage: 75, reps: 5, basis: 'threeRepMax' },
                { percentage: 85, reps: 5, basis: 'threeRepMax' },
                { percentage: 95, reps: 5, basis: 'threeRepMax' },
                { percentage: 55, targetReps: 20 },
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Press,
              warmup,
              sets: Array(10).fill({ percentage: 75, reps: 5 }),
              rest: mainRest,
            },
            {
              exercise: Exercise.Chinup,
              warmup,
              sets: Array(5).fill({ targetReps: 5 }),
            },
            {
              exercise: Exercise.Facepull,
              sets: [{ reps: 100 }],
            },
            {
              exercise: Exercise.Shrugs,
              sets: [{ reps: 100 }],
            },
          ],
        },
      ];
    },
  },
  // {
  //   id: 'WendlerBodybuilding',
  //   author: 'Jim Wendler',
  //   name: '5/3/1 Bodybuilding',
  //   link: 'https://www.jimwendler.com/blogs/jimwendler-com/101075206-5-3-1-and-bodybuilding',
  //   level: [ExperienceLevel.Intermediate, ExperienceLevel.Advanced, ExperienceLevel.Vigilante],
  //   gender: [Gender.Male, Gender.Female],
  //   goal: [Goal.Strength, Goal.Size, Goal.Lean],
  //   daysPerWeek: 4,
  //   workoutDuration: 60,
  // },
];
