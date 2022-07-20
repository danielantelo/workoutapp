import { Image } from 'native-base';

type LogoSize = 'sm' | 'md';

const Logo = ({ size }: { size?: LogoSize }) => {
  let height = 268; // actual image height
  switch (size) {
    case 'sm':
      height = height / 10;
      break;
    case 'md':
      height = height / 4;
      break;
  }
  return (
    <Image marginBottom={1} width={'100%'} height={height} alt={'logo'} resizeMode={'contain'} source={require(`./logo.png`)} />
  );
};

export default Logo;
