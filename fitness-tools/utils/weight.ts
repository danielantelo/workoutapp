import { UnitsType } from '../constants';

export const toNearestIncrement = ({
  weight,
  unitsType,
  increment,
}: {
  weight: number;
  unitsType?: UnitsType;
  increment?: number;
}) => {
  const inc = increment ?? unitsType === UnitsType.Metric ? 2.5 : 5;
  return Math.round(weight / inc) * inc;
};
