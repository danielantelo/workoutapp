import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, RoutineSet, Workout } from '../interfaces';

const standard531Cycle: RoutineSet[][] = [
  [
    { percentage: 65, targetReps: 5, basis: 'threeRepMax', ignoreForTracking: true },
    { percentage: 75, targetReps: 5, basis: 'threeRepMax', ignoreForTracking: true },
    { percentage: 85, targetReps: 5, basis: 'threeRepMax', AMRAP: true, ignoreForTracking: true },
  ],
  [
    { percentage: 70, targetReps: 3, basis: 'threeRepMax', ignoreForTracking: true },
    { percentage: 80, targetReps: 3, basis: 'threeRepMax', ignoreForTracking: true },
    { percentage: 90, targetReps: 3, basis: 'threeRepMax', AMRAP: true, ignoreForTracking: true },
  ],
  [
    { percentage: 75, targetReps: 5, basis: 'threeRepMax', ignoreForTracking: true },
    { percentage: 85, targetReps: 3, basis: 'threeRepMax', ignoreForTracking: true },
    { percentage: 95, targetReps: 1, basis: 'threeRepMax', AMRAP: true }, // only set used for recalculating 1RM
  ],
  [
    { percentage: 40, targetReps: 5, basis: 'threeRepMax', ignoreForTracking: true },
    { percentage: 50, targetReps: 5, basis: 'threeRepMax', ignoreForTracking: true },
    { percentage: 60, targetReps: 5, basis: 'threeRepMax', AMRAP: true, ignoreForTracking: true },
  ],
];

export const wendlerRoutines: Program[] = [
  {
    id: 'WendlerBBB',
    author: 'Jim Wendler',
    name: '5/3/1 Boring But Big',
    link: 'https://www.jimwendler.com/blogs/jimwendler-com/101077382-boring-but-big',
    level: [ExperienceLevel.Intermediate, ExperienceLevel.Advanced, ExperienceLevel.Vigilante],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size],
    daysPerWeek: 4,
    weeklySchedule: [0, 1, 3, 4],
    workoutDuration: 60,
    duration: 4,
    workouts: (): Workout[] => {
      const mainRest = 2;
      const warmup: RoutineSet[] = [
        { percentage: 40, reps: 5, basis: 'threeRepMax' },
        { percentage: 50, reps: 5, basis: 'threeRepMax' },
        { percentage: 60, reps: 3, basis: 'threeRepMax' },
      ];
      const workouts: Workout[] = standard531Cycle
        .map((mainSets, weekIndex) => {
          const weekNumber = weekIndex + 1;
          return [
            {
              name: `Week ${weekNumber} Press`,
              routine: [
                {
                  exercise: Exercise.Press,
                  warmup,
                  sets: mainSets,
                  rest: mainRest,
                },
                {
                  exercise: Exercise.Bench,
                  sets: Array(5).fill({ percentage: 60, targetReps: 10, basis: 'threeRepMax' }),
                },
                {
                  exercise: Exercise.Chinup,
                  sets: Array(5).fill({ targetReps: 10 }),
                  bodyweight: true,
                },
                {
                  exercise: Exercise.TricepExtensions,
                  sets: Array(3).fill({ targetReps: 10 }),
                },
                {
                  exercise: Exercise.Curl,
                  sets: Array(3).fill({ targetReps: 10 }),
                },
                {
                  exercise: Exercise.Facepull,
                  sets: Array(3).fill({ targetReps: 10 }),
                },
              ],
            },
            {
              name: `Week ${weekNumber} Deadlift`,
              routine: [
                {
                  exercise: Exercise.Deadlift,
                  warmup,
                  sets: mainSets,
                  rest: mainRest,
                },
                {
                  exercise: Exercise.Squat,
                  sets: Array(5).fill({ percentage: 60, targetReps: 10, basis: 'threeRepMax' }),
                },
                {
                  exercise: Exercise.CableCrunches,
                  sets: Array(5).fill({ minReps: 10, maxReps: 20 }),
                },
              ],
            },
            {
              name: `Week ${weekNumber} Bench`,
              routine: [
                {
                  exercise: Exercise.Bench,
                  warmup,
                  sets: mainSets,
                  rest: mainRest,
                },
                {
                  exercise: Exercise.Press,
                  sets: Array(5).fill({ percentage: 60, targetReps: 10, basis: 'threeRepMax' }),
                },
                {
                  exercise: Exercise.DumbbellRow,
                  sets: Array(5).fill({ targetReps: 10 }),
                  bodyweight: true,
                },
                {
                  exercise: Exercise.TricepExtensions,
                  sets: Array(3).fill({ targetReps: 10 }),
                },
                {
                  exercise: Exercise.Curl,
                  sets: Array(3).fill({ targetReps: 10 }),
                },
                {
                  exercise: Exercise.Facepull,
                  sets: Array(3).fill({ targetReps: 10 }),
                },
              ],
            },
            {
              name: `Week ${weekNumber} Squat`,
              routine: [
                {
                  exercise: Exercise.Squat,
                  warmup,
                  sets: mainSets,
                  rest: mainRest,
                },
                {
                  exercise: Exercise.Deadlift,
                  sets: Array(5).fill({ percentage: 60, targetReps: 10, basis: 'threeRepMax' }),
                },
                {
                  exercise: Exercise.LegRaises,
                  sets: Array(5).fill({ minReps: 10, maxReps: 20 }),
                  bodyweight: true,
                },
              ],
            },
          ];
        })
        .flat();
      return workouts;
    },
  },
  {
    id: 'WendlerBodybuilding',
    author: 'Jim Wendler',
    name: '5/3/1 Bodybuilding',
    link: 'https://www.jimwendler.com/blogs/jimwendler-com/101075206-5-3-1-and-bodybuilding',
    level: [ExperienceLevel.Intermediate, ExperienceLevel.Advanced, ExperienceLevel.Vigilante],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 4,
    weeklySchedule: [0, 1, 3, 4],
    workoutDuration: 60,
    duration: 4,
    workouts: (): Workout[] => {
      const mainRest = 2;
      const warmup: RoutineSet[] = [
        { percentage: 40, reps: 5, basis: 'threeRepMax' },
        { percentage: 50, reps: 5, basis: 'threeRepMax' },
        { percentage: 60, reps: 3, basis: 'threeRepMax' },
      ];
      const workouts: Workout[] = standard531Cycle
        .map((mainSets, weekIndex) => {
          const weekNumber = weekIndex + 1;
          return [
            {
              name: `Week ${weekNumber} Shoulders and Biceps`,
              routine: [
                {
                  exercise: Exercise.Press,
                  warmup,
                  sets: mainSets,
                  rest: mainRest,
                },
                {
                  exercise: Exercise.DumbbellPress,
                  sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
                },
                {
                  exercise: Exercise.LateralRaises,
                  sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
                },
                {
                  exercise: Exercise.Curl,
                  sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
                },
                {
                  exercise: Exercise.PreacherCurl,
                  sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
                },
              ],
            },
            {
              name: `Week ${weekNumber} Back`,
              routine: [
                {
                  exercise: Exercise.Deadlift,
                  warmup,
                  sets: mainSets,
                  rest: mainRest,
                },
                {
                  exercise: Exercise.Row,
                  sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
                },
                {
                  exercise: Exercise.Chinup,
                  warmup,
                  sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
                },
                {
                  exercise: Exercise.GoodMorning,
                  warmup,
                  sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
                },
                {
                  exercise: Exercise.LegRaises,
                  warmup,
                  sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
                },
                {
                  exercise: Exercise.Facepull,
                  sets: Array(3).fill({ targetReps: 12 }),
                },
              ],
            },
            {
              name: `Week ${weekNumber} Chest and Triceps`,
              routine: [
                {
                  exercise: Exercise.Bench,
                  warmup,
                  sets: mainSets,
                  rest: mainRest,
                },
                {
                  exercise: Exercise.Dips,
                  sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
                },
                {
                  exercise: Exercise.Flyes,
                  sets: Array(4).fill({ minReps: 10, maxReps: 12 }),
                  bodyweight: true,
                },
                {
                  exercise: Exercise.TricepExtensions,
                  sets: Array(5).fill({ targetReps: 20 }),
                },
                {
                  exercise: Exercise.Pushup,
                  sets: Array(4).fill({ AMRAP: true }),
                  bodyweight: true,
                },
              ],
            },
            {
              name: `Week ${weekNumber} Legs and Abs`,
              routine: [
                {
                  exercise: Exercise.Squat,
                  warmup,
                  sets: mainSets,
                  rest: mainRest,
                },
                {
                  exercise: Exercise.LegPress,
                  sets: Array(5).fill({ minReps: 12, maxReps: 15 }),
                },
                {
                  exercise: Exercise.LegCurls,
                  sets: Array(5).fill({ minReps: 12, maxReps: 15 }),
                },
                {
                  exercise: Exercise.LegExtensions,
                  sets: Array(4).fill({ minReps: 12, maxReps: 15 }),
                },
                {
                  exercise: Exercise.AbWheel,
                  sets: Array(4).fill({ minReps: 12 }),
                },
              ],
            },
          ];
        })
        .flat();
      return workouts;
    },
  },
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
              ignoreForTracking: true,
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
              ignoreForTracking: true,
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
              exercise: Exercise.Pullup,
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
              bodyweight: true,
            },
            {
              exercise: Exercise.Facepull,
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
            },
            {
              exercise: Exercise.Dips,
              ignoreForTracking: true,
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
              ignoreForTracking: true,
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
              ignoreForTracking: true,
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
              sets: Array(5).fill({ minReps: 10, maxReps: 20 }),
            },
            {
              exercise: Exercise.Curl,
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
            },
          ],
        },
        {
          name: 'Week 1 Workout C',
          routine: [
            {
              exercise: Exercise.Squat,
              ignoreForTracking: true,
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
              ignoreForTracking: true,
              warmup,
              sets: Array(10).fill({ percentage: 70, reps: 5 }),
              rest: mainRest,
            },
            {
              exercise: Exercise.Chinup,
              sets: Array(5).fill({ targetReps: 5 }),
            },
            {
              exercise: Exercise.PullApart,
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
            },
            {
              exercise: Exercise.Shrugs,
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
            },
          ],
        },
        {
          name: 'Week 2 Workout A',
          routine: [
            {
              exercise: Exercise.Squat,
              ignoreForTracking: true,
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
              ignoreForTracking: true,
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
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
              bodyweight: true,
            },
            {
              exercise: Exercise.Facepull,
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
            },
            {
              exercise: Exercise.Dips,
              ignoreForTracking: true,
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
              ignoreForTracking: true,
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
              ignoreForTracking: true,
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
              sets: Array(5).fill({ minReps: 10, maxReps: 20 }),
            },
            {
              exercise: Exercise.Curl,
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
            },
          ],
        },
        {
          name: 'Week 2 Workout C',
          routine: [
            {
              exercise: Exercise.Squat,
              ignoreForTracking: true,
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
              ignoreForTracking: true,
              warmup,
              sets: Array(10).fill({ percentage: 50, reps: 5 }),
              rest: mainRest,
            },
            {
              exercise: Exercise.Pullup,
              sets: Array(5).fill({ targetReps: 5 }),
            },
            {
              exercise: Exercise.PullApart,
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
            },
            {
              exercise: Exercise.Shrugs,
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
            },
          ],
        },
        {
          name: 'Week 3 Workout A',
          routine: [
            {
              exercise: Exercise.Squat,
              ignoreForTracking: true,
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
                { percentage: 95, reps: 5, basis: 'threeRepMax', AMRAP: true },
                { percentage: 75, reps: 5, basis: 'threeRepMax', AMRAP: true },
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Pullup,
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
              bodyweight: true,
            },
            {
              exercise: Exercise.Facepull,
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
            },
            {
              exercise: Exercise.Dips,
              ignoreForTracking: true,
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
                { percentage: 95, targetReps: 5, basis: 'threeRepMax', AMRAP: true },
                { percentage: 95, targetReps: 5, basis: 'threeRepMax', ignoreForTracking: true },
                { percentage: 95, targetReps: 5, basis: 'threeRepMax', ignoreForTracking: true },
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Bench,
              warmup,
              sets: [
                { percentage: 75, reps: 5, basis: 'threeRepMax' },
                { percentage: 85, reps: 5, basis: 'threeRepMax' },
                { percentage: 95, targetReps: 5, basis: 'threeRepMax', AMRAP: true },
                { percentage: 95, targetReps: 5, basis: 'threeRepMax', ignoreForTracking: true },
                { percentage: 95, targetReps: 5, basis: 'threeRepMax', ignoreForTracking: true },
                { percentage: 95, targetReps: 5, basis: 'threeRepMax', ignoreForTracking: true },
                { percentage: 95, targetReps: 5, basis: 'threeRepMax', ignoreForTracking: true },
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.DumbbellRow,
              sets: Array(5).fill({ minReps: 10, maxReps: 20 }),
            },
            {
              exercise: Exercise.Curl,
              ignoreForTracking: true,
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
                { percentage: 95, reps: 5, basis: 'threeRepMax', AMRAP: true },
                { percentage: 55, targetReps: 20 },
              ],
              rest: mainRest,
            },
            {
              exercise: Exercise.Press,
              ignoreForTracking: true,
              warmup,
              sets: Array(10).fill({ percentage: 75, reps: 5 }),
              rest: mainRest,
            },
            {
              exercise: Exercise.Chinup,
              ignoreForTracking: true,
              sets: Array(5).fill({ targetReps: 5 }),
            },
            {
              exercise: Exercise.PullApart,
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
            },
            {
              exercise: Exercise.Shrugs,
              ignoreForTracking: true,
              sets: [{ reps: 100 }],
            },
          ],
        },
      ];
    },
  },
];
