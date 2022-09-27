import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ef5350',
    padding: 5,
    flexDirection: 'row',
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 2 - 25,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
