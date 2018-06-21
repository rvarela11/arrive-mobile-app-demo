import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    imageViewerContainer: {
        flex: 1,
        width: '100%',
    },
    documentImageContainer: {
        height: '90%',
        width: '100%',
    },
    documentImage: {
        height: '100%',
        width: '100%',
    },
    changePhotoContainer: {
        height: '10%',
        marginTop: '0.7%',
        paddingLeft: '10%',
        paddingRight: '10%',
        width: '100%',
    },
    changePhotoButtonWithBackground: {
        backgroundColor: styleVariables.arriveBlue
    },
    changePhotoButtonWithBackground__Text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '800',
    }
});

export default styles;
