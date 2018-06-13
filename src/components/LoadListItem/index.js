import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements';

class LoadListItem extends Component {
    itemSelectedHandler = (document) => {
        // this.props.navigator.push({
        //     screen: 'arrivedemo.DocumentScreen',
        //     title: 'Document',
        //     passProps: {
        //         document: document
        //     }
        // })
        this.props.navigator.switchToTab({
            tabIndex: 1
        })
    }

    render () {
        console.log('props.document------', this.props.document)
        return (
            <TouchableOpacity onPress={() => this.itemSelectedHandler(this.props.document)}>
                <ListItem
                    key={this.props.document.title}
                    avatar={{ uri: this.props.document.docImage.uri }}
                    hideChevron={false}
                    title={this.props.document.title}
                    subtitle={this.props.document.docType}
                >
                    <Text>{this.props.document.notes}</Text>
                </ListItem>
            </TouchableOpacity>
        );
    }
}

export default LoadListItem;