import { Box, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { BulletPoint } from '../../components/Content';
import { FormCard } from '../../components/Forms';
import { LiftingTargets, SpeedTargets } from '../../components/Targets';
import { SpeedMetrics, StrengthMetrics } from '../../domain/standards';
import { Trainee } from '../../domain/trainee';
import { UnitsType } from '../../fitness-tools';

export const CurrentTargets = ({
  trainee,
  speedTargets,
  liftTargets,
  bodyFatTarget,
}: {
  trainee: Trainee;
  speedTargets: SpeedMetrics;
  liftTargets: StrengthMetrics;
  bodyFatTarget?: number;
}) => {
  const { t } = useTranslation();
  const { preferredUnitsType } = trainee;
  return (
    <FormCard heading={'Current Training Aims'}>
      <Box marginBottom={3}>
        <Text>{t('You should focus on getting stronger and faster aiming for the following short term goals:')}</Text>
        {liftTargets && <LiftingTargets liftTargets={liftTargets} unitsType={UnitsType[preferredUnitsType]} />}
        {speedTargets && <SpeedTargets speedTargets={speedTargets} />}
        {bodyFatTarget && (
          <BulletPoint>
            <Text fontSize={'xs'}>{t('Get your body fat down to {{bodyFatTarget}}%', { bodyFatTarget })}</Text>
          </BulletPoint>
        )}
      </Box>
    </FormCard>
  );
};
