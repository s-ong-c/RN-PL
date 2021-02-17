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
import Snapchat from '../screen/Snapchat';
import StoryComp from '../screen/Story';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {SnapchatRoutes, Story} from '../../types/Model';

export type StackParamList = {
  Main: undefined;
  Auth: undefined;
  Snapchat: undefined;
  Story: {story: Story};
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
      <Stack.Screen name="Main" component={Snapchat} />
      {/* <Stack.Screen name="Story" component={StoryComp} /> */}
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
