/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
enableScreens();
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Splash from './screens/splash/Splash';
// import Home from './screens/Home/Home';
import { DARK_BLUE } from './components/Color';
import AppRouter from './components/Routes/AppRouter';
import TabScreen from './components/Routes/TabScreen';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor={DARK_BLUE}/>
      <NavigationContainer theme={DefaultTheme}>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="TabScreen" component={TabScreen} />
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
        {/* <AppRouter/> */}
      </NavigationContainer>
    
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
