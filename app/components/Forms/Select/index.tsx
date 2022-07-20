import { Checkbox, HStack, Icon, Text } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
  return (
    <RNPickerSelect
      style={{
        inputWeb: { fontSize: 11, padding: 4, paddingRight: 10, borderWidth: border ? 1 : 0, textAlign },
        inputIOS: {
          width,
          fontSize: 11,
          padding: 6,
          paddingRight: 20,
          borderWidth: border ? 1 : 0,
          borderColor: 'lightgray',
          borderRadius: 3,
          textAlign,
        },
        inputAndroid: { fontSize: 11, padding: 4, paddingRight: 20, textAlign },
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
      Icon={() => <Icon as={MaterialCommunityIcons} name={'chevron-down'} size={'sm'} />}
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
