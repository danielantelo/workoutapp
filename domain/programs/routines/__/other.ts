import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Program } from '../interfaces';

export const otherRoutines: Program[] = [
  {
    id: 'StartingAesthetics',
    author: '',
    name: 'Starting Aesthetics',
    link: 'https://powerexplosive.com/starting-aesthetics/',
    level: [ExperienceLevel.Beginner],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 4,
    workoutDuration: 45,
  },
  {
    id: 'PHAT',
    author: '',
    name: 'PHAT: Power Hypertrophy Adaptive Training',
    link: 'https://simplyshredded.com/mega-feature-layne-norton-training-series-full-powerhypertrophy-routine-updated-2011.html',
    level: [ExperienceLevel.Beginner],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 5,
    workoutDuration: 45,
  },
  {
    id: 'PHUL',
    author: '',
    name: 'PHUL: Power Hypertrophy Upper Lower',
    link: 'https://www.muscleandstrength.com/workouts/phul-workout',
    level: [ExperienceLevel.Beginner],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 4,
    workoutDuration: 45,
  },
];
