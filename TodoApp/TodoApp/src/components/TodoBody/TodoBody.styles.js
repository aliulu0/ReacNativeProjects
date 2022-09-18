import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    borderRadius: 5,
    margin: 5,
  },
  inner_container: {
    flex: 1,
  },
  input_area: {
    backgroundColor: '#37474f',
    borderRadius: 5,
    padding: 10,
  },
  input_text: {
    paddingHorizontal: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#78909c',
    color: '#808080',
  },
  input_button_empty: {
    alignItems: 'center',
    backgroundColor: '#808080',
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
  },
  input_button: {
    alignItems: 'center',
    backgroundColor: '#ffa500',
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
  },
  input_button_text: {
    color: 'white',
  },
});
