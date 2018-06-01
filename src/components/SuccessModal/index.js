import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DefaultButton from '../UI/DefaultButton';

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
                    <Text style={styles.successModalTextContainer__Text}>Paperwork Uploaded Successfully</Text>
                </View>
                <DefaultButton
                  style={styles.closeContainer}
                  textStyle={styles.closeContainer__Text}
                  onPress={props.setModalVisible}
                > Close </DefaultButton>
            </View>
        </View>
    </Modal>

);

export default SuccessModal;
