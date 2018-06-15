import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    notesContainer: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    notesInput: {
        borderWidth: 1,
        borderBottomColor: styleVariables.arriveBlue,
        borderTopColor: "white",
        borderLeftColor: "white",
        borderRightColor: "white",
        width: "80%"
    }
});

export default styles;