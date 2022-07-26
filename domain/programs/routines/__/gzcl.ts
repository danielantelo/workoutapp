import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Program } from '../interfaces';

export const gzclRoutines: Program[] = [
  {
    id: 'GZCLP',
    author: 'Cody LeFever',
    name: 'GZCLP',
    link: 'https://saynotobroscience.com/gzclp-infographic/',
    level: [ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 45,
  },
  {
    id: 'JackedAndTan',
    author: 'Cody LeFever',
    name: 'GZCL: Jacked & Tan',
    link: 'http://swoleateveryheight.blogspot.com/2016/07/jacked-tan-20.html',
    level: [ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 45,
  },
  {
    id: 'TheRippler',
    author: 'Cody LeFever',
    name: 'GZCL: The Rippler',
    link: 'https://www.reddit.com/r/gzcl/wiki/rippler',
    level: [ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 4,
    workoutDuration: 45,
  },
];
