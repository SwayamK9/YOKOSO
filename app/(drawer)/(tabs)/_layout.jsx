import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import Profile from './ProfileScreen';
const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
  <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
    <Tab.Screen name = "Home" component={HomeScreen}/>
    <Tab.Screen name = "Profile" component={Profile}/>
  </Tab.Navigator>);
}

export default TabNav

const styles = StyleSheet.create({})