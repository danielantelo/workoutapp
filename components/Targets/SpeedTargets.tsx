import { Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { SpeedMetrics } from '../../domain/standards';
import { formatDecimalMins } from '../../utils/measurements';
import { BulletPoint } from '../Content';

export const SpeedTargets = ({ speedTargets }: { speedTargets: SpeedMetrics }) => {
  const { t } = useTranslation();
  return (
    <>
      <BulletPoint>
        <Text fontSize={'xs'}>
          {t('Get your Mile Run run down to {{time}}', { time: formatDecimalMins(speedTargets.mileRun) })}
        </Text>
      </BulletPoint>
      <BulletPoint>
        <Text fontSize={'xs'}>
          {t('Get your 5k Run run down to {{time}}', { time: formatDecimalMins(speedTargets.fiveKmRun) })}
        </Text>
      </BulletPoint>
    </>
  );
};
