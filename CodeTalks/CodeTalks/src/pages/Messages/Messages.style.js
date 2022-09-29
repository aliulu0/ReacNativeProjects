import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ligtOrange,
  },
  header_container: {
    backgroundColor: colors.ligtOrange,
    marginHorizontal: 20,
    marginVertical: 5,
    justifyContent: 'center',
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'dashed',
  },
  header: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
