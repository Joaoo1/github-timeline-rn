import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import Search from './pages/Search';
import Timeline from './pages/Timeline';
import About from './pages/About';

const { Navigator, Screen } = createStackNavigator();

const headerOptions = {
  title: 'GitHub Timeline',
  headerTitleStyle: {
    fontFamily: 'PoppinsRegular',
    marginStart: '15%', // Work around to center the title
    marginTop: 3, // Title seems to be far up
  },
};

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Landing">
        <Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Screen name="Search" component={Search} options={headerOptions} />
        <Screen name="Timeline" component={Timeline} options={headerOptions} />
        <Screen name="About" component={About} options={headerOptions} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
