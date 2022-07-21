import { RoutineSet } from '../../../domain/programs';

export const getTargetRepsPlaceholder = (entry: RoutineSet): string => {
  let placeholder = '';
  if (entry.minReps) {
    placeholder = `${entry.minReps}-${entry.maxReps}`;
  } else if (entry.targetReps) {
    placeholder = `${entry.targetReps}`;
  } else if (entry.reps) {
    placeholder = `${entry.reps}`;
  }

  if (entry.AMRAP) placeholder = `${placeholder}+`;

  return placeholder;
};

export const getPreviousLabel =
  (
    getPreviousLift: (
      exerciseId: number,
      setId: number,
      isWarmup: boolean
    ) => { weight: number | undefined; reps: number } | undefined
  ) =>
  (exerciseId: number, setId: number, isWarmup = false) => {
    const prev = getPreviousLift(exerciseId, setId, isWarmup);
    if (prev && prev.weight) {
      return `${prev?.weight}x${prev?.reps}`;
    } else if (prev && prev.reps) {
      return `${prev?.reps}`;
    }
    return '-';
  };
