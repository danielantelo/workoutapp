import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, Workout } from '../interfaces';

export const greyskullRoutines: Program[] = [
  {
    id: 'Greyskull',
    author: 'John Sheaffer',
    name: 'Greyskull LP',
    link: 'https://greyskull.app/workouts/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    weeklySchedule: [0, 2, 4],
    workoutDuration: 45,
    duration: 12,
    workouts: (): Workout[] => {
      const startingWeight = 'tenRepMax';
      const warmup = [
        { percentage: 50, reps: 5 },
        { percentage: 60, reps: 5 },
        { percentage: 70, reps: 3 },
      ];
      const mainSets = [{ targetReps: 5 }, { targetReps: 5 }, { targetReps: 5, AMRAP: true }];
      const mainRest = 3;

      return [
        {
          name: 'Week 1 Workout A',
          routine: [
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
              exercise: Exercise.Squat,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Curl,
              sets: [{ targetReps: 10 }, { targetReps: 10 }],
            },
          ],
        },
        {
          name: 'Week 1 Workout B',
          routine: [
            {
              exercise: Exercise.Press,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Chinup,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Deadlift,
              warmup,
              sets: [{ targetReps: 5, AMRAP: true }],
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Dip,
              sets: [{ targetReps: 8 }, { targetReps: 8 }],
            },
          ],
        },
        {
          name: 'Week 1 Workout C',
          routine: [
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
              exercise: Exercise.Squat,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Curl,
              sets: [{ targetReps: 10 }, { targetReps: 10 }],
            },
          ],
        },

        {
          name: 'Week 2 Workout A',
          routine: [
            {
              exercise: Exercise.Press,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Chinup,
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
              exercise: Exercise.Dip,
              sets: [{ targetReps: 8 }, { targetReps: 8 }],
            },
          ],
        },
        {
          name: 'Week 2 Workout B',
          routine: [
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
              exercise: Exercise.Deadlift,
              warmup,
              sets: [{ targetReps: 5, AMRAP: true }],
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Curl,
              sets: [{ targetReps: 10 }, { targetReps: 10 }],
            },
          ],
        },
        {
          name: 'Week 2 Workout C',
          routine: [
            {
              exercise: Exercise.Press,
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Chinup,
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
              exercise: Exercise.Dip,
              sets: [{ targetReps: 8 }, { targetReps: 8 }],
            },
          ],
        },
      ];
    },
  },
];
