import { Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import { toNearestIncrement } from 'fitness-tools';

import { UnitsType } from '../../domain/constants';
import { LiftMetrics, StrengthMetrics } from '../../domain/standards';
import { getWeightLabel } from '../../utils/measurements';
import { BulletPoint } from '../Content';

export const LiftingTargets = ({ liftTargets, unitsType }: { liftTargets: StrengthMetrics; unitsType: UnitsType }) => {
  const { t } = useTranslation();
  const weightLabel = getWeightLabel(unitsType);
  return (
    <>
      {Object.keys(liftTargets).map((lift) => {
        const { oneRepMax, fiveRepMax, reps } = liftTargets[lift as keyof typeof liftTargets] as LiftMetrics;
        const roundedFiveReps = fiveRepMax && toNearestIncrement({ weight: fiveRepMax, unitsType });

        return (
          <BulletPoint key={lift}>
            <Text fontSize={'xs'}>
              {oneRepMax ? (
                <>
                  {t('Get your {{lift}} 1RM to {{oneRepMax}}{{weightLabel}}', { lift, oneRepMax, weightLabel })}
                  {roundedFiveReps && (
                    <Text>{t(` (that's {{weight}}{{weightLabel}} for 5 reps)`, { weight: roundedFiveReps, weightLabel })}</Text>
                  )}
                </>
              ) : (
                <>{t('Get your number of {{lift}} to {{reps}}', { lift, reps })}</>
              )}
            </Text>
          </BulletPoint>
        );
      })}
    </>
  );
};
