// Vendors
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements';

// Styles
import styles from './styles';

class LoadListItem extends Component {
    itemSelectedHandler = (document) => {
        this.props.navigator.push({
            screen: 'arrivedemo.DocumentScreen',
            title: 'Document',
            passProps: {
                document: document
            }
        })
    }

    render () {
        return (
            <TouchableOpacity onPress={() => this.itemSelectedHandler(this.props.document)}>
                <ListItem
                    key={this.props.document.id}
                    avatar={{ uri: this.props.document.docImage.uri }}
                    avatarContainerStyle={styles.avatarContainer}
                    avatarStyle={styles.avatar}
                    title={
                      <View style={[styles.infoContainer, styles.infoContainer__title]}>
                        <Text
                          style={[styles.text, styles.textTitle]}
                          numberOfLines={1}
                        >{this.props.document.title}</Text>
                      </View>
                    }
                    subtitle={
                      <View style={[styles.infoContainer, styles.infoContainer__subTitle]}>
                        <Text
                          style={[styles.text, styles.textDocType]}
                        >{this.props.document.docType}</Text>
                        <Text
                          style={[styles.text, styles.textNotes]}
                          numberOfLines={3}
                        >{this.props.document.notes}</Text>
                      </View>
                    }
                >
                </ListItem>
            </TouchableOpacity>
        );
    }
}

export default LoadListItem;
