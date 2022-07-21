import { Button } from 'native-base';
import { useTranslation } from 'react-i18next';

import { DefaultLayout } from '../../components/Layouts';
import { Loader } from '../../components/Loader';
import { useTrainee } from '../../domain/trainee';
import { Destination, RoutingButton } from '../../utils/routing';

import { AboutYou } from './AboutYou';
import { Activity } from './Activity';
import { Configuration } from './Configuration';
import { Nutrition } from './Nutrition';
import { Preferences } from './Preferences';
import { Scheduling } from './Scheduling';

export default function GetStarted() {
  const { t } = useTranslation();
  const { trainee, traineeLoaded, updateTrainee } = useTrainee();

  if (!traineeLoaded) {
    return <Loader />;
  }

  const { age, weight, height, bodyFat, primaryGoal, secondaryGoal } = trainee!;
  const enableContinueButton = !!age && !!bodyFat && !!weight && !!height && !!primaryGoal && !!secondaryGoal;

  return (
    <DefaultLayout>
      <Configuration trainee={trainee!} updateTrainee={updateTrainee} />
      <AboutYou trainee={trainee!} updateTrainee={updateTrainee} />
      <Nutrition trainee={trainee!} updateTrainee={updateTrainee} />
      <Activity trainee={trainee!} updateTrainee={updateTrainee} />
      <Preferences trainee={trainee!} updateTrainee={updateTrainee} />
      <Scheduling trainee={trainee!} updateTrainee={updateTrainee} />
      {enableContinueButton ? (
        <RoutingButton to={Destination.ProgramSelection}>{t('Continue')}</RoutingButton>
      ) : (
        <Button colorScheme="secondary" disabled>
          {t('Continue')}
        </Button>
      )}
    </DefaultLayout>
  );
}
