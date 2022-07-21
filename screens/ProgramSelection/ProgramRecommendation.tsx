import { Box, Button, Container, Switch, Text } from 'native-base';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BulletPoint } from '../../components/Content';
import { FormCard, InlineField, Select } from '../../components/Forms';
import { LiftingTargets, SpeedTargets } from '../../components/Targets';
import { WorkoutRoutinesHScroll } from '../../components/Workouts/WorkoutRoutinesHScroll';
import { UnitsType } from '../../domain/constants';
import { getProgram, Program, programs } from '../../domain/programs';
import { SpeedMetrics, StrengthMetrics } from '../../domain/standards';
import { Trainee, TraineeMetrics } from '../../domain/trainee';

export const ProgramRecommendation = ({
  trainee,
  recommendedPrograms,
  speedTargets,
  liftTargets,
  bodyFatTarget,
  program,
  setProgram,
  traineeMetrics,
}: {
  trainee: Trainee;
  recommendedPrograms: { suitablePrograms: Program[]; bestMatch: string };
  speedTargets: SpeedMetrics;
  liftTargets: StrengthMetrics;
  bodyFatTarget?: number;
  program: string;
  setProgram: (value: string) => void;
  traineeMetrics: TraineeMetrics;
}) => {
  const { t } = useTranslation();
  const [showAllPrograms, setShowAllPrograms] = useState(false);

  const { preferredUnitsType } = trainee;
  const selectedProgram = getProgram(program);
  const selectedProgramWorkouts = selectedProgram?.workouts(traineeMetrics.strengthLevel);
  const selectedValue = program || recommendedPrograms.bestMatch;

  const programList = showAllPrograms ? programs : recommendedPrograms.suitablePrograms;

  useEffect(() => {
    setProgram(selectedValue);
  }, [program, recommendedPrograms]);

  return (
    <FormCard heading={'Training Recommendation'}>
      <Box marginBottom={3}>
        <Text>{t('You should focus on getting stronger and faster aiming for the following short term goals:')}</Text>
        {liftTargets && <LiftingTargets liftTargets={liftTargets} unitsType={UnitsType[preferredUnitsType]} />}
        {speedTargets && <SpeedTargets speedTargets={speedTargets} />}
        {bodyFatTarget && (
          <BulletPoint>
            <Text fontSize={'xs'}>{t('Get your body fat down to {{bodyFatTarget}}%', { bodyFatTarget })}</Text>
          </BulletPoint>
        )}
      </Box>

      <Text fontSize={'xs'} italic>
        {t(
          'The most recommended program to achieve the above is selected, but you can also chose one of the other programs that match your level of strength and preferences and you will still see good results.'
        )}
      </Text>
      <Box marginTop={3} marginBottom={6}>
        <Select
          border
          selectedValue={selectedValue}
          onValueChange={(value: string) => setProgram(value)}
          width={'100%'}
          textAlign={'left'}
          items={programList.map((program) => ({
            label: `${program.name}${program.id === recommendedPrograms.bestMatch ? ` (recommended)` : ''}`,
            value: program.id,
          }))}
        />
        <Container marginTop={2}>
          {!showAllPrograms ? (
            <Button size="xs" onPress={() => setShowAllPrograms(true)}>
              {t('Show all programs')}
            </Button>
          ) : (
            <Button size="xs" colorScheme={'secondary'} onPress={() => setShowAllPrograms(false)}>
              {t('Hide non recommended programs')}
            </Button>
          )}
        </Container>
      </Box>

      {selectedProgramWorkouts && <WorkoutRoutinesHScroll workouts={selectedProgramWorkouts} />}
      <Box marginTop={5}>
        <InlineField>
          <Text maxWidth={'85%'}>
            <Text bold>{t('End workouts with a speed or endurance finisher.')}</Text>{' '}
            {t(
              'In true vigilante fashion, workouts will randomly end with a bodyweight exercise for reps and/or time, some sort of carry for distance and/or time or a 1 mile or 5k run for time.'
            )}
          </Text>
          <Switch size="sm" isChecked />
        </InlineField>
      </Box>
    </FormCard>
  );
};
