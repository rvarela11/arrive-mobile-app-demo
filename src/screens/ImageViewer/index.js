// Vendors
import React,{ Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

// Components
import DefaultButton from '../../components/UI/DefaultButton';

// Styles
import styles from './styles';

class ImageViewer extends Component {
    state = {
        docImage: null
    }

    componentDidMount () {
        this.setState({
            docImage: this.props.docImage
        });
    }

    pickImageHandler = () => {
        ImagePicker.showImagePicker({
            title: "Pick an image"
        }, res => {
            if (res.didCancel) {
                console.log('User cancelled');
            } else if (res.error) {
                console.log('error', res.error);
            } else {
                const pickedImage = { uri: res.uri, base64: res.data };

                this.setState({ docImage: pickedImage });
                this.props.handleImageSelection(pickedImage);
            }
        });
    }

    render () {
        return (
            <View style={styles.imageViewerContainer}>
                <Image
                    source={this.state.docImage}
                    style={styles.documentImage}
                />
                <View style={styles.changePhotoContainer}>
                    <DefaultButton
                        style={styles.changePhotoButtonWithBackground}
                        textStyle={styles.changePhotoButtonWithBackground__Text}
                        onPress={this.pickImageHandler}
                    >
                        Change Photo
                    </DefaultButton>
                </View>
            </View>
        );
    }
}

export default ImageViewer;