import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    headerText: {
        marginLeft: 50,
        marginTop: 30,
        fontWeight: '800',
        fontSize: 18,
        color: styleVariables.arriveBlue
    },
    confirmationModalContainer: {
        backgroundColor: '#00000080',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmationModalContent: {
        flex: 0,
        width: 300,
        height: 180,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    confirmationModalTextContainer: { 
        width: '70%',
        marginLeft: 50,
        marginTop: 30
    },
    confirmationButtonsContainer: {
        marginTop: 45,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    disagreeText: {
        color: styleVariables.darkGrey
    },
    agreeText: {
        color: styleVariables.arriveBlue
    }
});

export default styles;