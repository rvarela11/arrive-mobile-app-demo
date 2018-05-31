import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    documentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    documentInput: {
        borderWidth: 1,
        borderBottomColor: styleVariables.arriveBlue,
        borderTopColor: "white",
        borderLeftColor: "white",
        borderRightColor: "white"
    },
    submitButtonContainer: {
        width: "82.5%",
        marginTop: 20
    },
    submitButtonWithBackground: {
        backgroundColor: styleVariables.arriveBlue,
        marginTop: 20
    },
    submitButtonWithBackground__Text: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 16
    }
});

export default styles;