/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
const SearchBar = () => {
  return (
    <View style={styles.search_container}>
      <TextInput placeholder="Ara..." style={styles.search_input} />
    </View>
  );
};
const styles = StyleSheet.create({
  search_input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#eceff1',
    borderRadius: 10,
  },
  search_container: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#eceff1',
    margin: 5,
  },
});
export default SearchBar;
