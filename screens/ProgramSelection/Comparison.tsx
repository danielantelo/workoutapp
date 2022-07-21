import { Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { FormCard } from '../../components/Forms';
import { SpeedtandardsComparison, StrengthStandardsComparison } from '../../components/Standards';
import { Gender, UnitsType } from '../../domain/constants';
import { Exercise } from '../../domain/exercises';
import { Trainee, TraineeMetrics } from '../../domain/trainee';

export const Comparison = ({ trainee, traineeMetrics }: { trainee: Trainee; traineeMetrics: TraineeMetrics }) => {
  const { t } = useTranslation();
  const { gender, maxPullUps, maxPushUps, preferredUnitsType } = trainee;
  const { strengthLevel, strengthMetrics, speedLevel, speedMetrics } = traineeMetrics;
  return (
    <>
      <FormCard heading={t('Strength')}>
        <Text marginBottom={2}>
          {t('You are ranked as:')} <Text bold>{strengthLevel}</Text>
        </Text>
        <StrengthStandardsComparison
          gender={Gender[gender]}
          standards={{
            ...strengthMetrics,
            [Exercise.Pullup]: { reps: maxPullUps },
            [Exercise.Pushup]: { reps: maxPushUps },
          }}
          unitsType={UnitsType[preferredUnitsType]}
        />
      </FormCard>
      <FormCard heading={t('Speed')}>
        <Text marginBottom={2}>
          {t('You are ranked as:')} <Text bold>{speedLevel}</Text>
        </Text>
        <SpeedtandardsComparison gender={Gender[gender]} standards={speedMetrics} />
      </FormCard>
    </>
  );
};
