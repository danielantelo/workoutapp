import { Box, Center, ScrollView, Text } from 'native-base';
import { Platform } from 'react-native';

import Logo from '../Logo';
import { Navigation } from '../Navigation';

export const DefaultLayout = ({
  children,
  showNav,
  showLogo,
  backgroundColor = 'secondary.50',
}: {
  showNav?: boolean;
  showLogo?: boolean;
  children: React.ReactNode;
  backgroundColor?: 'secondary.100' | 'secondary.50';
}) => {
  return (
    <>
      <Box flex={1} backgroundColor={backgroundColor}>
        <Box safeArea flex={1} maxWidth={600} width={'95%'} marginX={'auto'} paddingY={5}>
          <ScrollView>
            {showLogo && (
              <Center paddingY={5}>
                <Logo size={'md'} />
              </Center>
            )}
            {children}
          </ScrollView>
        </Box>
      </Box>
      {showNav && <Navigation />}
    </>
  );
};

export const HeadedLayout = ({
  showNav,
  children,
  backgroundColor = 'secondary.50',
  heading,
  headerElements,
}: {
  showNav?: boolean;
  children: React.ReactNode;
  heading?: string;
  headerElements?: React.ReactNode;
  backgroundColor?: string;
}) => {
  return (
    <Box flex={1} backgroundColor={backgroundColor}>
      <Box flex={1} maxWidth={600} width={'100%'} marginX={'auto'}>
        <Box
          safeAreaTop
          bg={'secondary.500'}
          paddingY={2}
          //@ts-expect-error forced web styles for sticky top
          style={Platform.OS === 'web' ? { position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100 } : {}}
        >
          <Center>
            <Logo size={'sm'} />
            {heading && (
              <Text bold color={'white'}>
                {heading}
              </Text>
            )}
            {headerElements && <>{headerElements}</>}
          </Center>
        </Box>
        <ScrollView
          flex={1}
          width={'96%'}
          marginX={'auto'}
          paddingBottom={20}
          style={Platform.OS === 'web' ? { marginTop: '75px' } : {}}
        >
          {children}
        </ScrollView>
        {showNav && <Navigation />}
      </Box>
    </Box>
  );
};
