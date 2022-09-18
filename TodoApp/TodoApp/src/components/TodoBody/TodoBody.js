/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import TodoHeader from '../TodoHeader';
import styles from './TodoBody.styles';
const TodoBody = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn React',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Learn React Native',
      isCompleted: false,
    },
  ]);
  const addTodo = () => {
    if (input !== '') {
      const newTodo = {
        id: Math.floor(Math.random() * 100),
        title: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
    setInput('');
  };
  const updateTodo = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const deleteTodo = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <View style={styles.container}>
      <TodoHeader todos={todos} />
      <View style={styles.inner_container}>
        <ScrollView>
          {todos.map(todo => (
            <View
              style={{
                backgroundColor: todo.isCompleted ? '#37474f' : '#7da453',
                marginBottom: 10,
                padding: 10,
                borderRadius: 10,
              }}
              key={todo.id}>
              <Text
                onLongPress={() => deleteTodo(todo.id)}
                onPress={() => updateTodo(todo.id)}
                key={todo.id}
                style={{
                  fontSize: 24,
                  color: todo.isCompleted ? '#e0e0e0' : 'white',
                  textDecorationLine: todo.isCompleted
                    ? 'line-through'
                    : 'none',
                }}>
                {todo.title}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.input_area}>
          <TextInput
            value={input}
            placeholder="Yapılacak..."
            placeholderTextColor={'#808080'}
            style={styles.input_text}
            onChangeText={text => setInput(text)}
          />
          <TouchableOpacity
            onPress={addTodo}
            style={
              input.length > 0 ? styles.input_button : styles.input_button_empty
            }>
            <Text style={styles.input_button_text}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TodoBody;
