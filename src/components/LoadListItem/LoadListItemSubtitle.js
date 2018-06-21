// Vendors
import React from 'react';
import { View, Text } from 'react-native';

// Styles
import styles from './styles';

const LoadListItemSubtitle = props => (
    <View style={[styles.infoContainer, styles.infoContainer__subTitle]}>
        <Text
            style={[styles.text, styles.textDocType]}
        >{props.docType}</Text>
        <Text
            style={[styles.text, styles.textNotes]}
            numberOfLines={3}
        >{props.notes}</Text>
    </View>
);

export default LoadListItemSubtitle;