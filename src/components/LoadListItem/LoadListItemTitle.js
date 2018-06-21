// Vendors
import React from 'react';
import { View, Text } from 'react-native';

// Styles
import styles from './styles';

const LoadListItemTitle = props => (
    <View style={[styles.infoContainer, styles.infoContainer__title]}>
        <Text
            style={[styles.text, styles.textTitle]}
            numberOfLines={1}
        >{props.title}</Text>
    </View>
);

export default LoadListItemTitle;