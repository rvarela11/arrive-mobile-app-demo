import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    avatarContainer: {
      minHeight: 100,
      width: '25%',
    },
    avatar: {
      height: '100%',
      width: '100%',
    },
    infoContainer: {
      marginLeft: 20,
      width: '85%',
    },
    infoContainer__title: {
      minHeight: 25
    },
    infoContainer__subTitle: {
      minHeight: 75
    },
    text: {
      marginBottom: 2,
      marginTop: 2,
    },
    textTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    textDocType: {
      color: '#86939e',
      fontWeight: '600',
    },
    textNotes: {
      lineHeight: 18
    }
});

export default styles;
