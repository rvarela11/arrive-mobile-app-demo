import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const SuccessModal = (props) => (
    <Modal
        visible={props.modalVisible}
        transparent={true}
        animationType="fade"
    >
        <View style={styles.successModalContainer}>
            <View style={styles.successModalContent}>
                <Icon 
                    size={128}
                    name="check"
                    color="#00D991"
                />
                <View style={styles.successModalTextContainer}>
                    <Text style={styles.successModalText}>Paperwork Uploaded Successfully</Text>
                </View>
                <View style={styles.closeContainer}>
                    <TouchableHighlight onPress={props.setModalVisible}>
                        <Text style={styles.closeText}>Close</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    </Modal>
    
);

export default SuccessModal;