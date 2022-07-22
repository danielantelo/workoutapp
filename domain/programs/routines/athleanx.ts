import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Exercise } from '../../exercises';
import { Program, Workout } from '../interfaces';

export const ahtleanXRoutines: Program[] = [
  {
    id: 'AXFullBody',
    name: 'AthleanX Perfect Total Body',
    author: 'Jeff Cavaliere',
    link: 'https://athleanx.com/articles/full-body-workout-plan',
    video: 'R6gZoAzAhCg',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean, Goal.Speed],
    daysPerWeek: 3,
    weeklySchedule: [0, 2, 4],
    workoutDuration: 60,
    duration: 8,
    workouts: (level?: ExperienceLevel): Workout[] => {
      const warmup = [
        { percentage: 40, reps: 5 },
        { percentage: 50, reps: 5 },
        { percentage: 60, reps: 3 },
      ];
      const mainSets = [{ targetReps: 5 }, { targetReps: 5 }, { targetReps: 5 }];
      const mainRest = 2;
      const secondarySets = Array(level === ExperienceLevel.Beginner ? 3 : 4);
      const secondaryRest = 1;
      const startingWeight = 'eightRepMax';
      return [
        {
          name: 'Workout A',
          routine: [
            {
              exercise: Exercise.MultiLunge,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/multidirectional-lunge-1.mp4',
              warmup: [{ reps: 7 }, { reps: 7 }],
              sets: [],
            },
            {
              exercise: Exercise.Squat,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/barbell-squat.mp4',
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.HipThrust,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/barbell-hip-thrust.mp4',
              sets: [...secondarySets].fill({ minReps: 10, maxReps: 12 }),
              rest: secondaryRest,
            },
            {
              exercise: Exercise.Bench,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/barbell-bench-press.mp4',
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Chinup,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/weighted-chinup.mp4',
              warmup: [
                { percentage: 0, reps: 5 },
                { percentage: 0, reps: 5 },
              ],
              sets: [...secondarySets].fill({ minReps: 6, maxReps: 10 }),
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.DbCarry,
              video: '//athleanx.com/wp-content/uploads/2019/07/farmers-carry.mp4',
              sets: [...secondarySets].fill({ targetReps: 50, ratio: 0.5 }),
              rest: secondaryRest,
            },
            {
              exercise: Exercise.Facepull,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/banded-facepull.mp4',
              sets: [{ targetReps: 12 }, { targetReps: 12 }],
              rest: secondaryRest,
            },
          ],
        },
        {
          name: 'Workout B',
          routine: [
            {
              exercise: Exercise.MultiLunge,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/multidirectional-lunge-1.mp4',
              warmup: [{ reps: 7 }, { reps: 7 }],
              sets: [],
            },
            {
              exercise: Exercise.Deadlift,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/barbell-deadlift.mp4',
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.ReverseLunge,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/reverse-barbell-lunge.mp4',
              sets: [...secondarySets].fill({ targetReps: 10 }),
              rest: secondaryRest,
            },
            {
              exercise: Exercise.Press,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/barbell-overhead-press.mp4',
              warmup,
              sets: mainSets,
              rest: mainRest,
              startingWeight,
            },
            {
              exercise: Exercise.Row,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/barbell-row.mp4',
              warmup,
              sets: [...secondarySets].fill({ minReps: 10, maxReps: 12 }),
              rest: secondaryRest,
            },
            {
              exercise: Exercise.DbOverheadCarry,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/dumbbell-overhead-farmers-carry.mp4',
              sets: [...secondarySets].fill({ targetReps: 50, ratio: 0.25 }),
              rest: secondaryRest,
            },
            {
              exercise: Exercise.HipBand,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/hip-band-mini-ladder.mp4',
              sets: [{ targetReps: 12 }, { targetReps: 12 }],
              rest: secondaryRest,
            },
            {
              exercise: Exercise.PullApart,
              video: 'https://athleanx.com/wp-content/uploads/2019/07/band-pull-aparts.mp4',
              sets: [{ targetReps: 12 }, { targetReps: 12 }],
              rest: secondaryRest,
            },
          ],
        },
      ];
    },
  },
  // {
  //   id: 'AXPushPullLegs',
  //   name: 'AthleanX Perfect Push Pull Legs',
  //   author: 'Jeff Cavaliere',
  //   link: 'https://athleanx.com/articles/full-body-workout-plan',
  //   level: [ExperienceLevel.Intermediate, ExperienceLevel.Advanced, ExperienceLevel.Vigilante],
  //   gender: [Gender.Male, Gender.Female],
  //   goal: [Goal.Strength, Goal.Size, Goal.Lean],
  //   daysPerWeek: 6,
  //   workoutDuration: 60,
  // },
];
