import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Program } from '../interfaces';

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
    workoutDuration: 45,
  },
];
