import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Center, Pressable } from 'native-base';
import { CountdownCircleTimer, TimeProps } from 'react-native-countdown-circle-timer';

import { FormCard } from '../../components/Forms';
import { HeadedLayout } from '../../components/Layouts';
import { Loader } from '../../components/Loader';
import { getTraineeMetrics, Lifts, useActiveProgram, useLog, useTrainee } from '../../domain/trainee';
import {
  getCompleteSetCount,
  getPreviousLift,
  getRecommendedWeight,
  getWorkoutById,
  getWorkoutTotalSetCount,
  updateCurrentLifts,
} from '../../domain/workout';
import { Destination, RoutingButton } from '../../utils/routing';
import { WorkoutSheet } from './WorkoutSheet';
import { Progress, Text } from 'native-base';
import { useEffect, useState } from 'react';

export default function Workout() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { trainee, traineeLoaded, updateTrainee } = useTrainee();
  const { program, schedule, activeProgramLoaded, updateSchedule } = useActiveProgram();
  const { logWorkout } = useLog();

  const [setsDone, setSetsDone] = useState<number>(0);
  const [nextRestDuration, setNextRestDuration] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<number>(0);

  const workout = schedule && getWorkoutById(schedule)(Number(id));

  useEffect(() => {
    schedule && workout && setSetsDone(getCompleteSetCount(workout));
  }, [id, schedule, setSetsDone, workout]);

  if (!traineeLoaded || !activeProgramLoaded) {
    return <Loader />;
  }

  const { strengthMetrics } = getTraineeMetrics(trainee!);
  const totalSets = workout ? getWorkoutTotalSetCount(workout) : 0;

  const getSetRecommendedWeight = getRecommendedWeight({
    schedule: schedule!,
    workoutId: Number(id),
    barbellIncrement: trainee.preferredBarbellIncrement,
    barbellDecrement: trainee.preferredBarbellDecrement,
    dumbbellIncrement: trainee.preferredDumbbellIncrement,
    dumbbellDecrement: trainee.preferredDumbbellDecrement,
    strengthStandards: strengthMetrics,
    bodyweight: trainee!.weight,
    currentLifts: trainee!.currentLifts,
  });

  const onChangeSetWeight = (exerciseId: number, setId: number, value: number) => {
    updateSchedule({ type: 'change_set_weight', payload: { id, exerciseId, setId, value } });
  };

  const onChangeSetReps = (exerciseId: number, setId: number, value: number) => {
    updateSchedule({ type: 'change_set_reps', payload: { id, exerciseId, setId, value } });
  };

  const onSetComplete = (exerciseId: number, setId: number, isWarmup: boolean) => {
    updateSchedule({
      type: 'complete_set',
      payload: { id, exerciseId, setId, isWarmup, recommendedWeight: getSetRecommendedWeight(exerciseId, setId, isWarmup) },
    });
    // trigger rest timer
    const restTime = isWarmup ? 60 : (schedule![Number(id!)].routine[exerciseId].rest ?? 1) * 60;
    setNextRestDuration(restTime);
    setRemainingTime(restTime);
    // update progress bar
    setSetsDone((previous: number) => previous + 1);
  };

  const finishWorkout = () => {
    updateSchedule({ type: 'end_workout', payload: { id } });
    updateCurrentLifts(trainee!.currentLifts, workout!, (newLifts: Lifts) => updateTrainee('currentLifts', newLifts));
    logWorkout(workout!, program!.name);
  };

  return (
    <HeadedLayout
      showNav
      heading={workout!.name}
      headerElements={
        <>
          <Progress w="70%" colorScheme="primary" value={(setsDone / totalSets) * 100} marginY={1} />
          {nextRestDuration > 0 && remainingTime > 0 && (
            <Center paddingY={2}>
              <CountdownCircleTimer
                size={90}
                strokeWidth={8}
                key={setsDone}
                isPlaying
                duration={nextRestDuration}
                colors={'#FF8533'}
              >
                {({ remainingTime }: TimeProps) => {
                  setRemainingTime(remainingTime);
                  return <Text color={'white'} fontSize={'xs'}>{`${~~(remainingTime / 60)}min ${remainingTime % 60}sec`}</Text>;
                }}
              </CountdownCircleTimer>
              <Pressable onPress={() => setRemainingTime(0)}>
                <Text color={'white'} textDecoration={'underline'} paddingTop={2}>
                  {t('Skip')}
                </Text>
              </Pressable>
            </Center>
          )}
        </>
      }
    >
      <FormCard>
        <WorkoutSheet
          workout={workout!}
          getRecommendedWeight={getSetRecommendedWeight}
          onChangeSetReps={onChangeSetReps}
          onChangeSetWeight={onChangeSetWeight}
          onSetComplete={onSetComplete}
          getPreviousLift={getPreviousLift(schedule!, Number(id), trainee!.currentLifts)}
        />
        {/* {workout?.status !== 'done' && ( */}
        <RoutingButton to={Destination.Dashboard} onPress={finishWorkout}>
          {t('Finish Workout')}
        </RoutingButton>
        {/* )} */}
      </FormCard>
    </HeadedLayout>
  );
}
