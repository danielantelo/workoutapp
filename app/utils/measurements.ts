import { UnitsType } from '../domain/constants';

export const formatDecimalMins = (time: number): string => {
  const min = Math.floor(time);
  const sec = Math.floor((time * 60) % 60);
  return (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
};

export const getWeightLabel = (unitsType: UnitsType): string => {
  return unitsType === UnitsType.Imperial ? 'lbs' : 'kg';
};

export const getHeightLabel = (unitsType: UnitsType): string => {
  return unitsType === UnitsType.Imperial ? 'feet' : 'cm';
};

export const getCircumferenceLabel = (unitsType: UnitsType): string => {
  return unitsType === UnitsType.Imperial ? 'inches' : 'cm';
};
