import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "../navigation/TabNavigator"

import WeightGain from "../screens/WeightGain"
import LooseWeight from "../screens/LooseWeight";
import StayFit from "../screens/StayFit";

const Stack = createStackNavigator();

const StackNavigator=()=>{
  return (
   
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
         <Stack.Screen name="Home" component={TabNavigator} />
         <Stack.Screen name="WeightGain" component={WeightGain}/>
         <Stack.Screen name="LooseWeight" component={LooseWeight}/>
         <Stack.Screen name="StayFit" component={StayFit}/>

      </Stack.Navigator>
     
    
  );
    }

    export default StackNavigator;