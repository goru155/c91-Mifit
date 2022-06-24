import React from 'react';
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";
import HomeScreen from "../screens/HomeScreen";
import BMI from "../screens/BMI";

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
        labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'HomeScreen') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'BMI') {
                        iconName = focused ? 'heart-half' : 'heart-half-outline';
                        
                    }
                    return <Ionicons name={iconName} size={25} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
            <Tab.Screen name="BMI" component={BMI} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#DC1C13",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
});
export default BottomTabNavigator