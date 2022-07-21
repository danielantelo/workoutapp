import { HStack, Text } from 'native-base';

export const Paragraph = ({ children }: { children: React.ReactNode }) => <Text marginBottom={5}>{children}</Text>;

export const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <HStack marginY={1} marginLeft={3}>
    <Text marginRight={2}>{'\u{29BF}'}</Text>
    <Text>{children}</Text>
  </HStack>
);
