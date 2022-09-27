import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//pages
import Jobs from '../pages/Jobs';
import JobDetail from '../pages/JobDetail';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobsPage"
        component={Jobs}
        options={{
          headerTitle: 'Jobs',
          headerTintColor: '#ef5350',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="JobDetailPage"
        component={JobDetail}
        options={({route}) => ({
          title: route.params.name,
          headerTintColor: '#ef5350',
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
