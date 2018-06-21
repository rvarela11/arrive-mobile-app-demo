import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
  authMainContainer: {
    justifyContent: 'space-between'
  },
  inputWithBorder: {
    borderColor: styleVariables.arriveBlue,
    borderWidth: 1,
  },
  termsAndConditionsContainer: {
    alignItems: 'center',
    padding: 10,
  },
  signButtonWithBackground: {
    backgroundColor: styleVariables.arriveBlue
  },
  signButtonWithBackground__Text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  inputLabelContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  showErrorMessage: {
    color: 'red',
    marginLeft: 8,
  },
  hideErrorMessage: {
    display: 'none'
  }
});

export default styles;
