import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    imageViewerContainer: {
        flex: 1,
        width: '100%'
    },
    documentImageContainer: {
      height: '90%',
      width: '100%'
    },
    documentImage: {
        height: '100%',
        width: '100%'
    },
    changePhotoContainer: {
        height: '10%',
        width: '100%',
        marginTop: '0.7%',
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    changePhotoButtonWithBackground: {
        backgroundColor: styleVariables.arriveBlue
    },
    changePhotoButtonWithBackground__Text: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 16
    }
});

export default styles;
