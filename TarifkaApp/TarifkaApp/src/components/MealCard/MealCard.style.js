import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    height: deviceSize.height / 4,
    width: deviceSize.width - 20,
    resizeMode: 'contain',
    flex: 1,
  },
  inner_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  info_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: deviceSize.width - 20,
    padding: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    flexDirection: 'row',
    flex: 1,
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'right',
    bottom: 0,
  },
});
