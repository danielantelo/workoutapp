export interface SetProps {
  getRecommendedWeight: (exerciseId: number, setId: number, warmup?: boolean) => number | undefined;
  onChangeSetWeight: (exerciseId: number, setId: number, value: number) => void;
  onChangeSetReps: (exerciseId: number, setId: number, value: number) => void;
  onSetComplete: (exerciseId: number, setId: number, isWarmup: boolean) => void;
  getPreviousLift: (
    exerciseId: number,
    setId: number,
    isWarmup: boolean
  ) => { weight: number | undefined; reps: number } | undefined;
}
