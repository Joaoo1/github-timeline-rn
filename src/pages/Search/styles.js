import { StyleSheet } from 'react-native';

import { general } from '../../styles';

const styles = StyleSheet.create({
  centeredText: {
    ...general.text,
    textAlign: 'center',
    marginBottom: 25,
  },

  ...general,
});

export default styles;
