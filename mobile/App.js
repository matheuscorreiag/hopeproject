import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';

export default function App() {

  let [fontsLoaded] = useFonts([
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  ]);

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <NavigationContainer>
      <StatusBar translucent />
      <Routes />
    </NavigationContainer>

  );
}
