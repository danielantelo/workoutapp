import { Center, Container, Image, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { DefaultLayout } from '../../components/Layouts';
import { Destination, Link, RoutingButton } from '../../utils/routing';

const Headline = ({ text }: { text: string }) => (
  <Text fontSize={'2xl'} marginBottom={2} fontWeight={500}>
    {text}
  </Text>
);

export default function Welcome() {
  const { t } = useTranslation();
  return (
    <DefaultLayout showLogo backgroundColor={'secondary.100'}>
      <Center paddingTop={5}>
        <Text textAlign={'center'} fontSize={'lg'} marginBottom={5}>
          {t('The simple, enjoyable and sustainable approach to training.')}
        </Text>
        <Headline text={t('Get Stronger,')} />
        <Headline text={t('Get Faster,')} />
        <Headline text={t('Get Leaner.')} />
      </Center>
      <Center paddingY={5}>
        <Image width={'100%'} height={320} resizeMode={'contain'} alt={'Welcome'} source={require(`./welcome2.png`)} />
      </Center>
      <Center marginY={5}>
        <Text textAlign={'center'}>
          <>
            {t(
              'This app matches your current level of strength and fitness to tried and tested training and nutrition regimes that are sustainable for your lifestyle and preferences. It sets you short term goals and as you progress the programming updates with new targets and appropriate routines. It keeps you progressing in the most optimal way possible and you will see your physique and performance transform to that of a vigilante...'
            )}
            <Container paddingLeft={1}>
              <Link to={Destination.About} label={t('Tell me more')} />
            </Container>
          </>
        </Text>
      </Center>
      <RoutingButton to={Destination.GetStarted}>{t('Get Started')}</RoutingButton>
    </DefaultLayout>
  );
}
