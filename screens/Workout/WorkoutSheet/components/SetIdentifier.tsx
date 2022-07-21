import { Box, Text } from 'native-base';

export const SetIdentifier = ({ warmup, setId }: { warmup?: boolean; setId: number }) => (
  <Box width={25} borderRadius={10} background={warmup ? 'primary.50' : 'primary.200'} padding={0.5}>
    <Text textAlign={'center'} fontSize={'xs'}>
      {setId + 1}
    </Text>
  </Box>
);
