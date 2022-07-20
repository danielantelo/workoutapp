import { Box, HStack, Heading, Text, useTheme } from 'native-base';

export const DashboardHeading = ({ heading }: { heading: string }) => (
  <Heading fontSize={'md'} fontWeight={400} marginY={2}>
    {heading}
  </Heading>
);

export const DashboardCard = ({ children, heading }: { children: React.ReactNode; heading?: string }) => {
  const { colors } = useTheme();
  return (
    <Box marginY={2}>
      {heading && <DashboardHeading heading={heading} />}
      <Box padding={3} rounded={'lg'} backgroundColor={colors.white}>
        {children}
      </Box>
    </Box>
  );
};

export const DashboardLabel = ({ children }: { children: React.ReactNode }) => <Text bold>{children}</Text>;

export const DashboardDetail = ({ label, value }: { label: string; value: string | number }) => (
  <HStack paddingY={1} justifyContent={'space-between'} alignItems={'center'}>
    <DashboardLabel>{label}:</DashboardLabel>
    <Text>{value}</Text>
  </HStack>
);
