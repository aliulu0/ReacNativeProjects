import React from 'react';
import styles from './Button.style';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({icon, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} size={24} color="#fff" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
