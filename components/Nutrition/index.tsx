import { Box, Divider, Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import { NutritionProtocol, NutritionType } from '../../domain/nutrition';

import { DashboardDetail } from '../Dashboards';

export const NutritionInfo = ({ protocol }: { protocol: NutritionProtocol }) => {
  const { t } = useTranslation();
  const { note, bmr, tdee } = protocol;
  return (
    <>
      {note && <Text fontSize={'xs'}>{note}</Text>}
      <Box marginY={2}>
        <DashboardDetail label={t('BMR (Base Metabolic Rate)')} value={`${bmr}`} />
        <Divider />
        <DashboardDetail label={t('TDEE (Total Daily Energy Expenditure)')} value={`${tdee}`} />
        <Divider />
        <NutritionRecommendations protocol={protocol} />
        <Box marginY={2}>
          <Text fontSize={'2xs'} italic>
            {t(
              'NOTE: BMR was calculated using the average of Miffin St Jeor, Harris Benedict and Katch McArdle formulas. TDEE was calculated using your BMR and given activity level (lightly active=x1.375, active=x1.55 and very active=x1.725). Minimum protein to consume was calculated using your body fat % (1 gram per pound of lean bodyweight)'
            )}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export const NutritionRecommendations = ({ protocol }: { protocol: NutritionProtocol }) => {
  const { t } = useTranslation();
  const { targetCalories, type, higherCaloriesOnWeekends, cycleNutrition, targetProtein } = protocol;
  return (
    <Box>
      <DashboardDetail
        label={`Recommended Target Average ${type === NutritionType.Bulk ? 'Surplus' : 'Deficit'}`}
        value={`${targetCalories.energyExpenditureModifier}`}
      />
      <Divider />
      <DashboardDetail label={t('Target Average Daily Calories')} value={`${targetCalories.average}`} />
      <Divider />
      {higherCaloriesOnWeekends && !cycleNutrition && (
        <>
          <DashboardDetail label={`   ${t('Weekday Calories')}`} value={`${targetCalories.trainingDay}`} />
          <Divider />
          <DashboardDetail label={`   ${t('Weekend Calories')}`} value={`${targetCalories.weekend}`} />
          <Divider />
        </>
      )}
      {cycleNutrition && !higherCaloriesOnWeekends && (
        <>
          <DashboardDetail label={`   ${t('Training Day Calories')}`} value={`${targetCalories.trainingDay}`} />
          <Divider />
          <DashboardDetail label={`   ${t('Rest Day Calories')}`} value={`${targetCalories.restDay}`} />
          <Divider />
        </>
      )}
      {cycleNutrition && higherCaloriesOnWeekends && (
        <>
          <DashboardDetail label={`   ${t('Weekday Training Day Calories')}`} value={`${targetCalories.trainingDay}`} />
          <Divider />
          <DashboardDetail label={`   ${t('Weekday Rest Day Calories')}`} value={`${targetCalories.restDay}`} />
          <Divider />
          <DashboardDetail label={`   ${t('Weekend Calories')}`} value={`${targetCalories.weekend}`} />
          <Divider />
        </>
      )}
      <DashboardDetail label={t('Minimum Grams of Protein')} value={`${targetProtein}`} />
      <Divider />
    </Box>
  );
};
