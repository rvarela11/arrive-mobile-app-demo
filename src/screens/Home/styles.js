import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  homeMainContainer: {
    position: 'relative',
    flex: 1
  },
  toastContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  }
});

export default styles;
