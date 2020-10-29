import { StyleSheet } from 'react-native';

import { general, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginStart: metrics.baseHorinzontalMargin,
    marginEnd: metrics.baseHorinzontalMargin,
  },
  title: {
    fontFamily: 'PoppinsRegular',
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 90,
  },
  ...general,
});

export default styles;
