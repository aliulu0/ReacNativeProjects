import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Rooms.style';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
//components
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal/ContentInputModal';
import RoomCard from '../../components/card/RoomCard';

//utils
import parseContentData from '../../utils/parseContentData';
import Button from '../../components/Button';

const Rooms = ({navigation}) => {
  const [inputVisibility, setInputVisibility] = React.useState(false);
  const [roomList, setRoomList] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(auth().currentUser.email);
    database()
      .ref('rooms/')
      .on('value', snapshot => {
        const contentList = snapshot.val();
        const parsedList = parseContentData(contentList || {});
        console.log(parsedList);
        setRoomList(parsedList);
      });
  }, []);
  const handleInputToggle = () => {
    setInputVisibility(!inputVisibility);
  };
  const handleCreateRoom = content => {
    handleInputToggle();
    const contentObject = {
      title: content,
      date: new Date().toISOString(),
    };
    console.log(contentObject);
    database().ref(`rooms/${content}`).set(contentObject);
  };
  const handleEnterRoom = title => {
    dispatch({type: 'ROOM_NAME', payload: {title}});
    navigation.navigate('MessagesPage', {title});
  };
  const renderRooms = ({item}) => {
    return (
      <RoomCard
        roomName={item.title}
        onPress={() => handleEnterRoom(item.title)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={roomList}
        renderItem={renderRooms}
        style={styles.room}
      />
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputVisibility}
        onClose={handleInputToggle}
        onSend={handleCreateRoom}
        placeholder="Oda ekle..."
      />
      <Button text="sil" onPress={() => database().ref('rooms/').remove()} />
    </View>
  );
};

export default Rooms;
