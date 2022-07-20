import { ExperienceLevel, Gender } from '../constants';

export interface SpeedMetrics {
  mileRun: number;
  fiveKmRun: number;
}

const speedStandards: {
  [key in Gender]: {
    [key in ExperienceLevel]: SpeedMetrics;
  };
} = {
  [Gender.Male]: {
    [ExperienceLevel.Beginner]: { mileRun: 9.5, fiveKmRun: 31.5 },
    [ExperienceLevel.Novice]: { mileRun: 7.75, fiveKmRun: 26.33 },
    [ExperienceLevel.Intermediate]: { mileRun: 6.5, fiveKmRun: 22.5 },
    [ExperienceLevel.Advanced]: { mileRun: 5.75, fiveKmRun: 19.75 },
    [ExperienceLevel.Vigilante]: { mileRun: 5.15, fiveKmRun: 17.75 },
  },
  [Gender.Female]: {
    [ExperienceLevel.Beginner]: { mileRun: 10.75, fiveKmRun: 35.5 },
    [ExperienceLevel.Novice]: { mileRun: 9, fiveKmRun: 30 },
    [ExperienceLevel.Intermediate]: { mileRun: 7.75, fiveKmRun: 26.15 },
    [ExperienceLevel.Advanced]: { mileRun: 6.8, fiveKmRun: 23 },
    [ExperienceLevel.Vigilante]: { mileRun: 6.15, fiveKmRun: 20.75 },
  },
};

export const getSpeedStandards = (gender: Gender): { [key in ExperienceLevel]?: SpeedMetrics } => {
  return speedStandards[gender];
};

export const getSpeedLevel = (gender: Gender, mileRunTime: number, fiveKmRun: number) => {
  const runStandards = getSpeedStandards(gender);
  return Object.keys(runStandards).reduce<ExperienceLevel>((acc, current): ExperienceLevel => {
    const levelStandards = runStandards[<ExperienceLevel>current]!;

    const meetsMileRunStandard = mileRunTime <= levelStandards.mileRun;
    const meetsFiveKmStandard = fiveKmRun <= levelStandards.fiveKmRun;

    if (meetsMileRunStandard && meetsFiveKmStandard) {
      return <ExperienceLevel>current;
    }

    return acc;
  }, ExperienceLevel.Beginner);
};
