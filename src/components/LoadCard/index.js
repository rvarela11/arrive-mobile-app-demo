import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements';

const LoadListItem = props => {
    return (
        <TouchableOpacity>
            <ListItem
                key={props.document.title}
                avatar={{ uri: props.document.docImage.uri }}
                hideChevron={false}
                title={props.document.title}
                subtitle={props.document.docType}
            >
                <Text>{props.document.notes}</Text>
            </ListItem>
        </TouchableOpacity>
    );
}

export default LoadListItem;