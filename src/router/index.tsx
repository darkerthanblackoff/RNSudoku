import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTES } from '../constants';

import {
  MainScreen,
  GameScreen,
  LeaderBoardScreen,
  FinishScreen,
} from '../screens';

const Stack = createStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        gestureResponseDistance: { horizontal: -1, vertical: -1 },
      }}>
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
      <Stack.Screen
        name={ROUTES.FINISH_SCREEN}
        component={FinishScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          gestureResponseDistance: { horizontal: -1, vertical: -1 },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export { Router };
