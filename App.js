// Vendors
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

// Store
import configureStore from './src/store/configureStore';

// Screens
import Auth from './src/screens/Auth';
import HomeScreen from './src/screens/Home';
import DocumentScreen from './src/screens/Document';
import ImageViewerScreen from './src/screens/ImageViewer';
import NotesScreen from './src/screens/Notes'

const store = configureStore();

// Register Screens
Navigation.registerComponent('arrivedemo.Auth', () => Auth, store, Provider);
Navigation.registerComponent('arrivedemo.HomeScreen', () => HomeScreen, store, Provider);
Navigation.registerComponent('arrivedemo.DocumentScreen', () => DocumentScreen, store, Provider);
Navigation.registerComponent('arrivedemo.ImageViewerScreen', () => ImageViewerScreen, store, Provider);
Navigation.registerComponent('arrivedemo.NotesScreen', () => NotesScreen, store, Provider);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'arrivedemo.Auth',
    navigatorStyle: {
      navBarHidden: true
    }
  }
})
