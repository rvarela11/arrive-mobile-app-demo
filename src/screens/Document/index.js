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

// Actions
import { submitDocument } from './actions';

// Components
import PickImage from '../../components/PickImage';
import DefaultInput from '../../components/UI/DefaultInput';
import DefaultButton from '../../components/UI/DefaultButton';
import ConfirmationModal from '../../components/ConfirmationModal';

// Styles
import mainStyles from '../../styles';
import styles from './styles';
import styleVariables from '../../style-variables';

class DocumentScreen extends Component {
    constructor (props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    state = {
        document: {
            docImage: null,
            title: '',
            docType: 'Document Type',
            notes: ''
        },
        docStatus: 'UPLOAD',
        isDocFormValid: false,
        successModalVisible: false,
        confirmationModalVisible: false
    }

    componentDidMount () {
        if (this.props.document && this.props.document.id) {
            this.clearFields();
            this.setState({
                document: this.props.document,
                docStatus: 'SAVE CHANGES'
            });
        }
    }

    onNavigatorEvent = event => {
        if (event.type === "ScreenChangedEvent" && event.id && event.id === "willAppear") {
            if (this.props.documentWasSaved) {
                this.props.navigator.popToRoot();
            }
        }
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
        }, this.checkForDocValidation);
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
            }, this.checkForDocValidation);
        });
    }

    handleImageSelection = (pickedImage) => {
        this.setState({
            document: {
                ...this.state.document,
                docImage: pickedImage
            }
        }, this.checkForDocValidation);
    }

    handleNotesFieldFocus = () => {
        this.props.navigator.push({
            backButtonTitle: 'Back',
            screen: 'arrivedemo.NotesScreen',
            title: 'Notes',
            passProps: {
                notes: this.state.document.notes,
                handleInputChange: this.handleInputChange
            }
        });
    }

    handleSubmitDocument = () => {
        this.props.submitDocument(this.state.document, this.state.docStatus);
        this.clearFields();
        this.props.navigator.switchToTab({
            tabIndex: 0
        });
        if (this.props.document && this.props.document.id) {
            this.props.navigator.popToRoot();
        }
    }

    clearFields = () => {
        this.setState({
            document: {
                docImage: null,
                title: '',
                docType: 'Document Type',
                notes: ''
            },
            docStatus: 'UPLOAD'
        });
    }

    setModalVisible = (modalType) => {
        this.setState(prevState => {
            return {
                [modalType]: !prevState[modalType]
            };
        });
    }

    checkForDocValidation = () => {
        const { document } = this.state;
        const areDocumentsEqual = JSON.stringify(this.props.document) === JSON.stringify(this.state.document);
        // Get all the valid values from this.state.controls and stop at the first false
        for (let key in document) {
            if (document[key] === null || document.title === '' || document[key] === 'Document Type' || areDocumentsEqual) {
                this.setState({isDocFormValid: false});
                return;
            } else {
                this.setState({isDocFormValid: true})
            }
        }
    }

    render () {
        const docType = this.state.document.docType;
        return (
            <View style={[mainStyles.screenMainContainer, styles.documentContainer]}>
                <PickImage
                    handleImageSelection={this.handleImageSelection}
                    pickedImage={this.state.document.docImage}
                    navigator={this.props.navigator}
                    document={this.props.document}
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
                        textStyle={[
                          styles.docTypeContainer__Text,
                          (docType === 'Document Type') ? styles.docTypeContainer__Text__Unselected : styles.docTypeContainer__Text__Selected
                        ]}
                        icon={true}
                        iconSize={22}
                        iconName="chevron-down"
                        iconColor={styleVariables.placeholderGrey}
                    >
                      {docType}
                    </DefaultButton>
                    <TouchableOpacity
                        onPress={this.handleNotesFieldFocus}
                    >
                        <DefaultInput
                            placeholder="Notes"
                            valid={true}
                            value={this.state.document.notes}
                            onChangeText={(value) => {
                                this.handleInputChange(value, 'notes')}
                            }
                            style={styles.documentInput}
                            numberOfLines={1}
                            pointerEvents='none'
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.submitButtonContainer}>
                    <DefaultButton
                        onPress={this.handleSubmitDocument}
                        style={styles.submitButtonWithBackground}
                        textStyle={styles.submitButtonWithBackground__Text}
                        disabled={!this.state.isDocFormValid}
                    >
                        {this.state.docStatus}
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

const mapStateToProps = state => ({
    documentWasSaved: state.document.documentWasSaved
});

const mapDispatchToProps = (dispatch) => {
    return {
        submitDocument: (document, docStatus) => dispatch(submitDocument(document, docStatus))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentScreen);
