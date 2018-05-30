import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from './store';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import DocumentScreen from './screens/DocumentScreen';

const store = configureStore();

Navigation.registerComponent(
  'arrivedemo.AuthScreen',
  () => AuthScreen,
  store,
  Provider
);

Navigation.registerComponent(
  'arrivedemo.HomeScreen',
  () => HomeScreen,
  store,
  Provider
);

Navigation.registerComponent(
  'arrivedemo.MapScreen',
  () => MapScreen,
  store,
  Provider
);

Navigation.registerComponent(
  'arrivedemo.DocumentScreen',
  () => DocumentScreen,
  store,
  Provider
);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'arrivedemo.AuthScreen',
    title: 'Login'
  }
})
