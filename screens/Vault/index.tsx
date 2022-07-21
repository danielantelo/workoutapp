import { Text } from 'native-base';
import { useTranslation } from 'react-i18next';

import { HeadedLayout } from '../../components/Layouts';

export default function Vault() {
  const { t } = useTranslation();

  return (
    <HeadedLayout showNav heading={t('Vault')}>
      <Text>{t('Coming Soon')}</Text>
    </HeadedLayout>
  );
}
