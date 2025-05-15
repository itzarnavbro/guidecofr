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


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={AuthPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatWindow}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Name"
          component={NamePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Gender"
          component={GenderPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Coaches"
          component={CoachList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FreeChat"
          component={FreeChatPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
