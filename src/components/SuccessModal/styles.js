import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    successModalContainer: {
        backgroundColor: '#00000080',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    successModalContent: {
        flex: 0,
        width: 300,
        height: 300,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    successModalTextContainer: {
        width: '70%'
    },
    successModalTextContainer__Text: {
        textAlign: 'center'
    },
    closeContainer: {
        marginTop: 40,
        backgroundColor: styleVariables.green,
        padding: 10
    },
    closeContainer__Text: {
        color: '#fff',
        borderRadius: 2
    }
});

export default styles;
