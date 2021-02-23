import {
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import Main from '../screen/Main';
import {Platform} from 'react-native';
import React from 'react';

export type StackParamList = {
  Main: undefined;
  Auth: undefined;
};

export type StackNavigationProps<
  T extends keyof StackParamList = 'Main'
> = StackNavigationProp<StackParamList, T>;

const Stack = createStackNavigator<StackParamList>();

function MainStackNavigator(): React.ReactElement {
  const platformAnimation = () => {
    if (Platform.OS === 'android') {
      return {
        ...TransitionPresets.FadeFromBottomAndroid,
        headerShown: false,
      };
    }

    return {
      headerShown: false,
      ...TransitionPresets.DefaultTransition,
    };
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: false,
        cardShadowEnabled: false,
        cardStyle: {backgroundColor: 'transparent'},
      }}>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
