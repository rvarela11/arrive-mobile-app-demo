import { StyleSheet } from 'react-native';
import styleVariables from '../../../style-variables';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 5,
    marginTop: 8,
    marginBottom: 8,
  },
  invalid: {
    backgroundColor: '#f9c0c0',
    borderColor: 'red'
  }
});

export default styles;
