import { Text, HStack, Image, VStack } from 'native-base';
import { useTranslation } from 'react-i18next';

export const FitnessComponents = () => {
  const { t } = useTranslation();
  return (
    <VStack>
      <HStack marginBottom={3} alignItems={'center'}>
        <Image
          marginRight={3}
          width={50}
          height={50}
          resizeMode={'contain'}
          alt={t('Strength')}
          source={require('./strength-icon.png')}
        />
        <Text>
          <Text fontSize={'xs'} bold>
            {t('Strength:')}{' '}
          </Text>
          <Text fontSize={'xs'}>
            {t(
              'This is the “power” essential for vigilantes fighting crime! Without muscular strength, your body would be weak and unable to lift or carry heavy objects. The way to increase strength is to train with heavy weights, working in the 3 - 6 and the 8 - 12 rep ranges. We measure and track your strength by calculating your bodyweight to weight lifted ratio and one rep max (1RM).'
            )}
          </Text>
        </Text>
      </HStack>
      <HStack marginBottom={3} alignItems={'center'}>
        <Image
          marginRight={3}
          width={50}
          height={50}
          resizeMode={'contain'}
          alt={t('Endurance')}
          source={require('./cardio-icon.png')}
        />
        <Text>
          <Text fontSize={'xs'} bold>
            {t('Endurance:')}{' '}
          </Text>
          <Text fontSize={'xs'}>
            {t(
              'Endurance is critical for those long battles! It is the ability of your muscles and cardiovascular system to perform for extended periods of time. The way to increase endurance is to train in high rep ranges and improve sustaining physical exertion for extended periods of time. We measure and track your endurance through the number of push ups, pull ups and squat jumps you can do, the distance you can carry heavy objects and your 5k run time.'
            )}
          </Text>
        </Text>
      </HStack>
      <HStack marginBottom={3} alignItems={'center'}>
        <Image
          marginRight={3}
          width={50}
          height={50}
          resizeMode={'contain'}
          alt={t('speed')}
          source={require('./speed-icon.png')}
        />
        <Text>
          <Text fontSize={'xs'} bold>
            {t('Speed:')}{' '}
          </Text>
          <Text fontSize={'xs'}>
            {t(
              "Can't let those villains get away! Speed is all about how fast you can move. We measure and track your speed by practicing and testing your mile run time."
            )}
          </Text>
        </Text>
      </HStack>
    </VStack>
  );
};
