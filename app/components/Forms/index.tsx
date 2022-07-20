import { Box, HStack, VStack } from 'native-base';

import { DashboardCard } from '../Dashboards';

export * from './Select';

export const FormCard = ({ children, heading }: { children: React.ReactNode; heading?: string }) => {
  return <DashboardCard heading={heading}>{children}</DashboardCard>;
};

export const InlineField = ({ children, allowWrap = false }: { children: React.ReactNode; allowWrap?: boolean }) => (
  <HStack paddingBottom={1} justifyContent={'space-between'} alignItems={'center'} flexWrap={allowWrap ? 'wrap' : 'nowrap'}>
    {children}
  </HStack>
);

export const StackedField = ({ children }: { children: React.ReactNode }) => <VStack paddingBottom={1}>{children}</VStack>;

export const BottomButtonsBox = ({ children }: { children: React.ReactNode }) => (
  <Box marginTop={'auto'} marginBottom={2}>
    {children}
  </Box>
);
