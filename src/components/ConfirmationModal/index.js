import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const ConfirmationModal = (props) => (
    <Modal
        visible={props.modalVisible}
        transparent={true}
        animationType="fade"
    >
        <View style={styles.confirmationModalContainer}>
            <View style={styles.confirmationModalContent}>
                <Text style={styles.headerText}>Cancel upload?</Text>
                <View style={styles.confirmationModalTextContainer}>
                    <Text style={styles.confirmationModalText}>This will remove the attachment</Text>
                </View>
                <View style={styles.confirmationButtonsContainer}>
                    <TouchableOpacity onPress={props.setModalVisible}>
                        <Text style={styles.confirmationButtonsContainer__disagreeText}>Disagree</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            props.setModalVisible();
                            props.handleCancel();
                        }}
                    >
                        <Text style={styles.confirmationButtonsContainer__agreeText}>Agree</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
);

export default ConfirmationModal;
