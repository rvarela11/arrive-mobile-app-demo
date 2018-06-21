import { StyleSheet, Dimensions } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
    position: 'relative',
  },
  toastContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1000,
  }
});

export default styles;
