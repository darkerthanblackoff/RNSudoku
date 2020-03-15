import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTES } from '../constants';

import { MainScreen, GameScreen, LeaderBoardScreen } from '../screens';

const Stack = createStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.MAIN}
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.GAME}
        component={GameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.LEADER_BOARD}
        component={LeaderBoardScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export { Router };
