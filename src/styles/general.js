import colors from './colors';
import fonts from './fonts';
import metrics from './metrics';

const general = {
  container: {
    flex: 1,
    marginStart: metrics.baseHorinzontalMargin,
    marginEnd: metrics.baseHorinzontalMargin,
    paddingTop: metrics.baseTopMargin,
    marginBottom: metrics.baseBottomMargin,
    justifyContent: 'space-between',
  },

  button: {
    height: metrics.buttonHeight,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.buttonBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: fonts.defaultBold,
    fontSize: fonts.regularSize,
    color: colors.buttonText,
  },

  text: {
    fontFamily: fonts.defaultRegular,
    fontSize: fonts.regularSize,
    color: colors.text,
  },

  textInput: {
    paddingLeft: metrics.placeholderPadding,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: metrics.baseRadius,
    height: metrics.inputHeight,
    fontSize: fonts.regularSize,
    fontFamily: fonts.defaultRegular,
    backgroundColor: colors.inputBackground,
  },
};

export default general;
