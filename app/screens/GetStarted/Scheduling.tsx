import { Alert, ArrowDownIcon, ArrowUpIcon, Box, HStack, Input, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { EnumMultiSelect, EnumSelect, FormCard, InlineField, Select, StackedField } from '../../components/Forms';
import { UnitsType, WeekDay } from '../../domain/constants';
import { Trainee, UpdateTraineeFn } from '../../domain/trainee';
import { getWeightLabel } from '../../utils/measurements';

export const Scheduling = ({ trainee, updateTrainee }: { trainee: Trainee; updateTrainee: UpdateTraineeFn }) => {
  const { t } = useTranslation();
  const { preferredWeekStart, preferredNumberOfWorkoutsPerWeek, preferredWorkoutDuration, preferredWorkoutDays } = trainee;

  const weightUnitLabel = getWeightLabel(UnitsType[trainee.preferredUnitsType]);
  const percentLabel = '%';

  return (
    <FormCard heading={t('Scheduling & Progression')}>
      <Alert status={'info'} colorScheme={'info'} marginBottom={2}>
        <HStack flexShrink={1} space={2}>
          <Text>
            {t(
              'It is important you commit to something sustainable, more is not always better. Success comes from long term consistency.'
            )}
          </Text>
        </HStack>
      </Alert>
      <InlineField>
        <Text>{t('Workouts per week')}</Text>
        <Select
          selectedValue={preferredNumberOfWorkoutsPerWeek}
          onValueChange={(value: string) => updateTrainee('preferredNumberOfWorkoutsPerWeek', Number(value))}
          items={[
            { label: '2 at most', value: 2 },
            { label: '3 at most', value: 3 },
            { label: '4 at most', value: 4 },
            { label: '5 at most', value: 5 },
            { label: '6 at most', value: 6 },
          ]}
        />
      </InlineField>
      <InlineField>
        <Text>{t('Workout duration')}</Text>
        <Select
          selectedValue={preferredWorkoutDuration}
          onValueChange={(value: string) => updateTrainee('preferredWorkoutDuration', Number(value))}
          items={[
            { label: '30 min at most', value: 30 },
            { label: '45 min at most', value: 45 },
            { label: '60 min at most', value: 60 },
            { label: '75 min at most', value: 75 },
            { label: '90 min at most', value: 90 },
          ]}
        />
      </InlineField>
      <InlineField>
        <Text>{t('Start week on')}</Text>
        <EnumSelect
          Enum={WeekDay}
          selectedValue={preferredWeekStart}
          onValueChange={(value: keyof typeof WeekDay) => updateTrainee('preferredWeekStart', value)}
        />
      </InlineField>
      <StackedField>
        <Text>{t('Days you can train')}</Text>
        <EnumMultiSelect
          Enum={WeekDay}
          accessibilityLabel={t('Select days you can train')}
          selectedValues={preferredWorkoutDays}
          onChange={(newValues: Array<keyof typeof WeekDay>) => updateTrainee('preferredWorkoutDays', newValues)}
        />
      </StackedField>
      <Box paddingTop={5}>
        <Text>
          {t('On Success')} <ArrowUpIcon />
        </Text>
        <InlineField>
          <Text>{t('Barbell Increment')}</Text>
          <HStack space={1} alignItems={'center'}>
            <Input
              textAlign={'right'}
              width={50}
              keyboardType={'decimal-pad'}
              value={trainee.preferredBarbellIncrement?.toString() || ''}
              onChangeText={(value: string) => updateTrainee('preferredBarbellIncrement', value)}
            />
            <Text>{weightUnitLabel}</Text>
          </HStack>
        </InlineField>
        <InlineField>
          <Text>{t('Dumbbell Increment')}</Text>
          <HStack space={1} alignItems={'center'}>
            <Input
              textAlign={'right'}
              width={50}
              keyboardType={'decimal-pad'}
              value={trainee.preferredDumbbellIncrement?.toString() || ''}
              onChangeText={(value: string) => updateTrainee('preferredDumbbellIncrement', value)}
            />
            <Text>{weightUnitLabel}</Text>
          </HStack>
        </InlineField>
      </Box>
      <Box paddingY={1}>
        <Text>
          {t('On Failure')} <ArrowDownIcon />
        </Text>
        <InlineField>
          <Text>{t('Barbell Decrement')}</Text>
          <HStack space={1} alignItems={'center'}>
            <Input
              textAlign={'right'}
              width={50}
              keyboardType={'numeric'}
              value={trainee.preferredBarbellDecrement?.toString()}
              onChangeText={(value: string) => updateTrainee('preferredBarbellDecrement', Number(value))}
            />
            <Text>{percentLabel}</Text>
          </HStack>
        </InlineField>
        <InlineField>
          <Text>{t('Dumbbell Decrement')}</Text>
          <HStack space={1} alignItems={'center'}>
            <Input
              textAlign={'right'}
              width={50}
              keyboardType={'numeric'}
              value={trainee.preferredDumbbellDecrement?.toString()}
              onChangeText={(value: string) => updateTrainee('preferredDumbbellDecrement', Number(value))}
            />
            <Text>{percentLabel}</Text>
          </HStack>
        </InlineField>
      </Box>
    </FormCard>
  );
};
