import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//pages
import DrawerNavigator from './navigations/DrawerNavigator';

const Router = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Router;
