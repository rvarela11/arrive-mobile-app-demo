import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent('arrivedemo.AuthScreen', () => AuthScreen, store, Provider);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'arrivedemo.AuthScreen',
    title: 'Login'
  }
})
