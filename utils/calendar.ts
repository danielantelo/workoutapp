import { WeekDay } from '../domain/constants';

// Hard coded week day array as internally represented by javascript, sunday - saturday
const DAYS = [
  WeekDay.Sunday,
  WeekDay.Monday,
  WeekDay.Tuesday,
  WeekDay.Wednesday,
  WeekDay.Thursday,
  WeekDay.Friday,
  WeekDay.Saturday,
];

export const getDateOfWeekday = (dayName: WeekDay, date = new Date(), allowPast = true): Date => {
  const now = date.getDay();
  // The index for the day you want
  const day = DAYS.findIndex((item: string) => dayName.toLowerCase() === item.toLowerCase());
  // diff between desired day of week and now
  let diff = day - now;
  diff = diff < 0 && !allowPast ? diff + 7 : diff;
  // Get the timestamp for the desired day, negative if it has already passed
  const nextDayTimestamp = date.getTime() + 1000 * 60 * 60 * 24 * diff;

  return new Date(nextDayTimestamp);
};

export const addDays = (date: Date, days: number) => {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
};

export const isDateWeekend = (date = new Date()): boolean => {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 6 || dayOfWeek === 0; // 6 = Saturday, 0 = Sunday
};

export const isDateConsecutiveDay = (date = new Date()): boolean => {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 4 || dayOfWeek === 5; // 4 = Thursday, 5 = Friday
};

const isDateInPast = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date.getTime() < today.getTime();
};

export const convertScheduleToWeekdays = (schedule: number[], weekStart: WeekDay): WeekDay[] => {
  let map: { found: boolean; parts: WeekDay[][] } = { found: false, parts: [[], []] };
  map = DAYS.reduce((acc, current) => {
    if (current === weekStart) acc.found = true;
    acc.found ? acc.parts[1].push(current) : acc.parts[0].push(current);
    return acc;
  }, map);

  const week = [...map.parts[1], ...map.parts[0]];
  return schedule.map((day) => week[day]);
};

export const getNextScheduledWeekday = (weeklySchedule: WeekDay[], previousWorkoutDate: Date): WeekDay => {
  const previousWorkoutDay = DAYS[previousWorkoutDate.getDay()];
  const previousWorkoutDayIndex = weeklySchedule.findIndex(
    (item: string) => previousWorkoutDay.toLowerCase() === item.toLowerCase()
  );
  const nextWorkoutIndex = previousWorkoutDayIndex + 1 > weeklySchedule.length - 1 ? 0 : previousWorkoutDayIndex + 1;
  return weeklySchedule[nextWorkoutIndex];
};

export const getNextWorkoutDay = (weeklySchedule: number[], weekStart: WeekDay, previousWorkoutDate?: Date): Date => {
  if (!previousWorkoutDate) {
    let proposedDate = getDateOfWeekday(weekStart);
    while (isDateInPast(proposedDate)) {
      proposedDate = getNextWorkoutDay(weeklySchedule, weekStart, proposedDate);
    }
    return proposedDate;
  }

  const schedule = convertScheduleToWeekdays(weeklySchedule, weekStart);
  const scheduleDay = getNextScheduledWeekday(schedule, previousWorkoutDate);
  return getDateOfWeekday(scheduleDay, previousWorkoutDate, false);
};
