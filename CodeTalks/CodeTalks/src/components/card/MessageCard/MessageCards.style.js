import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 20,
  },
  inner_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  user: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontStyle: 'italic',
  },
  date: {
    color: '#000',
    fontStyle: 'italic',
  },
  message: {
    flex: 1,
    color: '#000',
    textAlign: 'justify',
    alignSelf: 'baseline',
    top: 7,
    fontSize: 15,
  },
});
