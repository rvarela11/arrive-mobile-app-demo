import { View, Text, Button } from 'react-native';
import React from 'react';
import startTabs from '../MainTabs';

const LoginScreen = () => (
    <View>
        <Text>Auth</Text>
        <Button 
            onPress={startTabs}
            title="Log In"
        />
    </View>
);

export default LoginScreen;