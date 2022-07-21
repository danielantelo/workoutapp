import { Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { EnumSelect, FormCard, InlineField } from '../../components/Forms';
import { UnitsType } from '../../domain/constants';
import { Trainee, UpdateTraineeFn } from '../../domain/trainee';

export const Configuration = ({ trainee, updateTrainee }: { trainee: Trainee; updateTrainee: UpdateTraineeFn }) => {
  const { t } = useTranslation();
  const { preferredUnitsType } = trainee;
  return (
    <FormCard heading={t('Configuration')}>
      <InlineField>
        <Text>{t('Units')}</Text>
        <EnumSelect
          Enum={UnitsType}
          selectedValue={preferredUnitsType}
          onValueChange={(value: keyof typeof UnitsType) => updateTrainee('preferredUnitsType', value)}
        />
      </InlineField>
    </FormCard>
  );
};
