import { StyleSheet } from 'react-native';
import { general } from '../../styles';

const styles = StyleSheet.create({
  timelineContainer: {
    flex: 1,
    marginStart: 30,
    marginTop: 10,
  },

  eventDetail: {
    paddingStart: 15,
    paddingEnd: 15,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  eventContainer: {
    paddingBottom: 60,
    paddingEnd: 30,
  },

  timeContainer: {
    minWidth: 80,
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 30,
  },

  ...general,
});

export default styles;
