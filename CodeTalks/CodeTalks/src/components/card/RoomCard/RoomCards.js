import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './RoomCards.style';

const RoomCard = ({roomName, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.room_title}>{roomName}</Text>
    </TouchableOpacity>
  );
};
export default RoomCard;
