import { Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { DashboardCard } from '../../components/Dashboards';
import { WorkoutList } from '../../components/Workouts';
import { ScheduledWorkout } from '../../domain/trainee';

export default function ThisWeek({ workouts }: { workouts: ScheduledWorkout[] }) {
  const { t } = useTranslation();

  return (
    <DashboardCard heading={'This Week'}>
      {workouts.length ? <WorkoutList workouts={workouts} dateFormat={'day'} /> : <Text>{t('No workouts scheduled.')}</Text>}
    </DashboardCard>
  );
}
