import { HStack, Input, Text } from 'native-base';
import { useEffect, useState } from 'react';

import { UnitsType, feetAndInchesToInches, inchestToFeetAndInches } from '../../../fitness-tools';

export const HeightInput = ({
  height,
  unitsType,
  setHeight,
}: {
  height: number;
  unitsType: UnitsType;
  setHeight: (newvalue: number) => void;
}) => {
  return (
    <>
      {unitsType === UnitsType.Imperial ? (
        <ImperialHeightInput height={height} setHeight={setHeight} />
      ) : (
        <Input
          textAlign={'right'}
          width={50}
          keyboardType={'number-pad'}
          value={height?.toString() || ''}
          onChangeText={(value: string) => setHeight(Number(value))}
        />
      )}
    </>
  );
};

export const ImperialHeightInput = ({ height, setHeight }: { height: number; setHeight: (newvalue: number) => void }) => {
  const [feet, setFeet] = useState<number>();
  const [inches, setInches] = useState<number>();

  const onSetHeight = () => {
    if (feet && inches) {
      const heightInInches = feetAndInchesToInches(feet, inches);
      setHeight(heightInInches);
    }
  };

  useEffect(() => {
    if (height) {
      const [feet, inches] = inchestToFeetAndInches(height);
      setFeet(feet);
      setInches(inches);
    }
  }, []);

  useEffect(() => {
    onSetHeight();
  }, [feet, inches]);

  return (
    <HStack alignItems={'center'}>
      <Input
        textAlign={'right'}
        width={50}
        keyboardType={'number-pad'}
        value={feet?.toString() || ''}
        marginX={1}
        onChangeText={(value: string) => {
          setFeet(Number(value));
        }}
      />
      <Text>{'ft'}</Text>
      <Input
        textAlign={'right'}
        width={50}
        keyboardType={'number-pad'}
        value={inches?.toString() || ''}
        marginX={1}
        onChangeText={(value: string) => {
          setInches(Number(value));
        }}
      />
      <Text>{'in'}</Text>
    </HStack>
  );
};
