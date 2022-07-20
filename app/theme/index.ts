import { extendTheme } from 'native-base';

import { Select } from './components/Select';

export const nativeBaseTheme = extendTheme({
  fontSizes: {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 18,
    xl: 28,
  },
  colors: {
    primary: {
      '50': '#FFF3EB',
      '100': '#FFE7D6',
      '200': '#FFCEAD',
      '300': '#FFB685',
      '400': '#FF9D5C',
      '500': '#FF8533',
      '600': '#F56200',
      '700': '#B84900',
      '800': '#7A3100',
      '900': '#3D1800',
    },
    secondary: {
      '50': '#f9f9f8',
      '100': '#e0e0de',
      '200': '#a5a5a5',
      '300': '#808080',
      '400': '#656565',
      '500': '#4a4a4a',
      '600': '#434343',
      '700': '#3a3a3a',
      '800': '#323232',
      '900': '#222222',
    },
  },
  components: {
    Select,
  },
});
