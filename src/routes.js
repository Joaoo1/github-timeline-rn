import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import Search from './pages/Search';
import Timeline from './pages/Timeline';
import About from './pages/About';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Landing"
        screenOptions={{
          cardStyle: { backgroundColor: '#fff' },
          headerShown: false,
        }}
      >
        <Screen name="Landing" component={Landing} />
        <Screen name="Search" component={Search} />
        <Screen name="Timeline" component={Timeline} />
        <Screen name="About" component={About} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
