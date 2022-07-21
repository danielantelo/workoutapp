import { calculate1RepMax, calculateRepMaxes } from './calculators';

test('calculate1RepMax', () => {
  expect(calculate1RepMax(110, 4)).toEqual(123);
});

test('calculateRepMaxes', () => {
  expect(calculateRepMaxes(110, 4)).toEqual({
    oneRepMax: 123,
    threeRepMax: 114,
    fiveRepMax: 108,
    eightRepMax: 98,
    tenRepMax: 91,
    twelveRepMax: 86,
    fithteenRepMax: 81,
    twentyRepMax: 72,
  });
});
