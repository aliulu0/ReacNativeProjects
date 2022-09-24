import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    backgroundColor: '#eceff1',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    textAlign: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bcaaa4',
  },
  image: {
    width: 100,
    minHeight: 100,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
