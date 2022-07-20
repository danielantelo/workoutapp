import { useTranslation } from 'react-i18next';

import { HeadedLayout } from '../../components/Layouts';
import { Loader } from '../../components/Loader';
import Today from './Today';
import {
  getScheduledForThisWeek,
  getTraineeMetrics,
  getTraineeRecommendations,
  useActiveProgram,
  useTrainee,
} from '../../domain/trainee';
import ThisWeek from './ThisWeek';

export default function Dashboard() {
  const { t } = useTranslation();
  const { traineeLoaded, trainee } = useTrainee();
  const { schedule, activeProgramLoaded, todaysWorkout, updateSchedule } = useActiveProgram();

  if (!traineeLoaded || !activeProgramLoaded) {
    return <Loader />;
  }

  const traineeMetrics = getTraineeMetrics(trainee!);
  const { recommendedNutrition } = getTraineeRecommendations(trainee!, traineeMetrics);
  const thisWeeksWorkouts = getScheduledForThisWeek(schedule!);

  const startWorkout = () => {
    todaysWorkout && updateSchedule({ type: 'start_workout', payload: { id: todaysWorkout.id } });
  };

  return (
    <HeadedLayout showNav heading={t('Dashboard')}>
      <Today recommendedNutrition={recommendedNutrition!} workout={todaysWorkout} startWorkout={startWorkout} />
      <ThisWeek workouts={thisWeeksWorkouts} />
    </HeadedLayout>
  );
}
