import { Route, Routes } from 'react-router';
import { NativeBaseProvider } from 'native-base';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { nativeBaseTheme } from './theme';
import { Destination, Router } from './utils/routing';
import { Loader } from './components/Loader';

import About from './screens/About';
import Welcome from './screens/Welcome';
import GetStarted from './screens/GetStarted';
import ProgramSelection from './screens/ProgramSelection';
import Dashboard from './screens/Dashboard';
import Program from './screens/Program';
import Settings from './screens/Settings';
import Vault from './screens/Vault';
import Log from './screens/Log';
import Workout from './screens/Workout';

i18n.use(initReactI18next).init({
  resources: {},
  lng: 'en',
  fallbackLng: 'en',
});

export default function App() {
  const activeProgramLoaded = true;

  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      {!activeProgramLoaded ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path={Destination.Home} element={<Welcome />} />
            <Route path={Destination.About} element={<About />} />
            <Route path={Destination.Dashboard} element={<Dashboard />} />
            <Route path={Destination.GetStarted} element={<GetStarted />} />
            <Route path={Destination.ProgramSelection} element={<ProgramSelection />} />
            <Route path={Destination.Program} element={<Program />} />
            <Route path={Destination.Settings} element={<Settings />} />
            <Route path={Destination.Vault} element={<Vault />} />
            <Route path={Destination.Log} element={<Log />} />
            <Route path={Destination.Workout} element={<Workout />} />
          </Routes>
        </Router>
      )}
    </NativeBaseProvider>
  );
}
