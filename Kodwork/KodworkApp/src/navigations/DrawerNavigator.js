import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import FavoritedJob from '../pages/FavoritedJob';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="StackNavigatorDrawer"
        component={StackNavigator}
        options={{headerShown: false, title: 'Jobs'}}
      />
      <Drawer.Screen
        name="FavoritedJobDrawer"
        component={FavoritedJob}
        options={{headerShown: false, title: 'Favorite Jobs'}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
