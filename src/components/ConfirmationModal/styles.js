import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    headerText: {
        color: styleVariables.arriveBlue,
        fontSize: 18,
        fontWeight: '800',
        marginLeft: 50,
        marginTop: 30,
    },
    confirmationModalContainer: {
        alignItems: 'center',
        backgroundColor: '#00000080',
        flex: 1,
        justifyContent: 'center',
    },
    confirmationModalContent: {
        backgroundColor: '#fff',
        borderRadius: 5,
        flex: 0,
        height: 180,
        width: 300,
    },
    confirmationModalTextContainer: {
        marginLeft: 50,
        marginTop: 30,
        width: '70%',
    },
    confirmationButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 45,
    },
    confirmationButtonsContainer__disagreeText: {
        color: styleVariables.darkGrey
    },
    confirmationButtonsContainer__agreeText: {
        color: styleVariables.arriveBlue
    }
});

export default styles;
