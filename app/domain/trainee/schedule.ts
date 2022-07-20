import dayjs from 'dayjs';

import { getDateOfWeekday, getNextWorkoutDay } from '../../utils/calendar';
import { ExperienceLevel, WeekDay } from '../constants';
import { Program, Workout } from '../programs/interfaces';

export interface ScheduledWorkout extends Workout {
  id: number;
  date: Date;
  status?: 'pending' | 'done' | 'in progress';
}

export type ScheduleAction =
  | 'create'
  | 'start_workout'
  | 'end_workout'
  | 'change_set_weight'
  | 'change_set_reps'
  | 'complete_set';

type CreateSchedulePayload = { program: Program; experienceLevel: ExperienceLevel; weekStart: WeekDay };
type UpdateScheduleWorkoutPayload = { id: number; exerciseId: number; setId: number; value: number };
type CompleteSetPayload = UpdateScheduleWorkoutPayload & { isWarmup: boolean; recommendedWeight: number };

export const scheduleReducer = (
  schedule: ScheduledWorkout[],
  action: {
    type: ScheduleAction;
    payload: CreateSchedulePayload | UpdateScheduleWorkoutPayload | CompleteSetPayload;
  }
) => {
  const { type, payload } = action;

  if (type === 'create') {
    const { program, experienceLevel, weekStart } = <CreateSchedulePayload>payload;
    return createSchedule(program, experienceLevel, weekStart);
  }

  const newSchedule = [...schedule];
  const { id, exerciseId, setId, value } = <UpdateScheduleWorkoutPayload>payload;

  switch (type) {
    case 'start_workout':
      newSchedule[id].status = 'in progress';
      return newSchedule;
    case 'end_workout':
      markAllSetsAsComplete(schedule, id);
      newSchedule[id].status = 'done';
      return newSchedule;
    case 'change_set_weight':
      newSchedule[id].routine[exerciseId].sets[setId].weight = value;
      return newSchedule;
    case 'change_set_reps':
      newSchedule[id].routine[exerciseId].sets[setId].reps = value;
      return newSchedule;
    case 'complete_set':
      const { isWarmup, recommendedWeight } = <CompleteSetPayload>payload;
      updateWorkoutWithCompletedSet(newSchedule, id, exerciseId, setId, isWarmup, recommendedWeight);
      return newSchedule;
    default:
      throw new Error();
  }
};

export const createSchedule = (program: Program, experienceLevel: ExperienceLevel, weekStart: WeekDay = WeekDay.Monday) => {
  // @TODO configurable per program, A/B splits should can be false
  const firstWorkoutMustBeOnWeekStart = false;
  const workouts = program.workouts(experienceLevel);
  let totalWorkouts: number = program.daysPerWeek * program.duration;
  let workoutWeeklyIndex = 0;
  let date: Date | undefined = firstWorkoutMustBeOnWeekStart
    ? getDateOfWeekday(weekStart, new Date(), false)
    : getNextWorkoutDay(program.weeklySchedule, weekStart);

  const schedule: ScheduledWorkout[] = [];
  while (totalWorkouts > 0) {
    schedule.push({
      id: schedule.length,
      date,
      status: 'pending',
      ...workouts[workoutWeeklyIndex],
    });
    date = getNextWorkoutDay(program.weeklySchedule, weekStart, date);
    totalWorkouts--;
    workoutWeeklyIndex++;
    if (workoutWeeklyIndex === workouts.length) {
      workoutWeeklyIndex = 0;
    }
  }

  return schedule;
};

export const getTodaysWorkout = (schedule: ScheduledWorkout[]): ScheduledWorkout | undefined => {
  return schedule.find((item) => new Date(item.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
};

export const getScheduledForThisWeek = (schedule: ScheduledWorkout[]): ScheduledWorkout[] => {
  return schedule.filter((entry) => dayjs().isSame(entry.date, 'week')) || [];
};

export const markAllSetsAsComplete = (schedule: ScheduledWorkout[], workoutId: number): void => {
  schedule[workoutId].routine.forEach((exercise, exerciseId) => {
    exercise.warmup?.forEach((set, setId) => updateWorkoutWithCompletedSet(schedule, workoutId, exerciseId, setId, true));
    exercise.sets.forEach((set, setId) => updateWorkoutWithCompletedSet(schedule, workoutId, exerciseId, setId, false));
  });
};

export const updateWorkoutWithCompletedSet = (
  schedule: ScheduledWorkout[],
  workoutId: number,
  exerciseId: number,
  setId: number,
  isWarmup: boolean,
  recommendedWeight?: number
): void => {
  if (isWarmup) {
    const warmup = schedule[workoutId].routine[exerciseId].warmup![setId];
    if (!warmup.weight && recommendedWeight) {
      schedule[workoutId].routine[exerciseId].warmup![setId].weight = recommendedWeight;
    }
    schedule[workoutId].routine[exerciseId].warmup![setId].status = 'done';
  } else {
    const set = schedule[workoutId].routine[exerciseId].sets[setId];
    if (!set.reps) {
      schedule[workoutId].routine[exerciseId].sets[setId].reps = set.maxReps ?? set.targetReps;
    }
    if (!set.weight && recommendedWeight) {
      schedule[workoutId].routine[exerciseId].sets[setId].weight = recommendedWeight;
    }
    schedule[workoutId].routine[exerciseId].sets[setId].status = 'done';
  }
};
