import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import TabScreen from './TabScreen';
import { HOME_SCREEN } from './Routes';

export type RootStackParamList = {
  tabscreen: any
  homescreen: any
};
const AppRouter = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <RootStack.Navigator screenOptions={{
      headerShown: false,
      animation: 'slide_from_right',
      animationTypeForReplace: 'push',
      gestureEnabled: true,
      gestureDirection: 'horizontal',
    }}>
      <RootStack.Screen
        name={HOME_SCREEN}
        options={{ headerShown: false }}
        component={TabScreen}
      />
    </RootStack.Navigator>
  )
}

export default AppRouter
