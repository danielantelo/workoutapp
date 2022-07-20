import { calculateRepMaxes, Gender, lbsToKg, UnitsType } from 'fitness-tools';

import { ExperienceLevel } from '../constants';
import { Exercise } from '../exercises';
import { Lifts } from '../trainee';

export const standardExercises = [
  Exercise.Bench,
  Exercise.Squat,
  Exercise.Press,
  Exercise.Deadlift,
  Exercise.Row,
  Exercise.InclineBench,
  Exercise.Curl,
];

export interface LiftMetrics {
  oneRepMax?: number;
  threeRepMax?: number;
  fiveRepMax?: number;
  eightRepMax?: number;
  tenRepMax?: number;
  twelveRepMax?: number;
  fithteenRepMax?: number;
  twentyRepMax?: number;
  ratio?: number;
  reps?: number;
}

export type StrengthMetrics = {
  [key in Exercise]?: LiftMetrics;
};

const strengthStandards: {
  [key in Gender]: {
    [key in Exercise]?: {
      [key in ExperienceLevel]: LiftMetrics;
    };
  };
} = {
  [Gender.Male]: {
    [Exercise.Squat]: {
      [ExperienceLevel.Beginner]: { ratio: 0.75, oneRepMax: 64 },
      [ExperienceLevel.Novice]: { ratio: 1.25, oneRepMax: 93 },
      [ExperienceLevel.Intermediate]: { ratio: 1.5, oneRepMax: 130 },
      [ExperienceLevel.Advanced]: { ratio: 2.25, oneRepMax: 173 },
      [ExperienceLevel.Vigilante]: { ratio: 2.75, oneRepMax: 219 },
    },
    [Exercise.Deadlift]: {
      [ExperienceLevel.Beginner]: { ratio: 1, oneRepMax: 78 },
      [ExperienceLevel.Novice]: { ratio: 1.5, oneRepMax: 112 },
      [ExperienceLevel.Intermediate]: { ratio: 2, oneRepMax: 152 },
      [ExperienceLevel.Advanced]: { ratio: 2.5, oneRepMax: 200 },
      [ExperienceLevel.Vigilante]: { ratio: 3, oneRepMax: 250 },
    },
    [Exercise.Bench]: {
      [ExperienceLevel.Beginner]: { ratio: 0.5, oneRepMax: 47 },
      [ExperienceLevel.Novice]: { ratio: 0.75, oneRepMax: 70 },
      [ExperienceLevel.Intermediate]: { ratio: 1.25, oneRepMax: 98 },
      [ExperienceLevel.Advanced]: { ratio: 1.75, oneRepMax: 132 },
      [ExperienceLevel.Vigilante]: { ratio: 2, oneRepMax: 169 },
    },
    [Exercise.InclineBench]: {
      [ExperienceLevel.Beginner]: { ratio: 0.5, oneRepMax: 44 },
      [ExperienceLevel.Novice]: { ratio: 0.75, oneRepMax: 64 },
      [ExperienceLevel.Intermediate]: { ratio: 1, oneRepMax: 89 },
      [ExperienceLevel.Advanced]: { ratio: 1.5, oneRepMax: 118 },
      [ExperienceLevel.Vigilante]: { ratio: 1.75, oneRepMax: 149 },
    },
    [Exercise.Press]: {
      [ExperienceLevel.Beginner]: { ratio: 0.4, oneRepMax: 31 },
      [ExperienceLevel.Novice]: { ratio: 0.55, oneRepMax: 46 },
      [ExperienceLevel.Intermediate]: { ratio: 0.8, oneRepMax: 64 },
      [ExperienceLevel.Advanced]: { ratio: 1.05, oneRepMax: 86 },
      [ExperienceLevel.Vigilante]: { ratio: 1.35, oneRepMax: 109 },
    },
    [Exercise.Row]: {
      [ExperienceLevel.Beginner]: { ratio: 0.5, oneRepMax: 41 },
      [ExperienceLevel.Novice]: { ratio: 0.75, oneRepMax: 60 },
      [ExperienceLevel.Intermediate]: { ratio: 1, oneRepMax: 85 },
      [ExperienceLevel.Advanced]: { ratio: 1.5, oneRepMax: 115 },
      [ExperienceLevel.Vigilante]: { ratio: 1.75, oneRepMax: 147 },
    },
    [Exercise.Curl]: {
      [ExperienceLevel.Beginner]: { ratio: 0.2, oneRepMax: 17 },
      [ExperienceLevel.Novice]: { ratio: 0.4, oneRepMax: 30 },
      [ExperienceLevel.Intermediate]: { ratio: 0.6, oneRepMax: 37 },
      [ExperienceLevel.Advanced]: { ratio: 0.85, oneRepMax: 68 },
      [ExperienceLevel.Vigilante]: { ratio: 1.15, oneRepMax: 91 },
    },
    [Exercise.Pullup]: {
      [ExperienceLevel.Beginner]: { reps: 1, oneRepMax: -13 },
      [ExperienceLevel.Novice]: { reps: 5, oneRepMax: +8 },
      [ExperienceLevel.Intermediate]: { reps: 15, oneRepMax: +34 },
      [ExperienceLevel.Advanced]: { reps: 25, oneRepMax: +63 },
      [ExperienceLevel.Vigilante]: { reps: 37, oneRepMax: +93 },
    },
    [Exercise.Dip]: {
      [ExperienceLevel.Beginner]: { reps: 1, oneRepMax: -8 },
      [ExperienceLevel.Novice]: { reps: 8, oneRepMax: +18 },
      [ExperienceLevel.Intermediate]: { reps: 20, oneRepMax: +50 },
      [ExperienceLevel.Advanced]: { reps: 34, oneRepMax: +86 },
      [ExperienceLevel.Vigilante]: { reps: 49, oneRepMax: +125 },
    },
    [Exercise.Pushup]: {
      [ExperienceLevel.Beginner]: { reps: 1 },
      [ExperienceLevel.Novice]: { reps: 18 },
      [ExperienceLevel.Intermediate]: { reps: 41 },
      [ExperienceLevel.Advanced]: { reps: 68 },
      [ExperienceLevel.Vigilante]: { reps: 99 },
    },
  },
  [Gender.Female]: {
    [Exercise.Squat]: {
      [ExperienceLevel.Beginner]: { ratio: 0.5, oneRepMax: 30 },
      [ExperienceLevel.Novice]: { ratio: 0.75, oneRepMax: 48 },
      [ExperienceLevel.Intermediate]: { ratio: 1.25, oneRepMax: 73 },
      [ExperienceLevel.Advanced]: { ratio: 1.5, oneRepMax: 103 },
      [ExperienceLevel.Vigilante]: { ratio: 2, oneRepMax: 136 },
    },
    [Exercise.Deadlift]: {
      [ExperienceLevel.Beginner]: { ratio: 0.5, oneRepMax: 38 },
      [ExperienceLevel.Novice]: { ratio: 1, oneRepMax: 60 },
      [ExperienceLevel.Intermediate]: { ratio: 1.25, oneRepMax: 87 },
      [ExperienceLevel.Advanced]: { ratio: 1.75, oneRepMax: 120 },
      [ExperienceLevel.Vigilante]: { ratio: 2.5, oneRepMax: 157 },
    },
    [Exercise.Bench]: {
      [ExperienceLevel.Beginner]: { ratio: 0.25, oneRepMax: 17 },
      [ExperienceLevel.Novice]: { ratio: 0.5, oneRepMax: 31 },
      [ExperienceLevel.Intermediate]: { ratio: 0.75, oneRepMax: 51 },
      [ExperienceLevel.Advanced]: { ratio: 1, oneRepMax: 74 },
      [ExperienceLevel.Vigilante]: { ratio: 1.5, oneRepMax: 101 },
    },
    [Exercise.InclineBench]: {
      [ExperienceLevel.Beginner]: { ratio: 0.2, oneRepMax: 13 },
      [ExperienceLevel.Novice]: { ratio: 0.4, oneRepMax: 26 },
      [ExperienceLevel.Intermediate]: { ratio: 0.65, oneRepMax: 44 },
      [ExperienceLevel.Advanced]: { ratio: 1, oneRepMax: 67 },
      [ExperienceLevel.Vigilante]: { ratio: 1.4, oneRepMax: 93 },
    },
    [Exercise.Press]: {
      [ExperienceLevel.Beginner]: { ratio: 0.2, oneRepMax: 14 },
      [ExperienceLevel.Novice]: { ratio: 0.35, oneRepMax: 23 },
      [ExperienceLevel.Intermediate]: { ratio: 0.55, oneRepMax: 34 },
      [ExperienceLevel.Advanced]: { ratio: 0.75, oneRepMax: 48 },
      [ExperienceLevel.Vigilante]: { ratio: 1, oneRepMax: 64 },
    },
    [Exercise.Row]: {
      [ExperienceLevel.Beginner]: { ratio: 0.25, oneRepMax: 15 },
      [ExperienceLevel.Novice]: { ratio: 0.4, oneRepMax: 26 },
      [ExperienceLevel.Intermediate]: { ratio: 0.65, oneRepMax: 41 },
      [ExperienceLevel.Advanced]: { ratio: 0.9, oneRepMax: 59 },
      [ExperienceLevel.Vigilante]: { ratio: 1.2, oneRepMax: 79 },
    },
    [Exercise.Curl]: {
      [ExperienceLevel.Beginner]: { ratio: 0.1, oneRepMax: 6 },
      [ExperienceLevel.Novice]: { ratio: 0.2, oneRepMax: 14 },
      [ExperienceLevel.Intermediate]: { ratio: 0.4, oneRepMax: 25 },
      [ExperienceLevel.Advanced]: { ratio: 0.6, oneRepMax: 39 },
      [ExperienceLevel.Vigilante]: { ratio: 0.85, oneRepMax: 55 },
    },
    [Exercise.Pullup]: {
      [ExperienceLevel.Beginner]: { reps: 1, oneRepMax: -22 },
      [ExperienceLevel.Novice]: { reps: 3, oneRepMax: -8 },
      [ExperienceLevel.Intermediate]: { reps: 6, oneRepMax: 10 },
      [ExperienceLevel.Advanced]: { reps: 15, oneRepMax: 30 },
      [ExperienceLevel.Vigilante]: { reps: 26, oneRepMax: 51 },
    },
    [Exercise.Dip]: {
      [ExperienceLevel.Beginner]: { reps: 1, oneRepMax: -20 },
      [ExperienceLevel.Novice]: { reps: 1, oneRepMax: -5 },
      [ExperienceLevel.Intermediate]: { reps: 10, oneRepMax: +19 },
      [ExperienceLevel.Advanced]: { reps: 22, oneRepMax: +45 },
      [ExperienceLevel.Vigilante]: { reps: 35, oneRepMax: +72 },
    },
    [Exercise.Pushup]: {
      [ExperienceLevel.Beginner]: { reps: 1 },
      [ExperienceLevel.Novice]: { reps: 5 },
      [ExperienceLevel.Intermediate]: { reps: 19 },
      [ExperienceLevel.Advanced]: { reps: 37 },
      [ExperienceLevel.Vigilante]: { reps: 56 },
    },
  },
};

export const getLiftStandards = (gender: Gender, exercise: Exercise): { [key in ExperienceLevel]?: LiftMetrics } => {
  const genderStandards = strengthStandards[gender];
  const liftStandards = genderStandards[exercise]!;
  return liftStandards;
};

export const getLiftLevel = (
  gender: Gender,
  lift: Exercise,
  { oneRepMax, ratio, reps }: LiftMetrics,
  unitsType = UnitsType.Metric
): ExperienceLevel => {
  const liftStandards = getLiftStandards(gender, lift);
  return (
    liftStandards &&
    Object.keys(liftStandards).reduce<ExperienceLevel>((acc, current): ExperienceLevel => {
      const levelStandards = liftStandards[<ExperienceLevel>current]!;

      const oneRepMaxForComparison = oneRepMax && unitsType === UnitsType.Metric ? oneRepMax : lbsToKg(oneRepMax!);
      const meetsOneRepMaxBasedStandard = levelStandards.oneRepMax && oneRepMaxForComparison >= levelStandards.oneRepMax;
      const meetsRatioBasedStandard = ratio && levelStandards.ratio && ratio >= levelStandards.ratio;

      const meetsWeightBasedStandard = meetsRatioBasedStandard || meetsOneRepMaxBasedStandard;
      const meetsRepBasedStandard = reps && levelStandards.reps && reps >= levelStandards.reps;

      if (meetsWeightBasedStandard || meetsRepBasedStandard) {
        return <ExperienceLevel>current;
      }

      return acc;
    }, ExperienceLevel.Beginner)
  );
};

export const getStrengthLevel = (gender: Gender, everLifted: boolean, strengthStandards: StrengthMetrics): ExperienceLevel => {
  if (!everLifted) {
    return ExperienceLevel.Beginner;
  }

  const level = standardExercises.reduce<ExperienceLevel | undefined>((accLevel, lift) => {
    const liftStandards = strengthStandards[lift as keyof StrengthMetrics]!;
    const liftLevel = getLiftLevel(Gender[gender], lift as Exercise, {
      oneRepMax: liftStandards.oneRepMax,
      ratio: liftStandards.ratio,
      reps: liftStandards.reps,
    });
    const isLowerStandard =
      accLevel && Object.values(ExperienceLevel).indexOf(liftLevel) < Object.values(ExperienceLevel).indexOf(accLevel);

    if (liftLevel && (!accLevel || isLowerStandard)) {
      return liftLevel;
    }

    return accLevel;
  }, undefined);

  return level ?? ExperienceLevel.Beginner;
};

export const calculateStrengthStandards = (weight: number, lifts: Lifts): StrengthMetrics =>
  standardExercises.reduce((acc, key: string) => {
    const lift = lifts[key as keyof Lifts];
    if (!lift) return acc;

    const repMaxes = calculateRepMaxes(lift.weight, lift.reps);
    return {
      ...acc,
      [key]: {
        ...repMaxes,
        ratio: Math.round((repMaxes.oneRepMax! / weight) * 100) / 100,
      },
    };
  }, {});
