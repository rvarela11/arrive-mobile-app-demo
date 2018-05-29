import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, View, Text, StyleSheet, Platform } from 'react-native';

const buttonWithBackground = props => {
  const content = (
    <View style={[styles.button, props.disabled ? styles.disabled : null]}>
        <Text style={{color: props.textColor}}>{props.children}</Text>
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
      borderRadius: 10
  },
  disabled: {
    backgroundColor: '#eee'
  }
})

export default buttonWithBackground;
