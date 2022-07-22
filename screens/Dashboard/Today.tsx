import { Text } from 'native-base';
import { Trans, useTranslation } from 'react-i18next';

import { Paragraph } from '../../components/Content';
import { DashboardCard } from '../../components/Dashboards';
import { getTodaysCalories, NutritionProtocol } from '../../domain/nutrition';
import { ScheduledWorkout } from '../../domain/trainee';
import { getWorkoutUrl, RoutingButton } from '../../utils/routing';

export default function Today({
  recommendedNutrition,
  workout,
  startWorkout,
}: {
  recommendedNutrition: NutritionProtocol;
  workout: ScheduledWorkout | undefined;
  startWorkout: () => void;
}) {
  const { t } = useTranslation();

  const calories = getTodaysCalories(recommendedNutrition, !!workout);
  const protein = recommendedNutrition.targetProtein;
  const link = workout ? getWorkoutUrl(workout.id) : '/';

  return (
    <DashboardCard heading={t('Today')}>
      {workout ? (
        <Paragraph>
          <Text paddingRight={3}>
            {t('Today you are scheduled to perform:')} <Text bold>{workout.name}</Text>
          </Text>
          {workout.status === 'in progress' && <RoutingButton to={link}>{t('Continue Workout')}</RoutingButton>}
          {workout.status === 'pending' && (
            <RoutingButton to={link} onPress={startWorkout}>
              {t('Start Workout')}
            </RoutingButton>
          )}
        </Paragraph>
      ) : (
        <Paragraph>{t('Today is an active recovery day. Go for a run, do some stretching and/or some mobility work.')}</Paragraph>
      )}

      <Paragraph>
        <Trans t={t} calories={calories} protein={protein}>
          You should consume <Text bold>{{ calories }} calories</Text> and at least{' '}
          <Text bold>{{ protein }} grams of protein</Text>. Calories can be split between fat and carbs to preference,
          recommendation is that 20-30% come from healthy fats to maintain hormonal balance.
        </Trans>
      </Paragraph>
    </DashboardCard>
  );
}
