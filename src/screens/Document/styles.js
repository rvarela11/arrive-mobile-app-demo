import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    documentContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    documentInputContainer: {
      marginTop: 20,
      width: '100%',
    },
    documentInput: {
      borderBottomColor: styleVariables.arriveBlue,
      borderLeftColor: "white",
      borderRightColor: "white",
      borderTopColor: "white",
      borderWidth: 1,
    },
    docTypeContainer: {
      backgroundColor: '#fff',
      borderBottomColor: styleVariables.arriveBlue,
      borderLeftColor: "white",
      borderRightColor: "white",
      borderTopColor: "white",
      borderWidth: 1, 
      padding: 0,
      paddingBottom: 0,
      paddingLeft: 4,
      paddingRight: 0,
      paddingTop: 0,
      margin: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 4,
      width: '100%',
    },
    docTypeContainer__Text: {
      flex: 1
    },
    docTypeContainer__Text__Unselected: {
      color: styleVariables.placeholderGrey
    },
    docTypeContainer__Text__Selected: {
      color: '#000'
    },
    submitButtonContainer: {
      marginTop: 20,
      width: "100%",
    },
    submitButtonWithBackground: {
      backgroundColor: styleVariables.arriveBlue
    },
    submitButtonWithBackground__Text: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '800',
    },
    cancelButtonContainer: {
      marginTop: 10,
      width: "100%",
    },
    cancelButtonWithBackground: {
      backgroundColor: '#cccccc'
    },
    cancelButtonWithBackground__Text: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '800',
    }
});

export default styles;
