import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import styles from './styles.js';

const defaultInput = props => (
    <TextInput
        {...props}
        style={[
            styles.input,
            props.style,
            !props.valid && props.hasOnBlur ? styles.invalid : null
        ]}
        underlineColorAndroid='transparent'
    />
)

export default defaultInput
