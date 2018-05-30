import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, View, Text, StyleSheet, Platform } from 'react-native';

const defaultButton = props => {
  const content = (
    <View
      {...props}
      style={[
        styles.button,
        props.style,
        props.disabled ? styles.disabled : null]
      }>
        <Text
          style={props.textStyle}
        >{props.children}</Text>
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

const styles = StyleSheet.create({
  button: {
      padding: 10,
      margin: 5,
      borderRadius: 2,
      alignItems: 'center'
  },
  disabled: {
    backgroundColor: '#eee'
  }
})

export default defaultButton;
