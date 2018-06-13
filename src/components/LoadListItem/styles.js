import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    avatarContainer: {
      width: '25%',
      minHeight: 100
    },
    avatar: {
      width: '100%',
      height: '100%'
    },
    infoContainer: {
      width: '85%',
      marginLeft: 20
    },
    infoContainer__title: {
      minHeight: 25
    },
    infoContainer__subTitle: {
      minHeight: 75
    },
    text: {
      marginTop: 2,
      marginBottom: 2,
    },
    textTitle: {
      fontWeight: 'bold',
      fontSize: 16
    },
    textDocType: {
      color: '#86939e',
      fontWeight: '600'
    },
    textNotes: {
      lineHeight: 18
    }
});

export default styles;
