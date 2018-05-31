import { View, Text, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitDocument } from './actions';
import PickImage from '../../components/PickImage';
import DefaultInput from '../../components/UI/DefaultInput';
import DefaultButton from '../../components/UI/DefaultButton';
import styles from './styles';

class DocumentScreen extends Component {
    state = {
        docImage: null,
        title: '',
        docType: '',
        notes: ''
    }

    handleInputChange = (value, field) => {
        this.setState({
            [field]: value
        });
    }

    handleImageSelection = (pickedImage) => {
        this.setState({
            docImage: pickedImage
        });
    }

    handleSubmitDocument = () => {
        this.props.submitDocument(this.state);
    }

    render () {
        return (
            <View style={styles.documentContainer}>
                <PickImage handleImageSelection={this.handleImageSelection} />
                <View style={{ marginTop: 30, width: "80%", alignItems: "center" }}>
                    <DefaultInput 
                        placeholder="Title" 
                        valid={true}
                        onChangeText={(value) => {
                            this.handleInputChange(value, 'title')}
                        }
                        style={styles.documentInput}
                    />
                    <DefaultInput 
                        placeholder="Document Type" 
                        valid={true}
                        onChangeText={(value) => {
                            this.handleInputChange(value, 'docType')}
                        }
                        style={styles.documentInput}
                    />
                    <DefaultInput 
                        placeholder="Notes" 
                        valid={true}
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
                        SUBMIT
                    </DefaultButton>
                </View>
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