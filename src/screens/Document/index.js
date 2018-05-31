import { View, Text, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitDocument } from './actions';
import PickImage from '../../components/PickImage';
import DefaultInput from '../../components/UI/DefaultInput';
import DefaultButton from '../../components/UI/DefaultButton';
import SuccessModal from '../../components/SuccessModal';
import styles from './styles';

class DocumentScreen extends Component {
    state = {
        document: {
            docImage: null,
            title: '',
            docType: '',
            notes: ''
        },
        modalVisible: false
    }

    handleInputChange = (value, field) => {
        this.setState({
            document: {
                ...this.state.document,
                [field]: value
            }
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
        this.setModalVisible(); 
    }

    handleCancel = () => {
        this.setState({
            document: {
                docImage: null,
                title: '',
                docType: '',
                notes: ''
            }
        });
    }

    setModalVisible = () => {
        this.setState(prevState => {
            return {
                modalVisible: !prevState.modalVisible
            };
        });
    }

    render () {
        return (
            <View style={styles.documentContainer}>
                <PickImage
                    handleImageSelection={this.handleImageSelection}
                    pickedImage={this.state.document.docImage}
                />
                <View style={{ marginTop: 30, width: "80%", alignItems: "center" }}>
                    <DefaultInput 
                        placeholder="Title" 
                        valid={true}
                        value={this.state.document.title}
                        onChangeText={(value) => {
                            this.handleInputChange(value, 'title')}
                        }
                        style={styles.documentInput}
                    />
                    <DefaultInput 
                        placeholder="Document Type" 
                        valid={true}
                        value={this.state.document.docType}
                        onChangeText={(value) => {
                            this.handleInputChange(value, 'docType')}
                        }
                        style={styles.documentInput}
                    />
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
                        onPress={this.handleCancel}
                        style={styles.cancelButtonWithBackground}
                        textStyle={styles.cancelButtonWithBackground__Text}
                    >
                        CANCEL
                    </DefaultButton>
                </View>
                <SuccessModal
                    modalVisible={this.state.modalVisible}
                    setModalVisible={this.setModalVisible}
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