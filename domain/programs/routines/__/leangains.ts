import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Program } from '../interfaces';

export const leanGainsRoutines: Program[] = [
  {
    id: 'LeangainsRPT',
    name: 'Leangains RPT',
    author: 'Martin Berkhan',
    link: 'https://leangains.com/reverse-pyramid-training-guide/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 60,
  },
];
