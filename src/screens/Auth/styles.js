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
    padding: 10,
    alignItems: 'center'
  },
  signButtonWithBackground: {
    backgroundColor: styleVariables.arriveBlue
  },
  signButtonWithBackground__Text: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16
  },
  inputLabelContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  showErrorMessage: {
    color: 'red',
    marginLeft: 8
  },
  hideErrorMessage: {
    display: 'none'
  }
});

export default styles;
