import { calculateFiveRepMax } from '../../fitness-tools';
import { ExperienceLevel, Gender } from '../constants';
import { Exercise } from '../exercises';
import { getLiftStandards, getSpeedStandards, LiftMetrics, SpeedMetrics, StrengthMetrics } from '../standards';

export const getNextSpeedTargets = (gender: Gender, speedMetrics: SpeedMetrics): SpeedMetrics => {
  const standards = getSpeedStandards(gender);
  const mileRun = speedMetrics.mileRun ? speedMetrics.mileRun - 0.5 : standards[ExperienceLevel.Beginner]!.mileRun;
  const fiveKmRun = speedMetrics.fiveKmRun ? speedMetrics.fiveKmRun - 1.5 : standards[ExperienceLevel.Beginner]!.fiveKmRun;

  return { mileRun, fiveKmRun };
};

export const getNextLiftTargets = (gender: Gender, lifterStandards: StrengthMetrics, weight: number): StrengthMetrics => {
  const getLiftTarget = (exercise: Exercise) => {
    const standards = getLiftStandards(gender, exercise);
    const currentLift = lifterStandards[exercise];

    if (!currentLift) {
      const levelStandard = standards[ExperienceLevel.Beginner]!;
      const levelOneRepMax = levelStandard.oneRepMax!;
      const levelRatio = Math.round(weight * levelStandard.ratio!);
      if (levelRatio < levelOneRepMax) {
        return { oneRepMax: levelRatio, ratio: levelStandard.ratio, fiveRepMax: calculateFiveRepMax(levelRatio) };
      } else {
        return { oneRepMax: levelOneRepMax, fiveRepMax: calculateFiveRepMax(levelOneRepMax) };
      }
    }

    let target: LiftMetrics = {
      oneRepMax: currentLift.oneRepMax! + 10,
      fiveRepMax: calculateFiveRepMax(currentLift.oneRepMax! + 10),
    };

    const levels = Object.keys(standards);
    for (const level of levels) {
      const levelStandard = standards[level as keyof typeof standards]!;
      const levelOneRepMax = levelStandard.oneRepMax!;
      const levelRatio = Math.round(weight * levelStandard.ratio!);
      if (
        levelOneRepMax < levelRatio &&
        levelOneRepMax > currentLift.oneRepMax! &&
        levelOneRepMax - currentLift.oneRepMax! < 15
      ) {
        target = { oneRepMax: levelOneRepMax, fiveRepMax: calculateFiveRepMax(levelOneRepMax) };
        break;
      } else if (
        levelRatio > currentLift.oneRepMax! &&
        levelRatio > currentLift.oneRepMax! &&
        levelRatio - currentLift.oneRepMax! < 15
      ) {
        target = { oneRepMax: levelRatio, ratio: levelStandard.ratio, fiveRepMax: calculateFiveRepMax(levelRatio) };
        break;
      }
    }

    return target;
  };

  return {
    [Exercise.Bench]: getLiftTarget(Exercise.Bench),
    [Exercise.Squat]: getLiftTarget(Exercise.Squat),
    [Exercise.Deadlift]: getLiftTarget(Exercise.Deadlift),
    [Exercise.Press]: getLiftTarget(Exercise.Press),
    [Exercise.Row]: getLiftTarget(Exercise.Row),
  };
};
