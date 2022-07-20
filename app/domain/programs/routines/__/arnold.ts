import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Program } from '../interfaces';

export const arnoldRoutines: Program[] = [
  {
    id: 'GoldenSix',
    name: "Arnold's Golden Six",
    author: 'Arnold Schwarzenegger',
    link: 'https://www.drworkout.fitness/arnold-golden-six-routine/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean, Goal.Speed],
    daysPerWeek: 3,
    workoutDuration: 60,
  },
];
