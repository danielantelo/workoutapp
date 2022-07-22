import { Checkbox, Input, Text } from 'native-base';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import debounce from 'lodash.debounce';

import { TableRow } from '../../../components/Content';
import { RoutineEntry, RoutineSet } from '../../../domain/programs';
import { SetIdentifier } from './components/SetIdentifier';
import { getPreviousLabel, getTargetRepsPlaceholder } from './helpers';
import { SetProps } from './interfaces';

export const Sets = ({
  exerciseId,
  routine,
  getRecommendedWeight,
  onSetComplete,
  getPreviousLift,
  onChangeSetReps,
  onChangeSetWeight,
}: { exerciseId: number; routine: RoutineEntry } & SetProps) => {
  const { t } = useTranslation();
  const [sets, setSets] = useState<RoutineSet[]>(routine.sets);

  const onUpdate = (setId: number, attr: 'weight' | 'reps', value: any) => {
    const newSets = [...sets];
    newSets[setId][attr] = value;
    setSets(newSets);

    // we debounce store updates to avoid too many global re-renders
    const debouncedSave = debounce(() => {
      attr === 'weight' ? onChangeSetWeight(exerciseId, setId, Number(value)) : onChangeSetReps(exerciseId, setId, Number(value));
    }, 1500);
    debouncedSave();
  };

  return (
    <>
      {sets.map((entry: RoutineSet, setId: number) => (
        <TableRow
          key={`${exerciseId}-set-${setId}`}
          values={[
            { width: 10, content: <SetIdentifier setId={setId} /> },
            { content: getPreviousLabel(getPreviousLift)(exerciseId, setId), textAlign: 'center' },
            ...(!routine.bodyweight
              ? [
                  {
                    content: (
                      <Input
                        keyboardType={'decimal-pad'}
                        value={entry.weight?.toString() || ''}
                        textAlign={'center'}
                        onChangeText={(value: string) => onUpdate(setId, 'weight', value)}
                        placeholder={getRecommendedWeight(exerciseId, setId)?.toString()}
                        marginX={1}
                      />
                    ),
                    textAlign: 'center',
                  },
                ]
              : []),
            {
              content: (
                <Input
                  keyboardType={'number-pad'}
                  value={entry.reps?.toString() || ''}
                  textAlign={'center'}
                  onChangeText={(value: string) => onUpdate(setId, 'reps', Number(value))}
                  placeholder={getTargetRepsPlaceholder(entry)}
                  marginX={1}
                />
              ),
              textAlign: 'center',
            },
            {
              textAlign: 'right',
              content: (
                <Checkbox
                  marginLeft={'auto'}
                  isChecked={entry.status === 'done'}
                  value={'done'}
                  onChange={(checked: boolean) => checked && onSetComplete(exerciseId, setId, false)}
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
