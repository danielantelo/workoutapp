import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Program } from '../interfaces';

export const builtWithScienceRoutines: Program[] = [
  {
    id: 'BWSFullBody',
    author: 'Jeremy Ethier (BuiltWithScience)',
    name: 'Built With Science Full Body Workout For Growth',
    link: 'https://builtwithscience.com/best-full-body-workout/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 60,
  },
  {
    id: 'BWSUpperLower',
    author: 'Jeremy Ethier (BuiltWithScience)',
    name: 'Built With Science Upper Lower Workout For Growth',
    link: 'https://builtwithscience.com/upper-body-workout/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 4,
    workoutDuration: 60,
  },
  {
    id: 'BWSPPL',
    author: 'Jeremy Ethier (BuiltWithScience)',
    name: 'Built With Science Push Pull Legs Workout For Growth',
    link: 'https://builtwithscience.com/push-pull-legs-routine/',
    level: [ExperienceLevel.Intermediate, ExperienceLevel.Advanced, ExperienceLevel.Vigilante],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 6,
    workoutDuration: 60,
  },
];
