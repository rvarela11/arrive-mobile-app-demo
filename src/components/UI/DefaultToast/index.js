import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles.js';

const defaultToast = props => (
    <View
      {...props}
      style={[
        styles.toast,
        props.style,
        props.valid ? styles.toastSuccess : styles.toastError
      ]}>
        <Text
          style={[
            props.textStyle,
            styles.toast__text
          ]}
        >{props.children}</Text>
    </View>
)

export default defaultToast;
