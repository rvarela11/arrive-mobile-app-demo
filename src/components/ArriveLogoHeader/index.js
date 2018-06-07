import React from 'react';
import { View, ImageBackground } from 'react-native';
import arriveLogo from '../../assets/arrive-logo.png';
import styles from './styles';

const ArriveLogoHeader = () => (
    <View style={styles.arriveLogoContainer}>
        <ImageBackground source={arriveLogo} style={styles.arriveLogo}></ImageBackground>
    </View>
);

export default ArriveLogoHeader;