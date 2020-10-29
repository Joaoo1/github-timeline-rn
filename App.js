/* eslint-disable react/style-prop-object */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import {
  Poppins_400Regular as PoppinsRegular,
  Poppins_300Light as PoppinsLight,
  Poppins_600SemiBold as PoppinsSemiBold,
  useFonts,
} from '@expo-google-fonts/poppins';

import AppStack from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsLight,
    PoppinsRegular,
    PoppinsSemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <AppStack />
      <StatusBar style="dark" />
    </>
  );
}
