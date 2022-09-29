import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//pages
import Login from './pages/Auth/Login';
import Sign from './pages/Auth/Sign';
import Messages from './pages/Messages';
import Rooms from './pages/Rooms';
import colors from './styles/colors';
import {useSelector} from 'react-redux';
const Stack = createStackNavigator();

function App() {
  const [userSession, setUserSession] = React.useState();
  const currentRoom = useSelector(s => s.currentRoom);
  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);
  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      {!userSession ? (
        <AuthStack />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="RoomsPage"
            component={Rooms}
            options={{
              title: 'rooms',
              headerTintColor: colors.orange,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="MessagesPage"
            component={Messages}
            options={{
              title: currentRoom,
              headerTintColor: colors.orange,
              headerTitleAlign: 'center',
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  style={{marginRight: 10}}
                  color={colors.orange}
                  onPress={() => auth().signOut()}
                />
              ),
            }}
          />
        </Stack.Navigator>
      )}
      <FlashMessage
        position="top"
        autoHide={true}
        animated={true}
        duration={3000}
      />
    </NavigationContainer>
  );
}

export default App;
