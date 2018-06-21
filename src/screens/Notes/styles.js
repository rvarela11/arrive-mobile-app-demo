import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    notesContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    notesInput: {
        borderBottomColor: styleVariables.arriveBlue,
        borderLeftColor: "white",
        borderRightColor: "white",
        borderTopColor: "white",
        borderWidth: 1,
        width: "80%",
    }
});

export default styles;
