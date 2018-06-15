// Vendors
import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, View, Text, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import styles from './styles.js';

const defaultButton = props => {
  let icon = null;
  if (props.icon) {
    icon = (
        <Icon
            size={props.iconSize}
            name={props.iconName}
            color={props.iconColor}
        />
    )
  }

  const content = (
    <View
      {...props}
      style={[
        styles.button,
        props.style,
        props.icon ? styles.buttonWithIcon : null,
        props.disabled ? styles.disabled : null]
      }>
        <Text
          style={props.textStyle}
        >
          {props.children}
        </Text>
          {icon}
    </View>
  )
  if (props.disabled) {
    return content;
  }
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        { content }
      </TouchableNativeFeedback>
    )
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      { content }
    </TouchableOpacity>
  )
};

export default defaultButton;
