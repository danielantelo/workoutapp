import { ExperienceLevel, Gender } from '../constants';
import { getSpeedLevel } from './speed';

test('getRunStandards', () => {
  expect(getSpeedLevel(Gender.Male, 5, 15)).toEqual(ExperienceLevel.Vigilante);
  expect(getSpeedLevel(Gender.Male, 10, 30)).toEqual(ExperienceLevel.Beginner);
  expect(getSpeedLevel(Gender.Male, 7.5, 26)).toEqual(ExperienceLevel.Novice);
});
