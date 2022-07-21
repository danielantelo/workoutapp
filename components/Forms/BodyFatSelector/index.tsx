import { HStack, Image, Radio, VStack } from 'native-base';
import { ImageSourcePropType } from 'react-native';
import { Gender } from '../../../domain/constants';

const BodyFatImageMap: {
  [key in Gender]: { [key: number]: ImageSourcePropType };
} = {
  [Gender.Male]: {
    10: require('./Male10.png'),
    15: require('./Male15.png'),
    20: require('./Male20.png'),
    25: require('./Male25.png'),
    30: require('./Male30.png'),
  },
  [Gender.Female]: {
    10: require('./Female10.png'),
    15: require('./Female15.png'),
    20: require('./Female20.png'),
    25: require('./Female25.png'),
    30: require('./Female30.png'),
  },
};

export const BodyFatSelector = ({
  gender,
  bodyFat,
  setBodyFat,
}: {
  gender: keyof typeof Gender;
  bodyFat: number;
  setBodyFat: (newvalue: number) => void;
}) => {
  return (
    <Radio.Group
      name="bodyFat"
      accessibilityLabel="select your approximate bodyfat percentage"
      value={bodyFat?.toString()}
      onChange={(value) => {
        setBodyFat(Number(value));
      }}
    >
      {gender && (
        <HStack alignItems={'center'} space={1}>
          {['10', '15', '20', '25', '30'].map((percent) => (
            <VStack key={`${gender}-${percent}`}>
              <Image
                size={'sm'}
                resizeMode={'contain'}
                alt={'Welcome'}
                source={BodyFatImageMap[gender as keyof typeof Gender][Number(percent)]}
              />
              <Radio value={percent} my={1} size={'sm'}>
                {`${percent}%`}
              </Radio>
            </VStack>
          ))}
        </HStack>
      )}
    </Radio.Group>
  );
};
