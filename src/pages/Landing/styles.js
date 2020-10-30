import { StyleSheet } from 'react-native';

import { general, fonts } from '../../styles';

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.defaultRegular,
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 50,
  },

  centeredText: {
    textAlign: 'center',
    ...general.text,
  },

  image: {
    marginStart: 20,
  },

  ...general,
});

export default styles;
