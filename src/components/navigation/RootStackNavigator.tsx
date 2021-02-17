import React, {useEffect, useState} from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MainStack from '../navigation/MainStackNavigator';
import Loading from '../screen/Loading';

export type StackParamList = {
  Loading: undefined;
  MainStack: undefined;
  Snapchat: undefined;
  Story: undefined;
};

export type RootStackNavigationProps<
  T extends keyof StackParamList = 'MainStack'
> = StackNavigationProp<StackParamList, T>;

const Stack = createStackNavigator<StackParamList>();

function RootStackNavigator(): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
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
        {loading ? (
          <Stack.Screen name="Loading" component={Loading} />
        ) : (
          <>
            <Stack.Screen name="MainStack" component={MainStack} />
            <Stack.Screen name="Snapchat" component={MainStack} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackNavigator;
