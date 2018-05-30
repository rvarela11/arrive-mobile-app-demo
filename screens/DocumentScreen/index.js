import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import styles from './styles';

const DocumentScreen = () => (
    <View style={styles.documentContainer}>
        <TouchableOpacity>
            <View style={styles.takePhotoButton}>
                <Icon 
                    size={36}
                    name="camera"
                    color="black"
                />
                <Text>TAKE PHOTO</Text>
            </View>
        </TouchableOpacity>
        <Text>Auth</Text>
    </View>
);

export default DocumentScreen;