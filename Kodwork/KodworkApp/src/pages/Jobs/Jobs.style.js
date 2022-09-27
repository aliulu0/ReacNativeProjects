import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    flex: 1,
    marginBottom: 10,
  },
  icon_container: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#ef5350',
    width: deviceSize.width / 6,
    height: deviceSize.width / 6,
    padding: 9,
    borderRadius: 20,
  },
});
