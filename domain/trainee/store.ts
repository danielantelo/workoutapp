import { useStoredReducer, useStoredState } from 'react-native-use-stored-state';

import { ExperienceLevel, WeekDay } from '../constants';
import { getProgram } from '../programs';
import { getTodaysWorkout, ScheduleAction, ScheduledWorkout, scheduleReducer } from './schedule';

import { Trainee } from './trainee';

export type UpdateTraineeFn = <K extends keyof Trainee>(field: K, value: Trainee[K]) => void;

export type TraineeReducerAction = 'set_data';

export const traineeReducer = (
  formData: Trainee,
  action: { type: TraineeReducerAction; payload: { field: keyof Trainee; value: string | number | boolean } }
) => {
  const { type, payload } = action;
  switch (type) {
    case 'set_data':
      const { field, value } = payload;
      return { ...formData, [field]: value };
    default:
      throw new Error();
  }
};

const defaultTrainee = <Trainee>{
  preferredUnitsType: 'Metric',
  gender: 'Male',
  activityLevel: 'LightlyActive',
  bodyFat: 20,
  primaryGoal: 'Lean',
  secondaryGoal: 'Strength',
  preferredDietType: 'Balanced',
  preferredWeekStart: 'Monday',
  preferredNumberOfWorkoutsPerWeek: 3,
  preferredWorkoutDuration: 60,
  preferredWorkoutDays: ['Monday', 'Wednesday', 'Friday'],
  prefersProgramHoping: false,
  prefersMinimalLegs: false,
  prefersCycledNutrition: false,
  prefersHigherCaloriesOnWeekends: false,
  prefersAggressiveCut: false,
  preferredBarbellIncrement: 2.5,
  preferredBarbellDecrement: 10,
  preferredDumbbellIncrement: 2,
  preferredDumbbellDecrement: 15,
};

export const useTrainee = () => {
  const [trainee, dispatch, traineeLoaded, resetTrainee] = useStoredReducer<Trainee, TraineeReducerAction>(
    'TRAINEE_1.0.1',
    traineeReducer,
    defaultTrainee
  );

  const updateTrainee: UpdateTraineeFn = (field, value) => {
    dispatch({ type: 'set_data', payload: { field, value } });
  };

  return { trainee, updateTrainee, traineeLoaded, resetTrainee };
};

export const useActiveProgram = () => {
  const [activeProgram, setActiveProgram, activeProgramLoaded, unsetIsActive] = useStoredState<string>('ACTIVE_PROGRAM_1.0.0');
  const [schedule, updateSchedule, scheduleLoaded, unsetSchedule] = useStoredReducer<ScheduledWorkout[], ScheduleAction>(
    'ACTIVE_SCHEDULE_1.0.0',
    scheduleReducer
  );

  const program = activeProgram ? getProgram(activeProgram) : undefined;
  const todaysWorkout = schedule ? getTodaysWorkout(schedule) : undefined;

  const initialiseProgram = (id: string, experienceLevel: ExperienceLevel, weekStart: WeekDay) => {
    updateSchedule({ type: 'create', payload: { program: getProgram(id), experienceLevel, weekStart } });
    setActiveProgram(id);
  };

  const resetProgram = () => {
    unsetIsActive();
    unsetSchedule();
  };

  return {
    activeProgramLoaded: scheduleLoaded && activeProgramLoaded,
    active: !!program,
    schedule,
    updateSchedule,
    program,
    initialiseProgram,
    todaysWorkout,
    resetProgram,
  };
};
