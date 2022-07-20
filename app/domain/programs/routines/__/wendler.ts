import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Program } from '../interfaces';

export const wendlerRoutines: Program[] = [
  {
    id: 'WendlerBBB',
    author: 'Jim Wendler',
    name: '5/3/1 Boring But Big',
    link: 'https://www.t-nation.com/workouts/boring-but-big-3-month-challenge/',
    level: [ExperienceLevel.Intermediate, ExperienceLevel.Advanced, ExperienceLevel.Vigilante],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size],
    daysPerWeek: 4,
    workoutDuration: 60,
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
    workoutDuration: 75,
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
    workoutDuration: 60,
  },
];
