import { StyleSheet } from 'react-native';
import styleVariables from '../../../style-variables';

const styles = StyleSheet.create({
  toast: {
    padding: 8,
    borderRadius: 2
  },
  showToast: {
    display: 'flex'
  },
  hideToast: {
    display: 'none'
  },
  toast__text: {
    color: '#fff'
  },
  toastSuccess: {
    backgroundColor: styleVariables.green
  },
  toastError: {
    backgroundColor: styleVariables.red
  }
});

export default styles;
