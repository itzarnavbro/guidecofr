/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
