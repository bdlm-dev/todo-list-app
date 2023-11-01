import { StatusBar } from 'expo-status-bar'; 
// status bar is the device info at the top, e.g., time, battery, wifi, etc.
import React, {useState, useEffect} from 'react';
import { Text, View, Button, useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, DetailScreen, NavControls } from './components/components.js';
import { DefaultLightTheme, DefaultDarkTheme } from './components/themes.js';

const Stack = createNativeStackNavigator();

export default function App() {

  const scheme = "dark";

  // Use context to provide props to screens

  return (
    <>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'}/>
      <NavigationContainer theme={scheme === 'dark' ? DefaultDarkTheme : DefaultLightTheme}>
        <Stack.Navigator initialRouteName="Home" className="flex-grow">
          
          <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home', headerShown: false }}/>
          
          <Stack.Screen 
          name="Settings"
          component={DetailScreen}
          options={{ title: 'Settings' }}/>

        </Stack.Navigator>
        <NavControls />
      </NavigationContainer>
    </>
  )
}

export { Stack };

/*

TODO: Make own light/dark themes DONE





*/

  /*
  const theme = useColorScheme();

  const statusBarHeight = Constants.statusBarHeight || 0;
  const [hidden, setHidden] = useState(false);

  const STYLES = ["light", "dark"];

  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [styleIndex, setStyleIndex] = useState(0);

  return (
    <View className="flex-grow items-center bg-stone-800" style={{paddingTop: statusBarHeight}}>
      <StatusBar
      style={statusBarStyle}
      hidden={hidden} />
      <Text>Open up App.js to start working on your app!</Text>
      <Button 
      onPress={() => {setStyleIndex((styleIndex+1) % STYLES.length); setStatusBarStyle(STYLES[styleIndex]);}}
      title="Click me"
      color="#ffff7f"
      />
    </View>
  );
  */

/*
Navigation Docs - https://reactnavigation.org/docs/ 
Native Docs - https://reactnative.dev/docs/getting-started
Expo Docs - https://docs.expo.dev/
*/
