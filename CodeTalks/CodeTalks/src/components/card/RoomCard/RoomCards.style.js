import {StyleSheet, Dimensions} from 'react-native';
const dimension = Dimensions.get('window');
import colors from '../../../styles/colors';
export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    height: dimension.height / 3,
    width: dimension.width / 2.2,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#cfcfcf',
  },
  room_title: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    color: colors.orange,
  },
});
