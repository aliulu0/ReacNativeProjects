import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';

const Input = ({placeholder, onType, value, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder={placeholder}
        value={value}
        onChangeText={onType}
        style={styles.input}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
