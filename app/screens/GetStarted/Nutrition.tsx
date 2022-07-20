import { Switch, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { EnumSelect, FormCard, InlineField } from '../../components/Forms';
import { DietType } from '../../domain/constants';
import { Trainee, UpdateTraineeFn } from '../../domain/trainee';

export const Nutrition = ({ trainee, updateTrainee }: { trainee: Trainee; updateTrainee: UpdateTraineeFn }) => {
  const { t } = useTranslation();
  const { preferredDietType, prefersHigherCaloriesOnWeekends, prefersCycledNutrition, needsMetabolicReset } = trainee;
  return (
    <FormCard heading={t('Your current nutrition and preferences')}>
      <InlineField>
        <Text>{'Eating style'}</Text>
        <EnumSelect
          Enum={DietType}
          selectedValue={preferredDietType}
          onValueChange={(value: keyof typeof DietType) => updateTrainee('preferredDietType', value)}
        />
      </InlineField>
      <InlineField>
        <Text maxWidth={'85%'}>{t('Have you been "dieting" on low calories for a long time without results?')}</Text>
        <Switch
          size="sm"
          isChecked={needsMetabolicReset}
          onValueChange={(checked: boolean) => updateTrainee('needsMetabolicReset', checked)}
        />
      </InlineField>
      <InlineField>
        <Text maxWidth={'85%'}>
          <Text bold>{t('Consume higher calories on the weekends:')}</Text>{' '}
          {t('for those who prefer to eat less during the week and indulge more on the weekend and still meet their goals')}
        </Text>
        <Switch
          size="sm"
          isChecked={prefersHigherCaloriesOnWeekends}
          onValueChange={(checked: boolean) => updateTrainee('prefersHigherCaloriesOnWeekends', checked)}
        />
      </InlineField>
      <InlineField>
        <Text maxWidth={'85%'}>
          <Text bold>{t('Cycle calories:')}</Text> {t('for those who prefer to eat more on training days and less on rest days')}
        </Text>
        <Switch
          size="sm"
          isChecked={prefersCycledNutrition}
          onValueChange={(checked: boolean) => updateTrainee('prefersCycledNutrition', checked)}
        />
      </InlineField>
    </FormCard>
  );
};
