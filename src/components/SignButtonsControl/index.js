// Vendors
import React from 'react';
import { View } from 'react-native';

// Components
import DefaultButton from '../UI/DefaultButton';

// Styles
import styles from './styles';

const SignButtonsControl = (props) => {
    return (
        <View style={styles.signButtonsContainer}>
            <DefaultButton
                textStyle={styles.signButtons__Text}
                onPress={() => props.switchAuthModelHandler('SIGN UP')}
            > SIGN UP </DefaultButton>
            <DefaultButton
                textStyle={styles.signButtons__Text}
                onPress={() => props.switchAuthModelHandler('SIGN IN')}
            > SIGN IN </DefaultButton>
        </View>
    );
}

export default SignButtonsControl;
