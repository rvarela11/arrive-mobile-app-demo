// Vendors
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

// Components
import LoadListItemTitle from './LoadListItemTitle';
import LoadListItemSubtitle from './LoadListItemSubtitle';

// Styles
import styles from './styles';

class LoadListItem extends Component {
    itemSelectedHandler = (document) => {
        this.props.navigator.push({
            backButtonTitle: 'Back',
            screen: 'arrivedemo.DocumentScreen',
            title: 'Edit Document',
            passProps: {
                document
            }
        });
      this.props.getLoadListItemId(document.id);
    }

    render () {
        return (
            <TouchableOpacity onPress={() => this.itemSelectedHandler(this.props.document)}>
                <ListItem
                    key={this.props.document.id}
                    avatar={{ uri: this.props.document.docImage.uri }}
                    avatarContainerStyle={styles.avatarContainer}
                    avatarStyle={styles.avatar}
                    title={<LoadListItemTitle title={this.props.document.title} />}
                    subtitle={
                        <LoadListItemSubtitle
                            docType={this.props.document.docType}
                            notes={this.props.document.notes}
                        />
                    }
                >
                </ListItem>
            </TouchableOpacity>
        );
    }
}

export default LoadListItem;
