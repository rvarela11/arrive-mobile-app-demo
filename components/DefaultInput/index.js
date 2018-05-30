import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const DefaultInput = props => (
    <TextInput
        placeholder={props.placeholder}
        {...props}
        onChangeText={(value) => {
            console.log('val', value)
            props.handleInputChange(value, props.field)}
        }
        style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]}
        underlineColorAndroid="transparent"
    />
);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderBottomColor: "#06C4DA",
        borderTopColor: "white",
        borderLeftColor: "white",
        borderRightColor: "white",
        padding: 5,
        marginTop: 8,
        marginBottom: 8
    },
    invalid: {
        backgroundColor: "#f9c0c0",
        borderColor: "red"
    }
});

export default DefaultInput;