import { Input, Text } from 'native-base';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { UnitsType } from '../../domain/constants';
import { Exercise } from '../../domain/exercises';
import { calculateStrengthStandards, LiftMetrics, standardExercises } from '../../domain/standards';
import { LiftAttempt, Lifts } from '../../domain/trainee';
import { getWeightLabel } from '../../utils/measurements';
import { Table, TableCell, TableHeader, TableRow } from '../Content';

export const LiftingStandardsCalculator = ({
  unitsType,
  weight,
  lifts = {},
  setLifts,
}: {
  unitsType: UnitsType;
  weight: number;
  lifts: Lifts;
  setLifts: (newLifts: Lifts) => void;
}) => {
  const { t } = useTranslation();

  const standards = useMemo(() => weight && lifts && calculateStrengthStandards(weight, lifts), [lifts, weight]);

  const onChange = (lift: Exercise, attr: keyof LiftAttempt, value: number) => {
    setLifts({
      ...lifts,
      [lift]: { ...lifts[lift as Exercise], [attr]: value },
    });
  };

  const weightLabel = getWeightLabel(unitsType);
  const headings = [
    { content: 'Exercise', textAlign: 'left' },
    { content: `Weight (${weightLabel})` },
    { content: 'Reps' },
    { content: '1RM', textAlign: 'right' },
    { content: 'Ratio', textAlign: 'right' },
  ];
  const cellWidth = `${100 / headings.length}%`;

  return (
    <>
      <Table>
        <TableHeader headings={headings} />
        {standardExercises.map((lift) => {
          const calculated: LiftMetrics = standards?.[lift as keyof typeof standards];
          return (
            <TableRow key={lift}>
              <TableCell width={cellWidth} content={lift} />
              <TableCell
                width={cellWidth}
                content={
                  <Input
                    textAlign={'right'}
                    width={'95%'}
                    keyboardType={'decimal-pad'}
                    value={lifts?.[lift as Exercise]?.weight?.toString() || ''}
                    onChangeText={(value: string) => onChange(lift, 'weight', Number(value))}
                  />
                }
              />
              <TableCell
                width={cellWidth}
                content={
                  <Input
                    textAlign={'right'}
                    width={'95%'}
                    keyboardType={'number-pad'}
                    value={lifts?.[lift as Exercise]?.reps?.toString() || ''}
                    onChangeText={(value: string) => onChange(lift, 'reps', Number(value))}
                  />
                }
              />
              <TableCell
                width={cellWidth}
                textAlign={'right'}
                content={calculated?.oneRepMax ? `${calculated.oneRepMax}${weightLabel}` : ''}
              />
              <TableCell width={cellWidth} textAlign={'right'} content={calculated?.ratio ? `${calculated.ratio}x` : ''} />
            </TableRow>
          );
        })}
      </Table>
      <Text fontSize={'2xs'} italic>
        {t(
          "Rep Maxes are calculated using the average of multiple formulas (Epley, O'Conner, Brzycki and more), ratios are multiples of 1RM to bodyweight"
        )}
      </Text>
    </>
  );
};
