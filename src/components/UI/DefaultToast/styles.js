import { StyleSheet } from 'react-native';
import styleVariables from '../../../style-variables';

const styles = StyleSheet.create({
  toast: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    borderRadius: 2,
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
