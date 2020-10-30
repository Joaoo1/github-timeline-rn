import { StyleSheet } from 'react-native';

import { general, fonts } from '../../styles';

const styles = StyleSheet.create({
  centeredText: {
    ...general.text,
    textAlign: 'center',
    fontFamily: fonts.defaultLight,
    marginBottom: 20,
  },

  rightText: {
    ...general.text,
    textAlign: 'right',
    fontFamily: fonts.defaultLight,
  },

  ...general,
});

export default styles;
