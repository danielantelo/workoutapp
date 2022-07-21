import { Center, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { Video } from '../../components/Content';
import { DashboardCard, DashboardDetail } from '../../components/Dashboards';
import { HeadedLayout } from '../../components/Layouts';
import { Loader } from '../../components/Loader';
import { WorkoutList } from '../../components/Workouts';
import { WorkoutRoutinesHScroll } from '../../components/Workouts/WorkoutRoutinesHScroll';
import { getTraineeMetrics, useActiveProgram, useTrainee } from '../../domain/trainee';

export default function Program() {
  const { t } = useTranslation();
  const { trainee, traineeLoaded } = useTrainee();
  const { activeProgramLoaded, program, schedule } = useActiveProgram();

  if (!activeProgramLoaded || !traineeLoaded) {
    return <Loader />;
  }

  const { strengthLevel } = getTraineeMetrics(trainee!);
  const completedCount = schedule!.filter((item) => item.status === 'done').length;

  return (
    <HeadedLayout showNav heading={t('Program')}>
      <DashboardCard heading={t('Active Program')}>
        <DashboardDetail label={t('Name')} value={program!.name} />
        <DashboardDetail label={t('Author')} value={program!.author} />
        {program!.link && <DashboardDetail label={t('Sourced from')} value={program!.link} />}
        <DashboardDetail label={t('Duration')} value={`${program!.duration} weeks`} />
        <DashboardDetail label={t('Workouts per week')} value={program!.daysPerWeek} />
        <DashboardDetail label={t('Workout duration')} value={`${program!.workoutDuration} min`} />
        {program?.video && (
          <Center paddingTop={2}>
            <Video video={program.video} />
          </Center>
        )}
      </DashboardCard>
      <DashboardCard heading={t('Workouts')}>
        <WorkoutRoutinesHScroll workouts={program!.workouts(strengthLevel)} showVideos />
      </DashboardCard>
      <DashboardCard heading={t('Schedule')}>
        <WorkoutList workouts={schedule!} />
        <Text italic textAlign={'right'}>
          {t('{{completedCount}}/{{total}} workouts complete', { completedCount, total: schedule!.length })}
        </Text>
      </DashboardCard>
    </HeadedLayout>
  );
}
