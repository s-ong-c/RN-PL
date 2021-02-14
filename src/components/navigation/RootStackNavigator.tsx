import React, {useEffect, useState} from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';
import auth from '@react-native-firebase/auth';
import MainStack from '../navigation/MainStackNavigator';

export type StackParamList = {
  Loading: undefined;
  MainStack: undefined;
};

export type RootStackNavigationProps<
  T extends keyof StackParamList = 'MainStack'
> = StackNavigationProp<StackParamList, T>;

const Stack = createStackNavigator<StackParamList>();

function RootStackNavigator(): React.ReactElement {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackNavigator;
