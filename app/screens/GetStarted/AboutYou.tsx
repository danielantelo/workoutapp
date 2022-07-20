import { Input, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { EnumSelect, FormCard, InlineField } from '../../components/Forms';
import { BodyFatSelector } from '../../components/Forms/BodyFatSelector';
import { HeightInput } from '../../components/Forms/HeightInput';
import { Gender, UnitsType } from '../../domain/constants';
import { Trainee, UpdateTraineeFn } from '../../domain/trainee';
import { getCircumferenceLabel, getHeightLabel, getWeightLabel } from '../../utils/measurements';

export const AboutYou = ({ trainee, updateTrainee }: { trainee: Trainee; updateTrainee: UpdateTraineeFn }) => {
  const { t } = useTranslation();
  const { age, weight, height, waist, gender, bodyFat, preferredUnitsType } = trainee;
  const unitsType = UnitsType[preferredUnitsType];
  return (
    <FormCard heading={t('About You')}>
      <InlineField>
        <Text>{t('Gender')}</Text>
        <EnumSelect
          Enum={Gender}
          selectedValue={gender}
          onValueChange={(value: keyof typeof Gender) => updateTrainee('gender', value)}
        />
      </InlineField>
      <InlineField>
        <Text>{t('Your age')}</Text>
        <Input
          textAlign={'right'}
          width={50}
          keyboardType={'number-pad'}
          value={age?.toString() || ''}
          onChangeText={(value: string) => updateTrainee('age', Number(value))}
        />
      </InlineField>
      <InlineField>
        <Text>{t('Your height ({{unitLabel}})', { unitLabel: getHeightLabel(unitsType) })}</Text>
        <HeightInput unitsType={unitsType} height={height} setHeight={(value: number) => updateTrainee('height', value)} />
      </InlineField>
      <InlineField>
        <Text>{t('Your current weight ({{unitLabel}})', { unitLabel: getWeightLabel(unitsType) })}</Text>
        <Input
          textAlign={'right'}
          width={50}
          keyboardType={'number-pad'}
          value={weight?.toString() || ''}
          onChangeText={(value: string) => updateTrainee('weight', Number(value))}
        />
      </InlineField>
      <InlineField>
        <Text>{t('Your waist circumference ({{unitLabel}})', { unitLabel: getCircumferenceLabel(unitsType) })}</Text>
        <Input
          textAlign={'right'}
          width={50}
          keyboardType={'number-pad'}
          value={waist?.toString() || ''}
          onChangeText={(value: string) => updateTrainee('waist', Number(value))}
        />
      </InlineField>
      <InlineField allowWrap>
        <Text>{t('Bodyfat (%)')}</Text>
        <BodyFatSelector
          gender={gender}
          bodyFat={bodyFat}
          setBodyFat={(value: number) => updateTrainee('bodyFat', Number(value))}
        />
      </InlineField>
    </FormCard>
  );
};
