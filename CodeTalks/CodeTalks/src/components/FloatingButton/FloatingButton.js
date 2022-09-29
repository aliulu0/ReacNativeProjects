import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './FloatingButton.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButton = ({onPress, icon = 'plus'}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} size={30} color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatingButton;
