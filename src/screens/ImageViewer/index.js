// Vendors
import React,{ Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

// Components
import DefaultButton from '../../components/UI/DefaultButton';

// Styles
import styles from './styles';

const ImageViewer = (props) => {
    return (
        <View style={styles.imageViewerContainer}>
            <Image
                source={props.docImage}
                style={styles.documentImage}
            />
            <View style={styles.changePhotoContainer}>
                <DefaultButton
                    style={styles.changePhotoButtonWithBackground}
                    textStyle={styles.changePhotoButtonWithBackground__Text}
                >
                    Change Photo
                </DefaultButton>
            </View>
        </View>
    );
}

export default ImageViewer;