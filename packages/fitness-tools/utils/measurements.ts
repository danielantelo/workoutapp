export const kgToLbs = (kg: number): number => (kg *= 2.2);

export const lbsToKg = (lbs: number): number => (lbs /= 2.2);

export const cmToInches = (cms: number): number => Math.round(cms * 0.393701);

export const inchesToCm = (inches: number): number => Math.round(inches / 0.393701);

export const feetToCms = (feet: number): number => Math.round(feet * 30.48);

export const cmsToFeet = (cms: number): number => Math.round(cms / 30.48);

export const feetToInches = (feet: number): number => feet * 12;

export const inchesToFeet = (inches: number): number => inches / 12;

export const feetAndInchesToInches = (feet: number, inches: number): number => feetToInches(feet) + inches;

export const inchestToFeetAndInches = (input: number): number[] => {
  const converted = inchesToFeet(input);
  const feet = Math.floor(converted);
  const inches = Math.round(feetToInches(converted - feet));
  return [feet, inches];
};
