import { Checkbox, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { TableRow } from '../../../components/Content';
import { RoutineEntry, RoutineSet } from '../../../domain/programs';
import { SetIdentifier } from './components/SetIdentifier';
import { getPreviousLabel } from './helpers';
import { SetProps } from './interfaces';

export const Warmups = ({
  exerciseId,
  routine,
  getRecommendedWeight,
  onSetComplete,
  getPreviousLift,
}: { exerciseId: number; routine: RoutineEntry } & SetProps) => {
  const { t } = useTranslation();
  return (
    <>
      {routine.warmup?.map((entry: RoutineSet, setId: number) => (
        <TableRow
          key={`${exerciseId}-warmup-${setId}`}
          values={[
            { width: 10, content: <SetIdentifier warmup setId={setId} /> },
            { content: getPreviousLabel(getPreviousLift)(exerciseId, setId, true), textAlign: 'center' },
            ...(!routine.bodyweight ? [{ content: getRecommendedWeight(exerciseId, setId, true), textAlign: 'center' }] : []),
            { content: entry.reps, textAlign: 'center' },
            {
              textAlign: 'right',
              content: (
                <Checkbox
                  marginLeft={'auto'}
                  isChecked={entry.status === 'done'}
                  value={'done'}
                  onChange={(checked: boolean) => checked && onSetComplete(exerciseId, setId, true)}
                >
                  <Text display={'none'}>{t('Done')}</Text>
                </Checkbox>
              ),
            },
          ]}
        />
      ))}
    </>
  );
};
