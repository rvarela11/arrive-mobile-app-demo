import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    imageViewerContainer: {
        height: '100%',
        width: '100%'
    },
    changePhotoContainer: {
        height: '20%',
        width: '100%',
        marginTop: '0.7%'
    },
    changePhotoButtonWithBackground: {
        backgroundColor: styleVariables.arriveBlue,
    },
    changePhotoButtonWithBackground__Text: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 16
    },
    documentImage: {
        height: '90%',
        width: '100%'
    }
});

export default styles;