import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
  authMainContainer: {
    justifyContent: 'space-between'
  },
  arriveLogoContainer: {
    width: "100%",
    height: "10%"
  },
  arriveLogo: {
    width: "100%",
    height: "100%"
  },
  signButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  signButtons__Text: {
    color: styleVariables.arriveBlue
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
  }
});

export default styles;
