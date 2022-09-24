import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginHorizontal: 5,
  },
  inner_container: {
    padding: 5,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 4,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    color: '#a52a2a',
    fontWeight: 'bold',
  },
  area: {
    fontSize: 18,
    color: '#a52a2a',
    fontWeight: 'bold',
  },
  separator: {
    borderBottomColor: '##bdbdbd',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  description: {
    padding: 5,
  },
  button: {
    backgroundColor: '#ff0000',
    margin: 5,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ff0000',
  },
  button_link: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
  },
});
