import React from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import StoreCard from './components/StoreCard';
import store_data from './store_data.json';
import SearchBar from './components/SearchBar';

function App() {
  const renderItem = ({item}) => <StoreCard product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <FlatList
        numColumns={2}
        ListHeaderComponent={<SearchBar />}
        keyExtractor={item => item.id.toString()}
        data={store_data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800080',
    margin: 5,
  },
});

export default App;
