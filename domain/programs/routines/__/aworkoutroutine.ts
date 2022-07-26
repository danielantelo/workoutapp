import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Program } from '../interfaces';

export const aWorkoutRoutines: Program[] = [
  {
    id: 'AWRUpperLower',
    author: 'Jay',
    name: 'A Workout Routine Muscle Building Upper Lower',
    link: 'https://www.aworkoutroutine.com/the-muscle-building-workout-routine/',
    level: [ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 4,
    workoutDuration: 60,
  },
  {
    id: 'AWR5day',
    author: 'Jay',
    name: 'A Workout Routine 5-Day Upper Lower Push Pull Legs',
    link: 'https://www.aworkoutroutine.com/5-day-workout-routine/',
    level: [ExperienceLevel.Novice, ExperienceLevel.Intermediate, ExperienceLevel.Advanced],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 5,
    workoutDuration: 60,
  },
  {
    id: 'AWRPushPullLegs',
    author: 'Jay',
    name: 'A Workout Routine Push Pull Legs',
    link: 'https://www.aworkoutroutine.com/push-pull-legs-split/',
    level: [ExperienceLevel.Novice, ExperienceLevel.Intermediate, ExperienceLevel.Advanced],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 6,
    workoutDuration: 60,
  },
];
