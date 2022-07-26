import { Switch, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { FormCard, InlineField } from '../Forms';
import { NutritionInfo } from '.';
import { NutritionProtocol, NutritionType } from '../../domain/nutrition';
import { Trainee, UpdateTraineeFn } from '../../domain/trainee';

export const NutritionRecommendation = ({
  trainee,
  updateTrainee,
  recommendedNutrition,
}: {
  trainee: Trainee;
  updateTrainee: UpdateTraineeFn;
  recommendedNutrition: NutritionProtocol;
}) => {
  const { t } = useTranslation();
  const { prefersAggressiveCut, prefersHigherCaloriesOnWeekends, prefersCycledNutrition } = trainee;
  return (
    <FormCard heading={'Nutritional Recommendation'}>
      <NutritionInfo protocol={recommendedNutrition} />
      {[NutritionType.Cut, NutritionType.AggressiveCut].includes(recommendedNutrition.type) && (
        <InlineField>
          <Text maxWidth={'85%'}>
            <Text bold>{t('More aggresive cut:')}</Text>{' '}
            {t('for those who want to drop weight quicker and can handle lower calories.')}
          </Text>
          <Switch
            size="sm"
            isChecked={prefersAggressiveCut}
            onValueChange={(checked: boolean) => updateTrainee('prefersAggressiveCut', checked)}
          />
        </InlineField>
      )}
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
