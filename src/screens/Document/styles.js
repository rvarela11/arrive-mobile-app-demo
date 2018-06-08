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
      padding: 1,
      marginTop: 8,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      alignItems: 'flex-start'
    },
    docTypeContainer__Text: {
      color: '#C7C7CD'
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
