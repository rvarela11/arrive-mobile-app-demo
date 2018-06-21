import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    successModalContainer: {
        alignItems: 'center',
        backgroundColor: '#00000080',
        flex: 1,
        justifyContent: 'center',
    },
    successModalContent: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        flex: 0,
        height: 300,
        justifyContent: 'center',
        width: 300,
    },
    successModalTextContainer: {
        width: '70%'
    },
    successModalTextContainer__Text: {
        textAlign: 'center'
    },
    closeContainer: {
        backgroundColor: styleVariables.green,
        marginTop: 40,
        padding: 10,
    },
    closeContainer__Text: {
        borderRadius: 2,
        color: '#fff',
    }
});

export default styles;
