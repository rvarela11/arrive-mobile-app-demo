// Vendors
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

// Store
import configureStore from './src/store/configureStore';

// Screens
import Auth from './src/screens/Auth';
import HomeScreen from './src/screens/Home';
import MapScreen from './src/screens/Map';
import DocumentScreen from './src/screens/Document';

const store = configureStore();

// Register Screens
Navigation.registerComponent('arrivedemo.Auth', () => Auth, store, Provider);
Navigation.registerComponent('arrivedemo.HomeScreen', () => HomeScreen, store, Provider);
Navigation.registerComponent('arrivedemo.MapScreen', () => MapScreen, store, Provider);
Navigation.registerComponent('arrivedemo.DocumentScreen', () => DocumentScreen, store, Provider);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'arrivedemo.Auth',
    navigatorStyle: {
      navBarHidden: true
    }
  }
})
