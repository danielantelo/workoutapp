import { Button, IButtonProps, Text } from 'native-base';
import { Linking, Platform } from 'react-native';
import { NavigateFunction } from 'react-router';
import { HashRouter, Link as DomLink, useNavigate as useNavigateDom } from 'react-router-dom';
import { NativeRouter, Link as NativeLink, useNavigate as useNavigateNative } from 'react-router-native';

export enum Destination {
  About = '/About',
  Dashboard = '/Dashboard',
  GetStarted = '/GetStarted',
  Home = '/',
  Log = '/Log',
  ProgramSelection = '/ProgramSelection',
  Program = '/Program',
  Settings = '/Settings',
  Vault = '/Vault',
  Workout = '/Workout/:id',
}

export const Router = ({ children }: { children: React.ReactNode }) =>
  Platform.OS === 'web' ? <HashRouter>{children}</HashRouter> : <NativeRouter>{children}</NativeRouter>;

export const useNavigate = () => (Platform.OS === 'web' ? useNavigateDom() : useNavigateNative());

const linkStyle = { color: '#FF8533' };

export const Link = ({ to, label }: { to: Destination; label: string }) => {
  return Platform.OS === 'web' ? (
    <DomLink to={to} style={{ textDecoration: 'none' }}>
      <Text style={linkStyle}>{label}</Text>
    </DomLink>
  ) : (
    <NativeLink to={to}>
      <Text style={linkStyle}>{label}</Text>
    </NativeLink>
  );
};

export const ExternalLink = ({ to, text }: { to: string; text: string }) => {
  return (
    <Text
      style={linkStyle}
      onPress={() => {
        Linking.openURL(to);
      }}
    >
      {text}
    </Text>
  );
};

export const RoutingButton = ({
  children,
  to,
  onPress,
  ...rest
}: {
  children: React.ReactNode;
  to: Destination | string;
  secondary?: boolean;
  onPress?: () => void;
} & IButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button
      {...rest}
      onPress={() => {
        onPress && onPress();
        navigate(to);
      }}
    >
      {children}
    </Button>
  );
};

export const goToAbout = (navigate: NavigateFunction) => navigate(Destination.About);

export const goToGetStarted = (navigate: NavigateFunction) => navigate(Destination.GetStarted);

export const goToHome = (navigate: NavigateFunction) => navigate(Destination.Home);

export const goToDashboard = (navigate: NavigateFunction) => navigate(Destination.Dashboard);

export const goToLog = (navigate: NavigateFunction) => navigate(Destination.Log);

export const goToProgram = (navigate: NavigateFunction) => navigate(Destination.Program);

export const goToVault = (navigate: NavigateFunction) => navigate(Destination.Vault);

export const goToSettings = (navigate: NavigateFunction) => navigate(Destination.Settings);

export const goToWorkout = (navigate: NavigateFunction) => (id: number) => navigate(`/Workout/${id}`);
