// Vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ActionSheetIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Actions
import { submitDocument } from './actions';

// Components
import PickImage from '../../components/PickImage';
import DefaultInput from '../../components/UI/DefaultInput';
import DefaultButton from '../../components/UI/DefaultButton';
import ConfirmationModal from '../../components/ConfirmationModal';

// Styling
import mainStyles from '../../styles';
import styles from './styles';

class DocumentScreen extends Component {
    state = {
        document: {
            docImage: null,
            title: '',
            docType: 'Document Type',
            notes: ''
        },
        successModalVisible: false,
        confirmationModalVisible: false
    }

    handleInputChange = (value, field) => {
        if (field === 'docType') {
          this.handleActionSheetIOS(field);
        }
        this.setState({
            document: {
                ...this.state.document,
                [field]: value
            }
        });
    }

    handleActionSheetIOS = (field) => {
      const DOCTYPE_ACTIONSHEET_BUTTONS = [
        'Weight Ticket',
        'PPW',
        'BOL',
        'POD'
      ]

      ActionSheetIOS.showActionSheetWithOptions({
        options: DOCTYPE_ACTIONSHEET_BUTTONS,
      },
      (buttonIndex) => {
        this.setState({
          document: {
              ...this.state.document,
              [field]: DOCTYPE_ACTIONSHEET_BUTTONS[buttonIndex]
          }
        });
      });
    }

    handleImageSelection = (pickedImage) => {
        this.setState({
            document: {
                ...this.state.document,
                docImage: pickedImage
            }
        });
    }

    handleSubmitDocument = () => {
        this.props.submitDocument(this.state.document);
        this.clearFields();
        this.props.navigator.push({
            screen: "arrivedemo.HomeScreen",
            title: 'Home'
        });
    }

    clearFields = () => {
        this.setState({
            document: {
                docImage: null,
                title: '',
                docType: 'Document Type',
                notes: ''
            }
        });
    }

    setModalVisible = (modalType) => {
        this.setState(prevState => {
            return {
                [modalType]: !prevState[modalType]
            };
        });
    }

    render () {
        const docType = this.state.document.docType;
        return (
            <View style={[mainStyles.screenMainContainer, styles.documentContainer]}>
                <PickImage
                    handleImageSelection={this.handleImageSelection}
                    pickedImage={this.state.document.docImage}
                />
                <View style={styles.documentInputContainer}>
                    <DefaultInput
                        placeholder="Title"
                        valid={true}
                        value={this.state.document.title}
                        onChangeText={(value) => {
                            this.handleInputChange(value, 'title')}
                        }
                        style={styles.documentInput}
                    />
                    <DefaultButton
                        onPress={() => this.handleInputChange(null, 'docType')}
                        style={styles.docTypeContainer}
                        textStyle={(docType === 'Document Type') ? styles.docTypeContainer__Text : null}
                    > {docType}</DefaultButton>
                    <DefaultInput
                        placeholder="Notes"
                        valid={true}
                        value={this.state.document.notes}
                        onChangeText={(value) => {
                            this.handleInputChange(value, 'notes')}
                        }
                        style={styles.documentInput}
                    />
                </View>
                <View style={styles.submitButtonContainer}>
                    <DefaultButton
                        onPress={this.handleSubmitDocument}
                        style={styles.submitButtonWithBackground}
                        textStyle={styles.submitButtonWithBackground__Text}
                    >
                        UPLOAD
                    </DefaultButton>
                </View>
                <View style={styles.cancelButtonContainer}>
                    <DefaultButton
                        onPress={() => this.setModalVisible('confirmationModalVisible')}
                        style={styles.cancelButtonWithBackground}
                        textStyle={styles.cancelButtonWithBackground__Text}
                    >
                        CANCEL
                    </DefaultButton>
                </View>
                <ConfirmationModal
                    handleCancel={this.clearFields}
                    modalVisible={this.state.confirmationModalVisible}
                    setModalVisible={() => this.setModalVisible('confirmationModalVisible')}
                />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitDocument: (document) => dispatch(submitDocument(document))
    }
}

export default connect(null, mapDispatchToProps)(DocumentScreen);
