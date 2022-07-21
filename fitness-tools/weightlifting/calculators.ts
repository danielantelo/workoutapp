const formulas: { [key: string]: (weight: number, reps: number) => number } = {
  epley: (weight, reps) => weight * (1 + reps / 30),
  brzycki: (weight, reps) => weight * (36 / (37 - reps)),
  oconner: (weight, reps) => weight * (1 + 0.025 * reps),
  lombardi: (weight, reps) => weight * reps ** 0.1,
  wathan: (weight, reps) => (weight * 100) / (48.8 + 53.8 * Math.exp(-1 * (reps * 0.075))),
  mayhem: (weight, reps) => (weight * 100) / (52.2 + 41.9 * Math.exp(-1 * (reps * 0.055))),
  lander: (weight, reps) => (weight * 100) / (101.3 - 2.67123 * reps),
};

export const calculate1RepMax = (weight: number, reps: number, formula?: keyof typeof formulas): number => {
  if (reps == 0 || weight == 0) {
    return 0;
  }

  if (reps == 1) {
    return weight;
  }

  if (formula) {
    return formulas[formula](weight, reps);
  }

  const acc = Object.keys(formulas).reduce((acc, current) => {
    return acc + formulas[current](weight, reps);
  }, 0);

  return Math.floor(acc / Object.keys(formulas).length);
};

const calculatRepMax = (oneRepMax: number, multiplier: number) => {
  if (oneRepMax < 0) {
    return Math.floor((Math.abs(oneRepMax) * (1 - multiplier) + Math.abs(oneRepMax)) * -1);
  }

  return Math.floor(oneRepMax * multiplier);
};

export const calculateThreeRepMax = (oneRepMax: number) => calculatRepMax(oneRepMax, 0.93);

export const calculateFiveRepMax = (oneRepMax: number) => calculatRepMax(oneRepMax, 0.88);

export const calculateEightRepMax = (oneRepMax: number) => calculatRepMax(oneRepMax, 0.8);

export const calculateTenRepMax = (oneRepMax: number) => calculatRepMax(oneRepMax, 0.74);

export const calculateTwelveRepMax = (oneRepMax: number) => calculatRepMax(oneRepMax, 0.7);

export const calculateFithteenRepMax = (oneRepMax: number) => calculatRepMax(oneRepMax, 0.66);

export const calculateTwentyRepMax = (oneRepMax: number) => calculatRepMax(oneRepMax, 0.59);

export const calculateRepMaxes = (
  weight: number,
  reps: number,
  formula?: keyof typeof formulas
): {
  oneRepMax: number;
  threeRepMax: number;
  fiveRepMax: number;
  eightRepMax: number;
  tenRepMax: number;
  twelveRepMax: number;
  fithteenRepMax: number;
  twentyRepMax: number;
} => {
  const oneRepMax = calculate1RepMax(weight, reps, formula);
  return {
    oneRepMax,
    threeRepMax: calculateThreeRepMax(oneRepMax),
    fiveRepMax: calculateFiveRepMax(oneRepMax),
    eightRepMax: calculateEightRepMax(oneRepMax),
    tenRepMax: calculateTenRepMax(oneRepMax),
    twelveRepMax: calculateTwelveRepMax(oneRepMax),
    fithteenRepMax: calculateFithteenRepMax(oneRepMax),
    twentyRepMax: calculateTwentyRepMax(oneRepMax),
  };
};
