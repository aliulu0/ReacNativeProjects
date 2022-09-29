/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './Messages.style';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

//components
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal/ContentInputModal';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../components/card/MessageCard';

const Messages = ({route}) => {
  const {title: roomName} = route.params;
  const [inputVisibility, setInputVisibility] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);
  React.useEffect(() => {
    database()
      .ref(`rooms/${roomName}/messages/`)
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedContentData = parseContentData(contentData || {});
        setContentList(parsedContentData);
      });
  }, []);
  const handleInputToggle = () => {
    setInputVisibility(!inputVisibility);
  };
  const handleSendMessage = content => {
    handleInputToggle();
    const userName = auth().currentUser.email;
    const contentObject = {
      message: content,
      user: userName.split('@')[0],
      date: new Date().toISOString(),
    };
    database().ref(`rooms/${roomName}/messages/`).push(contentObject);
  };
  const renderContentList = ({item}) => {
    return <MessageCard message={item} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>{roomName} odası kuruldu!</Text>
      </View>
      <FlatList data={contentList} renderItem={renderContentList} />
      <ContentInputModal
        onClose={handleInputToggle}
        visible={inputVisibility}
        onSend={handleSendMessage}
        placeholder="Sohbet ekle..."
      />
      <FloatingButton icon={'plus'} onPress={handleInputToggle} />
    </View>
  );
};
export default Messages;
