import { Box, ScrollView, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { ExperienceLevel, Gender, UnitsType } from '../../domain/constants';
import { Exercise } from '../../domain/exercises';
import { getLiftStandards, getSpeedStandards, LiftMetrics, SpeedMetrics, StrengthMetrics } from '../../domain/standards';
import { formatDecimalMins, getWeightLabel } from '../../utils/measurements';
import { Table, TableHeader, TableRow } from '../Content';

export const StrengthStandardsComparison = ({
  gender,
  standards,
  unitsType,
}: {
  gender: Gender;
  standards: StrengthMetrics;
  unitsType: UnitsType;
}) => {
  const { t } = useTranslation();
  const weightLabel = getWeightLabel(unitsType);
  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator>
        <Box minWidth={700}>
          <Table>
            <TableHeader
              headings={[
                { content: 'Exercice', textAlign: 'left', sideBorder: true },
                { content: 'You', sideBorder: true },
                { content: 'Average Joe', sideBorder: true },
                { content: 'Novice', sideBorder: true },
                { content: 'Intermediate', sideBorder: true },
                { content: 'Advanced', sideBorder: true },
                { content: 'Vigilante' },
              ]}
            />
            {Object.keys(standards).map((exercise) => {
              const lift: LiftMetrics = standards[exercise as keyof typeof standards]!;
              const liftStandards = getLiftStandards(gender, exercise as Exercise);

              if (!liftStandards) {
                return;
              }

              const getCellContent = ({ oneRepMax, ratio, reps }: LiftMetrics, isStandard = false) => {
                if (isStandard) {
                  if (reps) {
                    return `${reps} reps`;
                  }
                  return `${oneRepMax}${weightLabel} or ${ratio}x`;
                }

                if (reps) {
                  return `${reps} reps`;
                }
                return oneRepMax ? `${oneRepMax}${weightLabel}/${ratio}x` : '-';
              };

              return (
                <TableRow
                  key={exercise}
                  values={[
                    { content: exercise, sideBorder: true },
                    { content: getCellContent(lift), textAlign: 'center', sideBorder: true },
                    {
                      content: getCellContent(liftStandards[ExperienceLevel.Beginner]!, true),
                      textAlign: 'center',
                      sideBorder: true,
                    },
                    {
                      content: getCellContent(liftStandards[ExperienceLevel.Novice]!, true),
                      textAlign: 'center',
                      sideBorder: true,
                    },
                    {
                      content: getCellContent(liftStandards[ExperienceLevel.Intermediate]!, true),
                      textAlign: 'center',
                      sideBorder: true,
                    },
                    {
                      content: getCellContent(liftStandards[ExperienceLevel.Advanced]!, true),
                      textAlign: 'center',
                      sideBorder: true,
                    },
                    {
                      content: getCellContent(liftStandards[ExperienceLevel.Vigilante]!, true),
                      textAlign: 'center',
                    },
                  ]}
                />
              );
            })}
          </Table>
        </Box>
      </ScrollView>
      <Text fontSize={'2xs'} italic>
        {t(
          'Note: Weights are calculated 1 Rep Maxes (using the average of multiple formulas - Epley, O&apos;Conner, Brzycki and more), ratios are multiples of 1RM to bodyweight. Standards are sourced from strengthlevel.com'
        )}
      </Text>
    </>
  );
};

export const SpeedtandardsComparison = ({ gender, standards }: { gender: Gender; standards: SpeedMetrics }) => {
  const { t } = useTranslation();
  const genderStandards = getSpeedStandards(gender);
  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator>
        <Box minWidth={575}>
          <Table>
            <TableHeader
              headings={[
                { content: 'Distance', textAlign: 'left', sideBorder: true },
                { content: 'You', sideBorder: true },
                { content: 'Average Joe', sideBorder: true },
                { content: 'Novice', sideBorder: true },
                { content: 'Intermediate', sideBorder: true },
                { content: 'Advanced', sideBorder: true },
                { content: 'Vigilante' },
              ]}
            />
            <TableRow
              values={[
                { content: 'Mile Run', sideBorder: true },
                {
                  content: standards.mileRun ? formatDecimalMins(standards.mileRun) : '-',
                  textAlign: 'center',
                  sideBorder: true,
                },
                {
                  content: formatDecimalMins(genderStandards[ExperienceLevel.Beginner]!.mileRun),
                  textAlign: 'center',
                  sideBorder: true,
                },
                {
                  content: formatDecimalMins(genderStandards[ExperienceLevel.Novice]!.mileRun),
                  textAlign: 'center',
                  sideBorder: true,
                },
                {
                  content: formatDecimalMins(genderStandards[ExperienceLevel.Intermediate]!.mileRun),
                  textAlign: 'center',
                  sideBorder: true,
                },
                {
                  content: formatDecimalMins(genderStandards[ExperienceLevel.Advanced]!.mileRun),
                  textAlign: 'center',
                  sideBorder: true,
                },
                {
                  content: formatDecimalMins(genderStandards[ExperienceLevel.Vigilante]!.mileRun),
                  textAlign: 'center',
                },
              ]}
            />
            <TableRow
              values={[
                { content: '5k Run', sideBorder: true },
                {
                  content: standards.fiveKmRun ? formatDecimalMins(standards.fiveKmRun) : '-',
                  textAlign: 'center',
                  sideBorder: true,
                },
                {
                  content: formatDecimalMins(genderStandards[ExperienceLevel.Beginner]!.fiveKmRun),
                  textAlign: 'center',
                  sideBorder: true,
                },
                {
                  content: formatDecimalMins(genderStandards[ExperienceLevel.Novice]!.fiveKmRun),
                  textAlign: 'center',
                  sideBorder: true,
                },
                {
                  content: formatDecimalMins(genderStandards[ExperienceLevel.Intermediate]!.fiveKmRun),
                  textAlign: 'center',
                  sideBorder: true,
                },
                {
                  content: formatDecimalMins(genderStandards[ExperienceLevel.Advanced]!.fiveKmRun),
                  textAlign: 'center',
                  sideBorder: true,
                },
                {
                  content: formatDecimalMins(genderStandards[ExperienceLevel.Vigilante]!.fiveKmRun),
                  textAlign: 'center',
                },
              ]}
            />
          </Table>
        </Box>
      </ScrollView>
      <Text fontSize={'2xs'} italic>
        {t('Note: Standards are sourced from runninglevel.com')}
      </Text>
    </>
  );
};
