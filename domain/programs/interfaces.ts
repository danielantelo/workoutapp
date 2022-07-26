import { ExperienceLevel, Gender, Goal } from '../constants';
import { Exercise, ExerciseType } from '../exercises';
import { LiftMetrics } from '../standards';

export interface RoutineSet {
  targetReps?: number;
  reps?: number;
  minReps?: number;
  maxReps?: number;
  AMRAP?: boolean;
  weight?: number;
  percentage?: number;
  ratio?: number;
  status?: 'pending' | 'done';
  basis?: keyof LiftMetrics | 'firstSet';
  ignoreForTracking?: boolean;
}
export interface RoutineEntry {
  exercise: Exercise | Exercise[];
  type?: ExerciseType;
  video?: string;
  note?: string;
  warmup?: RoutineSet[];
  sets: RoutineSet[];
  rest?: number;
  optional?: boolean;
  bodyweight?: boolean;
  ignoreForTracking?: boolean;
  startingWeight?: keyof LiftMetrics;
}
export interface Workout {
  name: string;
  routine: RoutineEntry[];
  video?: string;
}
export interface Program {
  id: string;
  name: string;
  author?: string;
  link?: string;
  level: ExperienceLevel[];
  gender: Gender[];
  goal: Goal[];
  daysPerWeek: number;
  weeklySchedule: number[];
  workoutDuration: number;
  duration: number;
  video?: string;
  workouts: (level?: ExperienceLevel) => Workout[];
}
