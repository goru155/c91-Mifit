import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/HomeScreen"
import { createStackNavigator } from '@react-navigation/stack';
import LoseWeight from './screens/LoseWeight'
import GainWeight from './screens/GainWeight'
import StayFit from './screens/StayFit'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='GainWeight' component={LoseWeight}/>
      <Stack.Screen name='LoseWeight' component={GainWeight}/>
      <Stack.Screen name='StayFit' component={StayFit}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}