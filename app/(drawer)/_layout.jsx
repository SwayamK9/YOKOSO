import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from './(tabs)/_layout';
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return(
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabNav} options={{title:'Home'}}/>
    <Drawer.Screen name="Profile" component={TabNav} options={{title:'Profile'}}/>
  </Drawer.Navigator>
  );
}

export default DrawerNav