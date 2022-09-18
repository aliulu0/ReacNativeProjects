import React from 'react';
import {View, Text} from 'react-native';
import styles from './TodoHeader.style';
const TodoHeader = ({todos}) => {
  const filteredTodos = todos.filter(todo => !todo.isCompleted);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.todo_length}>{filteredTodos.length}</Text>
    </View>
  );
};

export default TodoHeader;
