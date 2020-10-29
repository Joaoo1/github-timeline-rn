import colors from './colors';
import fonts from './fonts';
import metrics from './metrics';

const general = {
  button: {
    height: metrics.buttonHeight,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.buttonBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: fonts.regular,
    color: colors.buttonText,
  },
  text: {
    fontFamily: 'PoppinsRegular',
    fontSize: fonts.regular,
    color: colors.text,
  }
};

export default general;
