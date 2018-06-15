import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    documentContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    documentInputContainer: {
      width: '100%',
      marginTop: 20
    },
    documentInput: {
        borderWidth: 1,
        borderBottomColor: styleVariables.arriveBlue,
        borderTopColor: "white",
        borderLeftColor: "white",
        borderRightColor: "white"
    },
    docTypeContainer: {
      borderWidth: 1,
      borderBottomColor: styleVariables.arriveBlue,
      borderTopColor: "white",
      borderLeftColor: "white",
      borderRightColor: "white",
      width: '100%',
      backgroundColor: '#fff',
      padding: 0,
      paddingTop: 0,
      paddingLeft: 4,
      paddingBottom: 0,
      paddingRight: 0,
      margin: 0,
      marginTop: 4,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0
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
        width: "100%",
        marginTop: 20
    },
    submitButtonWithBackground: {
        backgroundColor: styleVariables.arriveBlue
    },
    submitButtonWithBackground__Text: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 16
    },
    cancelButtonContainer: {
        width: "100%",
        marginTop: 10
    },
    cancelButtonWithBackground: {
        backgroundColor: '#cccccc'
    },
    cancelButtonWithBackground__Text: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 16
    }
});

export default styles;
