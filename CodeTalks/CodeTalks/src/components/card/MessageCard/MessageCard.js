import React from 'react';
import {View, Text} from 'react-native';
import styles from './MessageCards.style';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';
const MessageCard = ({message, onPress}) => {
  let formatedDate;
  if (message) {
    formatedDate = formatDistance(parseISO(message.date), new Date(), {
      addSuffix: true,
      locale: tr,
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.user}</Text>
        <Text style={styles.date}>{formatedDate}</Text>
      </View>
      <Text style={styles.message}>{message.message}</Text>
    </View>
  );
};
export default MessageCard;
