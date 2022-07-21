import { Box, Center, Divider, Heading, HStack, ScrollView, Text } from 'native-base';
import { RoutineEntry, RoutineSet, Workout } from '../../domain/programs';
import { Video } from '../Content';

export const getExerciseRepLabel = (item: RoutineEntry): string => {
  const sets = item.sets.length > 0 ? item.sets : item.warmup;

  const reps = sets!
    .reduce<string[]>((acc, set: RoutineSet) => {
      let targetReps = `${set.reps || set.targetReps || ''}`;
      if (set.minReps) {
        targetReps = `${set.minReps}-${set.maxReps}`;
      }
      if (set.AMRAP) {
        targetReps = targetReps ? `${targetReps}+` : 'f';
      }
      if (set.percentage) {
        targetReps = `${targetReps}@${set.percentage}%`;
      }

      return [...acc, targetReps];
    }, [])
    .reduce<string[]>((acc, current, currentIndex, array) => {
      let str = `1x${current}`;
      if (array[currentIndex] === array[currentIndex + 1] || array[currentIndex] === array[currentIndex - 1]) {
        str = `${array.filter((item) => item === current).length}x${current}`;
      }
      if (acc.includes(str)) return acc;

      return [...acc, str];
    }, []);

  return reps.join(', ');
};

export const WorkoutRoutinesHScroll = ({ workouts, showVideos }: { workouts: Workout[]; showVideos?: boolean }) => {
  return (
    <ScrollView horizontal={true}>
      <HStack>
        {workouts.map((workout: Workout, idx) => {
          const wid = `workout-${workout.name}`;
          const hasDivider = idx < workouts.length - 1;
          return (
            <HStack key={wid}>
              <Box width={240}>
                <Heading fontSize={'md'} fontWeight={300} paddingBottom={2}>
                  {workout.name}
                </Heading>
                {workout.routine.map((item: RoutineEntry) => (
                  <Box key={`${wid}-${item.exercise}`} paddingBottom={1}>
                    <Text bold>{item.exercise}</Text>
                    <Text>{getExerciseRepLabel(item)}</Text>
                  </Box>
                ))}
                {workout.video && showVideos && (
                  <Center paddingTop={2}>
                    <Video video={workout.video} width={260} />
                  </Center>
                )}
              </Box>
              {hasDivider && <Divider marginX={4} orientation={'vertical'} />}
            </HStack>
          );
        })}
      </HStack>
    </ScrollView>
  );
};
