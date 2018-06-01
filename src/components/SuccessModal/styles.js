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
    successModalText: {
        textAlign: 'center'
    },
    closeContainer: {
        marginTop: 40,
        backgroundColor: styleVariables.green,
        padding: 10
    },
    closeText: {
        color: '#fff'
    }
});

export default styles;