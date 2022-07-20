import { ExperienceLevel, Gender, Goal } from '../../constants';
import { Program } from '../interfaces';

export const kinobodyRoutines: Program[] = [
  {
    id: 'KinoLucifer',
    name: 'Kinobody Greek God - Lucifer Workout',
    author: "Greg O'Gallagher",
    link: 'https://blog.kinobody.com/best-of/celebrity-workout-routines/build-devilish-strength-with-the-kinobody-tom-ellis-lucifer-workout/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 60,
  },
  {
    id: 'KinoThor',
    name: 'Kinobody Superhero - Thor Workout',
    author: "Greg O'Gallagher",
    link: 'https://blog.kinobody.com/workouts-and-exercises/chris-hemsworth-thor-ragnarok-workout-routine/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 60,
  },
  {
    id: 'KinoSuperman',
    name: 'Kinobody Superhero - Superman Workout',
    author: "Greg O'Gallagher",
    link: 'https://blog.kinobody.com/workouts-and-exercises/henry-cavill-workout/',
    level: [ExperienceLevel.Beginner, ExperienceLevel.Novice, ExperienceLevel.Intermediate],
    gender: [Gender.Male, Gender.Female],
    goal: [Goal.Strength, Goal.Size, Goal.Lean],
    daysPerWeek: 3,
    workoutDuration: 60,
  },
];
