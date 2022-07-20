import { useStoredState } from 'react-native-use-stored-state';

import { ScheduledWorkout } from './schedule';

export interface LoggedWorkout extends ScheduledWorkout {
  datePerformed: Date;
  program: string;
}

export const useLog = () => {
  const [workoutLog = [], setWorkoutLog, workoutLogLoaded, removeWorkoutLog] = useStoredState<LoggedWorkout[]>('LOG_WORKOUTS');

  const logWorkout = (workout: ScheduledWorkout, program: string) => {
    setWorkoutLog([
      { ...workout, datePerformed: new Date(), program },
      // spread at the end to force reverse order
      ...(workoutLog ?? []),
    ]);
  };

  const resetLog = () => {
    removeWorkoutLog();
  };

  return {
    logLoaded: workoutLogLoaded,
    workoutLog,
    logWorkout,
    resetLog,
  };
};
