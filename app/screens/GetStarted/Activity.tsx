import { Input, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { EnumSelect, FormCard, InlineField, Select } from '../../components/Forms';
import { LiftingStandardsCalculator } from '../../components/Standards';
import { ActivityLevel, UnitsType } from '../../domain/constants';
import { Lifts, Trainee, UpdateTraineeFn } from '../../domain/trainee';

export const Activity = ({ trainee, updateTrainee }: { trainee: Trainee; updateTrainee: UpdateTraineeFn }) => {
  const { t } = useTranslation();
  const {
    activityLevel,
    bestMileRunTime,
    bestfiveKmRunTime,
    maxPushUps,
    maxPullUps,
    hasLifted,
    preferredUnitsType,
    currentLifts,
    weight,
  } = trainee;
  return (
    <FormCard heading={t('Your current activity')}>
      <InlineField>
        <Text>{t('General daily activity')}</Text>
        <EnumSelect
          Enum={ActivityLevel}
          selectedValue={activityLevel}
          onValueChange={(value: keyof typeof ActivityLevel) => updateTrainee('activityLevel', value)}
        />
      </InlineField>
      <InlineField>
        <Text>{t('Mile run time (mins)')}</Text>
        <Input
          textAlign={'right'}
          width={50}
          keyboardType={'decimal-pad'}
          value={bestMileRunTime?.toString() || ''}
          onChangeText={(value: string) => updateTrainee('bestMileRunTime', Number(value))}
        />
      </InlineField>
      <InlineField>
        <Text>{t('5k run time (mins)')}</Text>
        <Input
          textAlign={'right'}
          width={50}
          keyboardType={'decimal-pad'}
          value={bestfiveKmRunTime?.toString() || ''}
          onChangeText={(value: string) => updateTrainee('bestfiveKmRunTime', Number(value))}
        />
      </InlineField>
      <InlineField>
        <Text>{t('How many push ups can you do?')}</Text>
        <Input
          textAlign={'right'}
          width={50}
          keyboardType={'decimal-pad'}
          value={maxPushUps?.toString() || ''}
          onChangeText={(value: string) => updateTrainee('maxPushUps', Number(value))}
        />
      </InlineField>
      <InlineField>
        <Text>{t('How many pull ups can you do?')}</Text>
        <Input
          textAlign={'right'}
          width={50}
          keyboardType={'decimal-pad'}
          value={maxPullUps?.toString() || ''}
          onChangeText={(value: string) => updateTrainee('maxPullUps', Number(value))}
        />
      </InlineField>
      <InlineField>
        <Text>{t('Ever done barbell lifting?')}</Text>
        <Select
          selectedValue={hasLifted ? 'yes' : 'no'}
          onValueChange={(value: string) => updateTrainee('hasLifted', value === 'yes')}
          items={[
            { value: 'yes', label: 'yes' },
            { value: 'no', label: 'no' },
          ]}
        />
      </InlineField>
      {hasLifted && (
        <LiftingStandardsCalculator
          unitsType={UnitsType[preferredUnitsType]}
          lifts={currentLifts}
          weight={weight}
          setLifts={(newLifts: Lifts) => {
            updateTrainee('currentLifts', newLifts);
          }}
        />
      )}
    </FormCard>
  );
};
