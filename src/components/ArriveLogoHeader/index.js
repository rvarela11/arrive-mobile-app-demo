// Vendors
import React from 'react';
import { View, ImageBackground } from 'react-native';

// Assets
import arriveLogo from '../../assets/arrive-logo.png';

// Styles
import styles from './styles';

const ArriveLogoHeader = () => (
    <View style={styles.arriveLogoContainer}>
        <ImageBackground source={arriveLogo} style={styles.arriveLogo}></ImageBackground>
    </View>
);

export default ArriveLogoHeader;
