import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, RoutineSet, Workout } from '../interfaces';

export const ssRoutines: Program[] = [
  {
    id: 'StartingStrength',
    author: 'Mark Rippetoe',
    name: 'Starting Strength',
    link: 'https://startingstrength.com/get-started/programs',
    video: 'a9-a_8hC17M',
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
      const sets = [{ targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }];
      return [
        {
          name: 'Workout A',
          routine: [
            {
              exercise: Exercise.Squat,
              video: 'nhoikoUEI8U',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Bench,
              video: 'rxD321l2svE',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Deadlift,
              video: 'p2OPUi4xGrM',
              warmup,
              sets: [{ targetReps: 5 }],
              rest,
            },
          ],
        },
        {
          name: 'Workout B',
          routine: [
            {
              exercise: Exercise.Squat,
              video: 'nhoikoUEI8U',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Press,
              video: '8dacy5hjaE8',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.PowerClean,
              video: '37-wjE_c4NU',
              warmup,
              sets,
              rest,
            },
            {
              exercise: Exercise.Chinup,
              optional: true,
              sets,
              rest,
            },
          ],
        },
      ];
    },
  },
  {
    id: 'TexasMethod',
    author: 'Mark Rippetoe',
    name: 'The Texas Method',
    link: 'https://startingstrength.com/article/the_texas_method',
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
        { percentage: 60, reps: 5, basis: 'fiveRepMax' },
        { percentage: 70, reps: 5, basis: 'fiveRepMax' },
      ];
      const volumeSets: RoutineSet[] = [
        { percentage: 90, reps: 5, basis: 'fiveRepMax' },
        { percentage: 90, reps: 5, basis: 'fiveRepMax' },
        { percentage: 90, reps: 5, basis: 'fiveRepMax' },
        { percentage: 90, reps: 5, basis: 'fiveRepMax' },
        { percentage: 90, reps: 5, basis: 'fiveRepMax' },
      ];
      const progressionSets: RoutineSet[] = [{ targetReps: 5 }];
      return [
        {
          name: 'Workout A1',
          routine: [
            {
              exercise: Exercise.Squat,
              ignoreForTracking: true,
              video: 'nhoikoUEI8U',
              warmup,
              sets: volumeSets,
              rest,
            },
            {
              exercise: Exercise.Bench,
              ignoreForTracking: true,
              video: 'rxD321l2svE',
              warmup,
              sets: volumeSets,
              rest,
            },
            {
              exercise: Exercise.Deadlift,
              video: 'p2OPUi4xGrM',
              warmup,
              sets: progressionSets,
              rest,
            },
          ],
        },
        {
          name: 'Workout B1',
          routine: [
            {
              exercise: Exercise.Squat,
              video: 'nhoikoUEI8U',
              ignoreForTracking: true,
              warmup,
              sets: [
                { percentage: 80, reps: 5, basis: 'fiveRepMax' },
                { percentage: 80, reps: 5, basis: 'fiveRepMax' },
              ],
              rest,
            },
            {
              exercise: Exercise.Press,
              ignoreForTracking: true,
              video: '8dacy5hjaE8',
              warmup,
              sets: volumeSets,
              rest,
            },
            {
              exercise: Exercise.Chinup,
              bodyweight: true,
              sets: [{ AMRAP: true }, { AMRAP: true }, { AMRAP: true }],
              rest: 2,
            },
            {
              exercise: Exercise.Hyperextensions,
              sets: [{ targetReps: 10 }, { targetReps: 10 }, { targetReps: 10 }, { targetReps: 10 }, { targetReps: 10 }],
              rest: 2,
            },
          ],
        },
        {
          name: 'Workout C1',
          routine: [
            {
              exercise: Exercise.Squat,
              video: 'nhoikoUEI8U',
              warmup,
              sets: progressionSets,
              rest,
            },
            {
              exercise: Exercise.Bench,
              video: 'rxD321l2svE',
              warmup,
              sets: progressionSets,
              rest,
            },
            {
              exercise: Exercise.PowerClean,
              video: '2ggG1M2gGes',
              sets: [{ targetReps: 3 }, { targetReps: 3 }, { targetReps: 3 }, { targetReps: 3 }, { targetReps: 3 }],
              rest,
            },
          ],
        },
        // @TODO think about how to deal with alternating exercises
        {
          name: 'Workout A2',
          routine: [
            {
              exercise: Exercise.Squat,
              video: 'nhoikoUEI8U',
              ignoreForTracking: true,
              warmup,
              sets: volumeSets,
              rest,
            },
            {
              exercise: Exercise.Press,
              video: '8dacy5hjaE8',
              ignoreForTracking: true,
              warmup,
              sets: volumeSets,
              rest,
            },
            {
              exercise: Exercise.Deadlift,
              video: 'p2OPUi4xGrM',
              warmup,
              sets: progressionSets,
              rest,
            },
          ],
        },
        {
          name: 'Workout B2',
          routine: [
            {
              exercise: Exercise.Squat,
              ignoreForTracking: true,
              video: 'nhoikoUEI8U',
              warmup,
              sets: [
                { percentage: 80, reps: 5, basis: 'fiveRepMax' },
                { percentage: 80, reps: 5, basis: 'fiveRepMax' },
              ],
              rest,
            },
            {
              exercise: Exercise.Bench,
              ignoreForTracking: true,
              video: 'rxD321l2svE',
              warmup,
              sets: volumeSets,
              rest,
            },
            {
              exercise: Exercise.Chinup,
              bodyweight: true,
              sets: [{ AMRAP: true }, { AMRAP: true }, { AMRAP: true }],
              rest: 2,
            },
            {
              exercise: Exercise.Hyperextensions,
              sets: [{ targetReps: 10 }, { targetReps: 10 }, { targetReps: 10 }, { targetReps: 10 }, { targetReps: 10 }],
              rest: 2,
            },
          ],
        },
        {
          name: 'Workout C2',
          routine: [
            {
              exercise: Exercise.Squat,
              video: 'nhoikoUEI8U',
              warmup,
              sets: progressionSets,
              rest,
            },
            {
              exercise: Exercise.Press,
              video: '8dacy5hjaE8',
              warmup,
              sets: progressionSets,
              rest,
            },
            {
              exercise: Exercise.PowerSnatch,
              video: 'uyY_ySdN6OU',
              sets: [
                { targetReps: 2 },
                { targetReps: 2 },
                { targetReps: 2 },
                { targetReps: 2 },
                { targetReps: 2 },
                { targetReps: 2 },
              ],
              rest,
            },
          ],
        },
      ];
    },
  },
];
