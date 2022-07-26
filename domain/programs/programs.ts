import { ExperienceLevel, Gender, Goal } from '../constants';
import { Program } from './interfaces';
import { arnoldRoutines } from './routines/arnold';
import { ahtleanXRoutines } from './routines/athleanx';
// import { aWorkoutRoutines } from './routines/aworkoutroutine';
import { builtWithScienceRoutines } from './routines/builtwithschience';
import { greyskullRoutines } from './routines/greyskull';
// import { gzclRoutines } from './routines/gzcl';
import { kinobodyRoutines } from './routines/kinobody';
import { leanGainsRoutines } from './routines/leangains';
import { oldSchoolRoutines } from './routines/oldschool';
import { otherRoutines } from './routines/other';
import { redditRoutines } from './routines/reddit';
import { ssRoutines } from './routines/startingstrength';
import { slRoutines } from './routines/stronglifts';
import { vigilanteRoutines } from './routines/vigilante';
import { wendlerRoutines } from './routines/wendler';

export const programs: Program[] = [
  ...ssRoutines,
  ...slRoutines,
  ...ahtleanXRoutines,
  // ...aWorkoutRoutines,
  ...builtWithScienceRoutines,
  ...greyskullRoutines,
  // ...gzclRoutines,
  ...kinobodyRoutines,
  ...leanGainsRoutines,
  ...oldSchoolRoutines,
  ...otherRoutines,
  ...redditRoutines,
  ...wendlerRoutines,
  ...vigilanteRoutines,
  ...arnoldRoutines,
].sort((a, b) => {
  return a.name > b.name ? 1 : -1;
});

export const getProgram = (id: string): Program => programs.find((program) => program.id === id)!;

export const getProgramRecommendations = ({
  gender,
  strengthLevel,
  primaryGoal,
  secondaryGoal,
  maxDaysPerWeek,
  maxWorkoutDuration,
}: {
  gender: Gender;
  strengthLevel: ExperienceLevel;
  speedLevel: ExperienceLevel;
  primaryGoal: Goal;
  secondaryGoal: Goal;
  maxDaysPerWeek: number;
  maxWorkoutDuration: number;
}): { suitablePrograms: Program[]; bestMatch: string } => {
  const suitablePrograms = programs.filter((program) => {
    const isLevelAppropriate = program.level.includes(strengthLevel);
    const isGenderAppropriate = program.gender.includes(gender);
    const meetsPrimaryGoal = program.goal.includes(primaryGoal);
    const meetsSecondaryGoal = program.goal.includes(secondaryGoal);
    const isSuitableSchedule = program.daysPerWeek <= maxDaysPerWeek && program.workoutDuration <= maxWorkoutDuration;
    return isLevelAppropriate && isGenderAppropriate && meetsPrimaryGoal && meetsSecondaryGoal && isSuitableSchedule;
  });
  const bestMatch: string = suitablePrograms.reduce<string>((acc, program) => {
    if (program.name.toLowerCase().includes('vigilante')) {
      return program.id;
    }
    return acc;
  }, '');

  return { suitablePrograms, bestMatch };
};
