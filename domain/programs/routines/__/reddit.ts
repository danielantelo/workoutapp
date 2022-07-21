import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Program } from '../interfaces';

export const redditRoutines: Program[] = [
  {
    id: 'RedditBegginers',
    author: 'r/Fitness',
    name: 'Reddit Basic Beginner Routine',
    link: 'https://thefitness.wiki/routines/r-fitness-basic-beginner-routine/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 45,
  },
  {
    id: 'RedditPPL',
    author: 'Metallicadpa',
    name: 'Reddit Linear Progression Push Pull Legs',
    link: 'https://www.reddit.com/r/Fitness/comments/37ylk5/a_linear_progression_based_ppl_program_for/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 6,
    workoutDuration: 45,
  },
];
