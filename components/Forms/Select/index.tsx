import { Checkbox, HStack, Icon, Text } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

type StringEnum = { [key: string]: string };

export const Select = ({
  onValueChange,
  selectedValue,
  items,
  width = 200,
  textAlign = 'right',
  border = false,
}: {
  onValueChange: (value: string) => void;
  selectedValue: string | number | symbol;
  items: { label: string; value: string | number }[];
  width?: number | string;
  textAlign?: 'right' | 'left' | 'center';
  border?: boolean;
}) => {
  const baseStyles = {
    width,
    textAlign,
    fontSize: 11,
    padding: 6,
    paddingRight: 20,
    borderWidth: border ? 1 : 0,
    borderColor: 'lightgray',
    borderRadius: 3,
  };
  return (
    <RNPickerSelect
      style={{
        inputWeb: { ...baseStyles, paddingRight: 10 },
        inputIOS: { ...baseStyles },
        inputAndroid: { ...baseStyles },
        iconContainer: {
          paddingTop: 4,
          paddingRight: 2,
        },
      }}
      fixAndroidTouchableBug={true}
      onValueChange={(value) => onValueChange(value)}
      value={selectedValue || ''}
      items={items}
      // @ts-expect-error ignore
      Icon={() => (Platform.OS !== 'web' ? <Icon as={MaterialCommunityIcons} name={'chevron-down'} size={'sm'} /> : <></>)}
    />
  );
};

export const EnumSelect = <E extends StringEnum>({
  Enum,
  selectedValue,
  onValueChange,
}: {
  Enum: E;
  selectedValue: keyof E | undefined;
  onValueChange: (newValue: keyof E) => void;
}) => {
  const items = Object.keys(Enum).map((key) => ({ label: Enum[key], value: key }));
  return (
    <Select
      onValueChange={(value: string) => onValueChange(value as keyof E)}
      selectedValue={selectedValue ?? ''}
      items={items}
    />
  );
};

export const EnumMultiSelect = <E extends StringEnum>({
  Enum,
  selectedValues,
  onChange,
  accessibilityLabel,
}: {
  Enum: E;
  selectedValues: Array<keyof E>;
  onChange: (newValues: Array<keyof E>) => void;
  accessibilityLabel: string;
}) => (
  <Checkbox.Group
    defaultValue={(selectedValues ?? []) as string[]}
    accessibilityLabel={accessibilityLabel ?? ''}
    onChange={(values) => {
      onChange((values || []) as Array<keyof E>);
    }}
  >
    <HStack space={2} flexWrap={'wrap'}>
      {Object.keys(Enum).map((key: string) => (
        <Checkbox key={key} value={key} my="1" size={'sm'}>
          <Text fontSize={'xs'}>{Enum[key]}</Text>
        </Checkbox>
      ))}
    </HStack>
  </Checkbox.Group>
);
