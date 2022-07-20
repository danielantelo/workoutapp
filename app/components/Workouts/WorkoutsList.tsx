import { Box, Divider, HStack, Icon, Text } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { goToWorkout, useNavigate } from '../../utils/routing';
import { ScheduledWorkout } from '../../domain/trainee';

export const WorkoutList = ({ workouts, dateFormat = 'date' }: { workouts: ScheduledWorkout[]; dateFormat?: 'day' | 'date' }) => {
  const navigate = useNavigate();
  return (
    <>
      {workouts.map((item, idx) => {
        const isDone = item.status === 'done';
        return (
          <Box key={`workout-${idx}`}>
            <HStack>
              <Icon
                color={isDone ? 'green.500' : 'amber.500'}
                mb={1}
                as={MaterialIcons}
                name={isDone ? 'done' : 'schedule'}
                size={'md'}
                marginRight={1}
              />
              <Text>
                {dateFormat === 'date'
                  ? new Date(item.date).toLocaleDateString('en-GB', {
                      weekday: 'short',
                      month: 'long',
                      day: 'numeric',
                    })
                  : new Date(item.date).toLocaleDateString('en-GB', { weekday: 'long' })}
              </Text>
              <Text bold>{` ${item.name}`}</Text>
              <Icon
                as={MaterialCommunityIcons}
                name={'eye'}
                size={'md'}
                marginLeft={'auto'}
                onPress={() => goToWorkout(navigate)(idx)}
              />
            </HStack>
            <Divider marginY={2} />
          </Box>
        );
      })}
    </>
  );
};
