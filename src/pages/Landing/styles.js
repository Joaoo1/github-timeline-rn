import { StyleSheet } from 'react-native';

import { general, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginStart: metrics.baseHorinzontalMargin,
    marginEnd: metrics.baseHorinzontalMargin,
    paddingTop: metrics.baseVerticalMargin,
    marginBottom: metrics.baseVerticalMargin,
  },
  title: {
    fontFamily: 'PoppinsRegular',
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 50,
  },
  image: {
    margin: 20,
  },
  ...general,
});

export default styles;
