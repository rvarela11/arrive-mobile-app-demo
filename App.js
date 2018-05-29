import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from './store';
import AuthScreen from './screens/AuthScreen';

const store = configureStore();

Navigation.registerComponent(
  'arrive-demo.AuthScreen',
  () => AuthScreen,
  store,
  Provider
);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'arrive-demo.AuthScreen',
    title: 'Login'
  }
})
