import React from 'react';
import { View } from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput';
import DefaultButton from '../../components/UI/DefaultButton';

import styles from './styles';

const NotesScreen = props => (
    <View style={styles.notesContainer}>
        <DefaultInput
            placeholder="Notes"
            style={styles.notesInput}
            multiline
            onChangeText={(value) => {
                props.handleInputChange(value, 'notes')}
            }
            value={props.notes}
        ></DefaultInput>
    </View>
);

export default NotesScreen;