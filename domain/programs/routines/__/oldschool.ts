import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Program } from '../interfaces';

export const oldSchoolRoutines: Program[] = [
  {
    id: 'OldSchool2Day',
    author: '',
    name: 'Old School Trainer 2 Days a Week Minimalist Routine',
    link: 'https://oldschooltrainer.com/minimalist-power-and-bulk/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 2,
    workoutDuration: 45,
  },
];
