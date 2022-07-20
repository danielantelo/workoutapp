import { Box, Divider, HStack, Text, VStack } from 'native-base';
import { useTranslation } from 'react-i18next';

import { DashboardCard } from '../../components/Dashboards';
import { HeadedLayout } from '../../components/Layouts';
import { Loader } from '../../components/Loader';
import { RoutineEntry } from '../../domain/programs';
import { useLog } from '../../domain/trainee';

export default function Log() {
  const { t } = useTranslation();
  const { workoutLog, logLoaded } = useLog();

  if (!logLoaded) {
    return <Loader />;
  }

  return (
    <HeadedLayout showNav heading={t('Log')}>
      {(!workoutLog || !workoutLog.length) && <Text>{t('No workouts logged.')}</Text>}
      {workoutLog?.map((workout) => {
        const key = `${workout.datePerformed}-${workout.name}`;
        return (
          <DashboardCard key={key}>
            <VStack space={1}>
              <Text bold fontSize={'xs'}>
                {new Date(workout.datePerformed).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Text>
              <Text fontSize={'xs'}>
                {t('{{workoutName}}, {{program}}', { workoutName: workout.name, program: workout.program })}
              </Text>
              <Divider />
              {workout.routine.map((item: RoutineEntry) => (
                <Box key={`${key}-${item.exercise}`}>
                  {item.sets.length > 0 && (
                    <Box>
                      <Text bold fontSize={'xs'}>
                        {item.exercise}
                      </Text>
                      <HStack>
                        {item.sets.map((set, setId) => (
                          <Text fontSize={'xs'} key={`${key}-${item.exercise}set-${setId}`} marginRight={2}>
                            {!!set.weight && !!set.reps && `${set.weight}x${set.reps}`}
                            {!set.weight && !!set.reps && `${set.reps}reps`}
                          </Text>
                        ))}
                      </HStack>
                    </Box>
                  )}
                </Box>
              ))}
            </VStack>
          </DashboardCard>
        );
      })}
    </HeadedLayout>
  );
}
