// Vendors
import React, { Component } from 'react';
import { View, Button, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import { Card } from 'react-native-elements'

// Styles
import styles from './styles';

class PickImage extends Component {

    pickImageHandler = () => {
        if (this.props.document && this.props.document.id) {
            this.props.navigator.push({
                screen: 'arrivedemo.ImageViewerScreen',
                title: 'Image Viewer',
                passProps: {
                    docImage: this.props.pickedImage,
                    handleImageSelection: this.props.handleImageSelection
                }
            });
        } else {
            ImagePicker.showImagePicker({
                title: "Pick an image"
            }, res => {
                if (res.didCancel) {
                    console.log('User cancelled');
                } else if (res.error) {
                    console.log('error', res.error);
                } else {
                    this.props.handleImageSelection({ uri: res.uri, base64: res.data });
                }
            });
        }
    }

    render () {
        if (!this.props.pickedImage) {
            return (
                <Card containerStyle={styles.imagePickerContainer}>
                  <TouchableOpacity onPress={this.pickImageHandler}>
                       <View style={styles.takePhotoButton}>
                           <Icon
                               size={36}
                               name="camera"
                               color="#66E8F7"
                           />
                           <Text>TAKE PHOTO</Text>
                       </View>
                  </TouchableOpacity>
                </Card>
            );
        }

        return (
            <View style={styles.imagePickerContainer}>
                <TouchableOpacity onPress={this.pickImageHandler}>
                    <Image
                        source={this.props.pickedImage}
                        style={styles.documentImage}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default PickImage;
