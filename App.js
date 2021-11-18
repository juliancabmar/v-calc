import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Calculator } from './screens/calculator';
import { VeroyJuly } from './screens/secrets';

global.screen = '';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="V-Calc">
        <Stack.Screen name="V-Calc" component={Calculator} />
        <Stack.Screen name="Vero + July" component={VeroyJuly} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



