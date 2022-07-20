import { ReactElement, useEffect } from 'react';
import { Center, HStack, Icon, Image, Pressable, Text } from 'native-base';
import { NavigateFunction, useLocation } from 'react-router';
import { ImageSourcePropType, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useStoredState } from 'react-native-use-stored-state';

import { goToDashboard, goToLog, goToProgram, goToSettings, goToVault, useNavigate } from '../../utils/routing';

interface Tab {
  label?: string;
  icon?: string;
  image?: ImageSourcePropType;
  action: (navigate: NavigateFunction) => void;
}

const tabs: Tab[] = [
  {
    label: 'Program',
    icon: 'dumbbell',
    action: goToProgram,
  },
  {
    label: 'Log',
    icon: 'calendar',
    action: goToLog,
  },
  {
    image: require('./go.png'),
    action: goToDashboard,
  },
  {
    label: 'Vault',
    icon: 'video',
    action: goToVault,
  },
  {
    label: 'Settings',
    icon: 'cog',
    action: goToSettings,
  },
];

export const Navigation = (): ReactElement => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useStoredState<number>('ACTIVE_NAV_TAB', 2);

  useEffect(() => {
    if (location.pathname.includes('Dashboard')) {
      setSelectedTab(2);
    } else {
      tabs.forEach((tab, idx) => {
        if (tab.label && location.pathname.includes(tab.label)) {
          setSelectedTab(idx);
        }
      });
    }
  }, [location]);

  return (
    <HStack
      bg={'secondary.100'}
      alignItems={'center'}
      safeAreaBottom
      shadow={5}
      paddingTop={2}
      //@ts-expect-error forced web styles for sticky nav
      style={Platform.OS === 'web' ? { position: 'fixed', bottom: 0, left: 0, width: '100%' } : {}}
    >
      {tabs.map((tab, id) => (
        <Pressable
          key={`nav-tab-${id}`}
          opacity={selectedTab === id ? 1 : 0.5}
          py={2}
          flex={1}
          onPress={() => {
            setSelectedTab(id);
            tab.action(navigate);
          }}
        >
          <Center>
            {tab.icon && <Icon mb={1} as={MaterialCommunityIcons} name={tab.icon} size={'md'} />}
            {tab.label && <Text>{tab.label}</Text>}
            {tab.image && <Image width={10} height={10} alt={'Next Workout'} resizeMode={'contain'} source={tab.image} />}
          </Center>
        </Pressable>
      ))}
    </HStack>
  );
};
