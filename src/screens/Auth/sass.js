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
    justifyContent: 'space-between'
  },
  signButtons__Text: {
    color: styleVariables.arriveBlue
  },
  signInButtonWithBackground: {
    backgroundColor: styleVariables.arriveBlue
  },
  signInButtonWithBackground__Text: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16
  }
});

export default styles;
