import { StyleSheet, Dimensions } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    noDocumentsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noDocumentsContainer__Text: {
        fontSize: 24,
        color: styleVariables.placeholderGrey
    }
});

export default styles;