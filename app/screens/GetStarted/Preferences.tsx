import { Switch, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { EnumSelect, FormCard, InlineField } from '../../components/Forms';
import { Goal } from '../../domain/constants';
import { Trainee, UpdateTraineeFn } from '../../domain/trainee';

export const Preferences = ({ trainee, updateTrainee }: { trainee: Trainee; updateTrainee: UpdateTraineeFn }) => {
  const { t } = useTranslation();
  const { primaryGoal, secondaryGoal, prefersMinimalLegs, prefersProgramHoping } = trainee;
  return (
    <FormCard heading={t('Your goals and preferences')}>
      <InlineField>
        <Text>{t('Primary Goal')}</Text>
        <EnumSelect
          Enum={Goal}
          selectedValue={primaryGoal}
          onValueChange={(value: keyof typeof Goal) => updateTrainee('primaryGoal', value)}
        />
      </InlineField>
      <InlineField>
        <Text>{t('Secondary Goal')}</Text>
        <EnumSelect
          Enum={Goal}
          selectedValue={secondaryGoal}
          onValueChange={(value: keyof typeof Goal) => updateTrainee('secondaryGoal', value)}
        />
      </InlineField>
      <InlineField>
        <Text maxWidth={'85%'}>
          <Text bold>{t('Mix it up often:')}</Text>{' '}
          {t('If you get bored easily, this will cycle you through appropriate programs more often')}
        </Text>
        <Switch
          size="sm"
          isChecked={prefersProgramHoping}
          onValueChange={(checked: boolean) => updateTrainee('prefersProgramHoping', checked)}
        />
      </InlineField>
      <InlineField>
        <Text maxWidth={'85%'}>
          <Text bold>{t('Minimal legs:')}</Text>{' '}
          {t(
            'For those not keen on squatting heavy and often, or those who just do not want big legs and rather keep them strong and athletic'
          )}
        </Text>
        <Switch
          size="sm"
          isChecked={prefersMinimalLegs}
          onValueChange={(checked: boolean) => updateTrainee('prefersMinimalLegs', checked)}
        />
      </InlineField>
    </FormCard>
  );
};
