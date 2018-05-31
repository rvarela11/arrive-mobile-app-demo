import React, { Component } from 'react';
import { View, Button, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

class PickImage extends Component {
    state = {
        pickedImage: null
    }

    pickImageHandler = () => {
        ImagePicker.showImagePicker({
            title: "Pick an image"
            // maxHeight: 600,
            // maxWidth: 800
        }, res => {
            if (res.didCancel) {
                console.log('User cancelled');
            } else if (res.error) {
                console.log('error', res.error);
            } else {
                console.log('res---------', res)
                this.setState({
                    pickedImage: { uri: res.uri }
                });
                this.props.handleImageSelection({ uri: res.uri, base64: res.data });
            }
            
        });
    }

    render () {
        if (!this.state.pickedImage) {
            return (
                <View style={styles.imagePickerContainer}>
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
                </View>
            );
        }

        return (
            <View style={styles.imagePickerContainer}>
                <TouchableOpacity onPress={this.pickImageHandler}>
                    <Image 
                        source={this.state.pickedImage} 
                        style={styles.documentImage} 
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default PickImage;