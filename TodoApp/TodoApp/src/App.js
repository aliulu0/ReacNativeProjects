import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TodoBody from './components/TodoBody';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoBody />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
});

export default App;
