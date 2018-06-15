import { StyleSheet, Dimensions } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
  homeMainContainer: {
    position: 'relative',
    flex: 1
  },
  noDocumentsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noDocumentsContainer__Text: {
    fontSize: 24,
    color: styleVariables.placeholderGrey
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
