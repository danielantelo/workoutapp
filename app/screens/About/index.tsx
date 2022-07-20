import { Center, Heading, HStack, Image, Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { BulletPoint, Paragraph } from '../../components/Content';
import { FitnessComponents } from './FitnessComponents';
import { DefaultLayout } from '../../components/Layouts';
import { programs } from '../../domain/programs';
import { Destination, ExternalLink, RoutingButton } from '../../utils/routing';

export default function About() {
  const { t } = useTranslation();
  return (
    <DefaultLayout showLogo>
      <Paragraph>
        {t(
          'The internet is polluted with good and bad training advice, it is overwhelming and hard to know how to get started and how to advance in your fitness journey. This app fixes that, it matches your current level of strength and fitness, along with your lifestyle and goals, to tried and tested training and nutrition protocols focused on the main components of physical fitness:'
        )}
      </Paragraph>
      <FitnessComponents />
      <Paragraph>
        {t(
          'The app has a database of the most popular stregnth and weight lifting programs available for free on the internet that have been proven to work over and over again. These include:'
        )}
      </Paragraph>
      {programs.map(({ id, name, link }) => (
        <BulletPoint key={id}>
          <ExternalLink to={link} text={name} />
        </BulletPoint>
      ))}
      <Paragraph>
        {t(
          'The app filters them down to your level, preferences and disponibility, and maps out a journey of progression with appropriate conditioning and nutrition added, taking away all the guess work and giving years worth of training to follow. It will set you short term goals for strength, endurance and speed, and as you progress the programming updates and sets you new and more challenging targets. It keeps you progressing in the most optimal way possible and you will see your performance and physique transform to that of a vigilante...'
        )}
      </Paragraph>
      <Center>
        <Image
          width={'100%'}
          height={185}
          resizeMode={'contain'}
          alt={'Welcome'}
          source={require('../../assets/comics/comic1.png')}
        />
      </Center>
      <Paragraph>
        {t(
          'Everything is tailored to your goals and preferences to ensure it is enjoyable and sustainable with the aim of getting you stronger, faster and leaner. Sustainability and consistency is the only recipe for success no matter the program you follow.'
        )}
      </Paragraph>
      <Heading size={'sm'}>{t('Example 1')}</Heading>
      <Paragraph>
        {t(
          'As a complete beginner who is overweight (200lbs/~30% BF), has never lifted before and has a sedentary job/lifestyle. Willing and able to workout at most 3 days a week for an hour and is happy keeping it simple with the main goal of being strong and lean, would go through a multi phase programming that cosists of:'
        )}
      </Paragraph>
      <BulletPoint>
        An initial goal to deadlift and squat bodyweight, bench 1 plate (60kg/135lbs) and do assisted pull ups with 50% bodyweight
        assist (all for 5 reps). To achieve this we follow the <Text bold>Greyskull LP</Text> routine. Nutrition would be focused
        around <Text bold>an aggresive cut</Text> (~600 calorie deficit = 2200calories) with ample protein (at least 1g per pound
        of lean bodyweight = 140g).
      </BulletPoint>
      <BulletPoint>
        With the initial goals met the programming will update and set you new targets of Bench Pressing bodyweight, Overhead
        pressing 70% of bodyweight, Squating 2 plates (100kg/225lbs) and Deadlifting 1.5x bodyweight, as well as doing unassissted
        pull ups. The weights will deload and the workout routine will switch to{' '}
        <Text bold>AthleanX&apos;s Perfect Total Body</Text>. This adds some more volume and improves work capacity and endurance.
        Nutrition would stay the same unless you have not lost any weight in over 2 weeks, at which point an{' '}
        <Text bold>additional 200 calorie deficit</Text> is applied.
      </BulletPoint>
      <BulletPoint>
        With the second set of goals met, things will start to get a bit more challenging. The new targets are now to bench press
        2 plates (100kg/225lbs), overhead press 1 plate (60kg/135lbs) and deadlift 3 plates (140kg/315lbs). If progress is still
        strong on the AthleanX routine you will remain on it, once you start stalling the app will suggest a deload and switching
        back to <Text bold>Greyskull LP</Text> in order to make use of double progression focusing on improving those rep maxes on
        previously done weights for new strength gains. Nutrition <Text bold>moves to maintenance calories</Text> to aid meeting
        the goals and a metabolic reset from being on a deficit for an extended period of time. You should experience a
        recomposition effect over the coming weeks.
      </BulletPoint>
      <BulletPoint>
        Moving into stronger intermediate territory, the programming will once again update setting you even more challenging
        targets along the lines of Squatting 3 plates (140kg/315lbs), Overhead Pressing your bodyweight, Bench Pressin
        (120kg/265lbs) and Deadlifting 4 plates (180kg/405lbs). To achieve these, programming may change to{' '}
        <Text bold>Madcow&apos;s 5x5</Text> potentially followed by various 3-day <Text bold>Jim Wendler 5/3/1</Text> templates
        with the accessory work being tailored your goals in terms of workout duration and weakness areas you want to work on.
        Nutrition will depend on the new body fat %. You get to chose to get leaner with a moderate 400 calorie deficit or do a
        lean bulk with a small surplus of 300 calories. The app will usually recommend a <Text bold>moderate cut</Text> if abs are
        still not visible and one of your goals is leanness.
      </BulletPoint>
      <Paragraph>
        In all phases, each workout would end with either a mile run or a random bodyweight endurance exercise (pushups, inverted
        rows, jump squats or muscle ups) with a random aim (could be reps for time, reps within a certain time, pyramid reps or
        reps every minute for 10 minutes). These will also have goals set and tracked such as mile run time, max push ups in a
        set, etc.
      </Paragraph>
      <Paragraph>
        <Center>
          <HStack width={'100%'}>
            <Image
              width={'50%'}
              height={185}
              resizeMode={'contain'}
              alt={'Welcome'}
              source={require('../../assets/comics/comic2.png')}
            />
            <Image
              width={'50%'}
              height={185}
              resizeMode={'contain'}
              alt={'Welcome'}
              source={require('../../assets/comics/comic3.jpeg')}
            />
          </HStack>
        </Center>
      </Paragraph>
      <Heading size={'sm'}>{t('Example 2')}</Heading>
      <Paragraph>
        As an individual in decent shape, who has been lifting for some time and can already squat and bench their bodyweight for
        reps and can do pull ups, looking to train 5 or 6 days a week focusing on aesthetics would go through a multi phase
        programming cosisting of:
      </Paragraph>
      <BulletPoint>
        An initial goal to Bench Press 2 plates (100kg/225lbs), Overhead Press 1 plate (60kg/135lbs) and Deadlift 3 plates
        (140kg/315lbs). To achieve this you follow <Text bold>PHUL: Power Hypertrophy Upper Lower</Text> working out 4 days a
        week.
      </BulletPoint>

      <RoutingButton to={Destination.GetStarted}>Get Started</RoutingButton>
    </DefaultLayout>
  );
}
