import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  company: {
    fontSize: 15,
    color: 'black',
    marginVertical: 2,
  },
  location_container: {
    flexWrap: 'wrap',
  },
  location: {
    fontSize: 17,
    color: 'white',
    backgroundColor: '#ef5350',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  level: {
    fontSize: 15,
    textAlign: 'right',
    color: '#ef5350',
    fontWeight: 'bold',
  },
});
