import { Box, Heading, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { Table, TableHeader } from '../../../components/Content';
import { RoutineEntry } from '../../../domain/programs';
import { ScheduledWorkout } from '../../../domain/trainee';
import { ExerciseInfo } from './components/ExerciseInfo';
import { SetProps } from './interfaces';
import { Sets } from './Sets';
import { Warmups } from './Warmups';

export const WorkoutSheet = ({
  workout,
  ...rest
}: {
  workout: ScheduledWorkout;
} & SetProps) => {
  const { t } = useTranslation();
  return (
    <>
      {workout.routine.map((item: RoutineEntry, exerciseId: number) => {
        return (
          <Box key={`workout-${item.exercise}`} marginBottom={10}>
            <Heading fontSize={'md'} fontWeight={400} marginY={2}>
              {item.optional && <Text italic>{t('(Optional)')} </Text>}
              {item.exercise} <ExerciseInfo item={item} />
            </Heading>
            {item.note && (
              <Text>
                {t('Note:')} {item.note}
              </Text>
            )}
            <Table>
              <TableHeader
                headings={[
                  { content: t('Set'), textAlign: 'left', width: 10 },
                  { content: t('Previous') },
                  ...(!item.bodyweight ? [{ content: t('Weight') }] : []),
                  { content: t('Reps') },
                  { content: '' },
                ]}
              />
              <Warmups exerciseId={exerciseId} routine={item} {...rest} />
              <Sets exerciseId={exerciseId} routine={item} {...rest} />
            </Table>
          </Box>
        );
      })}
    </>
  );
};
