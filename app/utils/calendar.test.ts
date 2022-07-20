import { WeekDay } from '../domain/constants';
import { addDays, convertScheduleToWeekdays, getDateOfWeekday, getNextWorkoutDay } from './calendar';

test('getDateOfWeekday', () => {
  jest.useFakeTimers().setSystemTime(new Date('2022-05-09')); // Monday
  expect(getDateOfWeekday(WeekDay.Monday)).toEqual(new Date('2022-05-09'));
  expect(getDateOfWeekday(WeekDay.Tuesday, new Date('2022-05-09'))).toEqual(new Date('2022-05-10'));
});

test('addDays', () => {
  expect(addDays(new Date('2022-05-04'), 2)).toEqual(new Date('2022-05-06'));
});

test('convertScheduleToWeekdays', () => {
  expect(convertScheduleToWeekdays([0, 2, 4], WeekDay.Monday)).toEqual([WeekDay.Monday, WeekDay.Wednesday, WeekDay.Friday]);
  expect(convertScheduleToWeekdays([0, 2, 4, 5], WeekDay.Tuesday)).toEqual([
    WeekDay.Tuesday,
    WeekDay.Thursday,
    WeekDay.Saturday,
    WeekDay.Sunday,
  ]);
});

test('getNextWorkoutDay on a 3 day/week when week start is today', () => {
  jest.useFakeTimers().setSystemTime(new Date('2022-05-09'));
  const weeklySchedule = [0, 2, 4];
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday)).toEqual(new Date('2022-05-09'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-09'))).toEqual(new Date('2022-05-11'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-11'))).toEqual(new Date('2022-05-13'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-13'))).toEqual(new Date('2022-05-16'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-16'))).toEqual(new Date('2022-05-18'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-18'))).toEqual(new Date('2022-05-20'));
});

test('getNextWorkoutDay on a 3 day/week when week start was yesterday', () => {
  jest.useFakeTimers().setSystemTime(new Date('2022-05-11'));
  const weeklySchedule = [0, 2, 4];
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday)).toEqual(new Date('2022-05-11'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-11'))).toEqual(new Date('2022-05-13'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-13'))).toEqual(new Date('2022-05-16'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-16'))).toEqual(new Date('2022-05-18'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-18'))).toEqual(new Date('2022-05-20'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-20'))).toEqual(new Date('2022-05-23'));
});

test('BUG:: getNextWorkoutDay on a 3 day/week when week start in past', () => {
  jest.useFakeTimers().setSystemTime(new Date('2022-05-13'));
  const weeklySchedule = [0, 2, 4];
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday)).toEqual(new Date('2022-05-13'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-11'))).toEqual(new Date('2022-05-13'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-13'))).toEqual(new Date('2022-05-16'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-16'))).toEqual(new Date('2022-05-18'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-18'))).toEqual(new Date('2022-05-20'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-20'))).toEqual(new Date('2022-05-23'));
});

test('getNextWorkoutDay on a 4 day/week', () => {
  jest.useFakeTimers().setSystemTime(new Date('2022-05-09'));
  let weeklySchedule = [0, 2, 4, 5];
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday)).toEqual(new Date('2022-05-09'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-09'))).toEqual(new Date('2022-05-11'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-11'))).toEqual(new Date('2022-05-13'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-13'))).toEqual(new Date('2022-05-14'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-14'))).toEqual(new Date('2022-05-16'));

  weeklySchedule = [0, 1, 3, 4];
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday)).toEqual(new Date('2022-05-09'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-09'))).toEqual(new Date('2022-05-10'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-10'))).toEqual(new Date('2022-05-12'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-12'))).toEqual(new Date('2022-05-13'));
  expect(getNextWorkoutDay(weeklySchedule, WeekDay.Monday, new Date('2022-05-13'))).toEqual(new Date('2022-05-16'));
});
