import { StatusBar } from 'expo-status-bar'; 
// status bar is the device info at the top, e.g., time, battery, wifi, etc.

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, DetailScreen, NavControls, NewTaskModal } from './components/components.js';
import { DefaultLightTheme, DefaultDarkTheme } from './components/themes.js';

const Stack = createNativeStackNavigator();

export default function App() {

  // "dark" is replaced by useColorScheme() && setting chosen in prod
  const scheme = "dark";

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

          <Stack.Screen
          name="New Task"
          component={NewTaskModal}
          options={{presentation: "transparentModal", headerShown: false}}/>

        </Stack.Navigator>
        <NavControls />
      </NavigationContainer>
    </>
  )
}

export { Stack };

/*

TODO: Provide theme, tasks, lists, as context?
TODO: Implement movement between categories, deletion

*/

/*
Navigation Docs - https://reactnavigation.org/docs/ 
Native Docs - https://reactnative.dev/docs/getting-started
Expo Docs - https://docs.expo.dev/
*/