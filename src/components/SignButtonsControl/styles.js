import { StyleSheet } from 'react-native';
import styleVariables from '../../style-variables';

const styles = StyleSheet.create({
    signButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      },
    signButtons__Text: {
        color: styleVariables.arriveBlue
    }
});

export default styles;