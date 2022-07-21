import { useTranslation } from 'react-i18next';

import { BottomButtonsBox } from '../../components/Forms';
import { HeadedLayout } from '../../components/Layouts';
import { Loader } from '../../components/Loader';
import { useActiveProgram, useLog } from '../../domain/trainee';
import { Destination, RoutingButton } from '../../utils/routing';

export default function Settings() {
  const { t } = useTranslation();
  const { activeProgramLoaded, resetProgram } = useActiveProgram();
  const { resetLog } = useLog();

  if (!activeProgramLoaded) {
    return <Loader />;
  }

  return (
    <HeadedLayout showNav heading={t('Settings')}>
      <BottomButtonsBox>
        <RoutingButton to={Destination.Log} onPress={resetLog} colorScheme="secondary" marginY={1}>
          {t('Reset Log')}
        </RoutingButton>
        <RoutingButton to={Destination.GetStarted} onPress={resetProgram}>
          {t('Reset/Change Program')}
        </RoutingButton>
      </BottomButtonsBox>
    </HeadedLayout>
  );
}
