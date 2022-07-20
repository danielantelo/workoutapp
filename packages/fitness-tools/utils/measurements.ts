export const kgToLbs = (kg: number): number => (kg *= 2.2);

export const lbsToKg = (lbs: number): number => (lbs /= 2.2);

export const cmToInches = (cms: number): number => Math.round(cms * 0.393701);

export const feetToCms = (feet: number): number => Math.round(feet * 30.48);

export const feetToInches = (feet: number): number => feet * 12;

export const inchesToFeet = (inches: number): number => inches / 12;
