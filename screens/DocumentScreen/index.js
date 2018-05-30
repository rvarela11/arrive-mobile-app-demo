import { View, Text, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitDocument } from './actions';
import PickImage from '../../components/PickImage';
import DefaultInput from '../../components/DefaultInput';
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
                        field="title"
                        handleInputChange={this.handleInputChange}
                    />
                    <DefaultInput 
                        placeholder="Document Type" 
                        valid={true} 
                        field="docType"
                        handleInputChange={this.handleInputChange}
                    />
                    <DefaultInput 
                        placeholder="Notes" 
                        valid={true} 
                        field="notes"
                        handleInputChange={this.handleInputChange}
                    />
                </View>
                <View style={styles.submitButton}>
                <Button
                    title="UPLOAD"
                    color="white"
                    onPress={this.handleSubmitDocument}
                />
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