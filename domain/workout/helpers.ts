import { toNearestIncrement } from '../../fitness-tools';
import { RoutineEntry, RoutineSet } from '../programs';
import { StrengthMetrics } from '../standards';
import { LiftAttempt, Lifts, ScheduledWorkout } from '../trainee';

export const getWorkoutById = (schedule: ScheduledWorkout[]) => (id: number) => schedule.find((entry) => entry.id === id);

export const getWorkoutTotalSetCount = (workout: ScheduledWorkout): number =>
  workout.routine.reduce((acc, current) => {
    if (current.warmup) acc = acc + current.warmup.length;
    if (current.sets) acc = acc + current.sets.length;
    return acc;
  }, 0);

export const getCompleteSetCount = (workout: ScheduledWorkout): number => {
  return workout.routine.reduce((acc: number, curr: RoutineEntry) => {
    let count = acc;
    [...(curr.warmup ? curr.warmup : []), ...(curr.sets ? curr.sets : [])].forEach((curr) => {
      if (curr.status === 'done') count = count + 1;
    });

    return count;
  }, 0);
};

export const getPreviousWorkoutOfType = (schedule: ScheduledWorkout[]) => (workoutId: number) => {
  const workout = schedule[workoutId];
  let previous;
  for (let i = workoutId - 1; i >= 0; i--) {
    if (schedule[i].name === workout.name) {
      previous = schedule[i];
      break;
    }
  }
  return previous;
};

export const getPreviousLift =
  (schedule: ScheduledWorkout[], workoutId: number, currentLifts?: Lifts) =>
  (exerciseId: number, setId: number, warmup = false): { weight: number | undefined; reps: number } | undefined => {
    // @TODO track and handle warmup history
    if (warmup) return;

    const previousWorkout = getPreviousWorkoutOfType(schedule!)(workoutId);
    const previousSet = previousWorkout?.routine[exerciseId].sets[setId];

    let previous = previousSet ? { weight: previousSet.weight, reps: previousSet.reps! } : undefined;

    // if no previous and it is not a warmup
    if (!previous && setId === 0 && currentLifts) {
      previous = currentLifts[schedule[workoutId].routine[exerciseId].exercise as keyof typeof currentLifts];
    }

    return previous;
  };

export const getRecommendedWeight =
  ({
    schedule,
    workoutId,
    barbellIncrement,
    barbellDecrement,
    dumbbellIncrement,
    dumbbellDecrement,
    strengthStandards,
    bodyweight,
    currentLifts,
  }: {
    schedule: ScheduledWorkout[];
    workoutId: number;
    barbellIncrement: number;
    barbellDecrement: number;
    dumbbellIncrement: number;
    dumbbellDecrement: number;
    strengthStandards: StrengthMetrics;
    bodyweight: number;
    currentLifts: Lifts;
  }) =>
  (exerciseId: number, setId: number, warmup = false): number | undefined => {
    const entry = schedule[workoutId].routine[exerciseId];

    const currentLift = currentLifts[entry.exercise as keyof typeof currentLifts];
    const previous = getPreviousLift(schedule, workoutId)(exerciseId, setId);
    const liftStandards = strengthStandards[entry.exercise as keyof typeof strengthStandards];
    const set = warmup ? entry.warmup?.[setId] : entry.sets[setId];

    // @TODO by exercise type
    const smallestIncrement = barbellIncrement;
    const deloadDecrement = barbellDecrement;

    let weight;
    if (set?.weight) {
      weight = set.weight;
    } else if (set?.percentage && liftStandards) {
      weight = liftStandards[set.basis ?? 'oneRepMax']! * (set.percentage / 100);
    } else if (set?.ratio) {
      weight = bodyweight * set.ratio;
    } else if (!previous && liftStandards && entry.startingWeight) {
      weight = Number(liftStandards[entry.startingWeight]!);
    } else if (!warmup && currentLift) {
      const needsDeload = currentLift.fails && currentLift.fails >= 3;
      const passedLastAttempt =
        (currentLift.targetReps && currentLift.reps >= currentLift.targetReps) ||
        currentLift.reps >= set.targetReps ||
        currentLift.reps >= set.maxReps;
      const needsToRepeatPrevious =
        (currentLift.targetReps && currentLift.reps < currentLift.targetReps) ||
        currentLift.reps < set.targetReps ||
        currentLift.reps < set.maxReps;
      if (needsDeload) {
        weight = Number(currentLift.weight) - Number(currentLift.weight) * (deloadDecrement / 100);
      } else if (passedLastAttempt) {
        weight = Number(currentLift.weight) + Number(smallestIncrement);
      } else if (needsToRepeatPrevious) {
        weight = Number(currentLift.weight);
      } else if (liftStandards) {
        // @TODO should be configurable?
        weight = liftStandards['fiveRepMax'];
      }
    } else if (liftStandards && entry.startingWeight) {
      weight = Number(liftStandards[entry.startingWeight]!);
    } else if (!warmup && currentLift) {
      weight = Number(currentLift.weight);
    }

    return weight && toNearestIncrement({ weight, increment: smallestIncrement });
  };

const getTrackingAttemptFromSets = (sets: RoutineSet[]): LiftAttempt | undefined =>
  sets.reduce((prev, set) => {
    if (set.ignoreForTracking || (!set.weight && !set.reps)) return prev;

    const acc = prev || {};
    const currentWeight = acc?.weight || 0;
    const currentReps = acc?.reps || 0;

    if (set.weight && set.weight >= currentWeight) {
      acc.weight = Number(set.weight);
      acc.reps = Number(set.reps!);
      acc.targetReps = Number(set.targetReps ?? set.maxReps ?? set.reps);
    } else if ((set.weight == currentWeight || !set.weight) && set.reps! > currentReps) {
      acc.reps = Number(set.reps!);
      acc.targetReps = Number(set.targetReps ?? set.maxReps ?? set.reps);
    }
    return acc;
  }, undefined) as LiftAttempt | undefined;

export const updateCurrentLifts = (
  currentLifts: Lifts,
  workout: ScheduledWorkout,
  setCurrentLifts: (newLifts: Lifts) => void
) => {
  setCurrentLifts({
    ...currentLifts,
    ...workout?.routine.reduce((acc, curr: RoutineEntry) => {
      if (curr.ignoreForTracking) return acc;

      const trackingAttempt = getTrackingAttemptFromSets(curr.sets);
      if (!trackingAttempt) return acc;

      const { weight, reps, targetReps } = trackingAttempt;
      const currentFails = currentLifts[curr.exercise as keyof typeof currentLifts]?.fails ?? 0;
      const isFail = targetReps && reps < targetReps;

      return { ...acc, [curr.exercise as string]: { weight, reps, targetReps, fails: isFail ? currentFails + 1 : 0 } };
    }, {}),
  });
};
