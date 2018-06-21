import { StyleSheet } from 'react-native';
import styleVariables from '../../../style-variables';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    marginBottom: 8,
    marginTop: 8,
    padding: 5,
    width: '100%',
  },
  invalid: {
    backgroundColor: styleVariables.red,
    borderColor: 'red'
  }
});

export default styles;
