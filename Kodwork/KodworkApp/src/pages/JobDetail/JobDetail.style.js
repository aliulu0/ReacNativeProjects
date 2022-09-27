import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_container: {
    backgroundColor: '#eceff1',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#37474f',
  },
  location_container: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  locations_title: {
    color: '#ef5350',
    fontWeight: 'bold',
  },
  locations_text: {
    color: 'black',
  },
  detail_header: {
    textAlign: 'center',
    fontSize: 22,
    color: '#30336b',
  },
  level_container: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  level_title: {
    color: '#ef5350',
    fontWeight: 'bold',
  },
  level_text: {
    color: 'black',
  },
  detail: {
    textAlign: 'center',
    fontSize: 22,
    color: '#37474f',
    fontWeight: 'bold',
  },
  description_container: {
    flex: 1,
    padding: 2,
    borderWidth: 0.2,
  },
  description_container_text: {
    fontSize: 16,
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
});
