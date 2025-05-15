/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import AuthPage from './src/authPage';
import ChatWindow from './src/chatWindow';
import NamePage from './src/namePage';
import GenderPage from './src/genderPage';
import CoachList from './src/coachList';
import FreeChatPage from './src/freeChatPage';


const Stack = createNativeStackNavigator();

// Define the initial route here
const initialRoute = "ChatWindow"; // Change this value to set a different initial route


export default function App() {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const loadInitialRoute = async () => {
      try {
        const storedRoute = await AsyncStorage.getItem('initialRoute');
        setInitialRoute(storedRoute || 'AuthPage'); // Default to 'AuthPage' if no value is stored
      } catch (error) {
        console.error('Failed to load initial route:', error);
        setInitialRoute('AuthPage'); // Fallback in case of error
      }
    };

    loadInitialRoute();
  }, []);

  if (!initialRoute) {
    // Render a loading screen or null while the initial route is being determined
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="AuthPage"
          component={AuthPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatWindow"
          component={ChatWindow}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NamePage"
          component={NamePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GenderPage"
          component={GenderPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CoachesList"
          component={CoachList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FreeChatPage"
          component={FreeChatPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}