// Vendors
import React,{ Component } from 'react';
import {
    View,
    Text,
    Button,
    Image
} from 'react-native';

import styles from './styles';

const ImageViewer = (props) => {
    return (
        <View style={styles.imageViewerContainer}>
            <View style={styles.changePhotoContainer}>
                <Button title='Use Different Image' />
            </View>
            <Image
                source={props.docImage}
                style={styles.documentImage}
            />
        </View>
    );
}

export default ImageViewer;