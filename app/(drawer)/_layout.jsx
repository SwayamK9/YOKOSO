
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from './(tabs)/_layout';
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return(
  <Drawer.Navigator
  screenOptions={{
    drawerStyle:{
      backgroundColor:"#2b2a2bff",
      borderColor:'black',
      width:250,
      padding:2,
    },
    drawerLabelStyle:{
      color:"white"
    },
    drawerItemStyle:{
      backgroundColor:'#52abd7ff',
      marginBottom:10,
      opacity: 0.6,
    },
    drawerType:'slide',
    headerTitleAlign:'center',
    headerTitleStyle:{
      fontSize:22,
      fontWeight:'bold',
      marginRight:40,
    },
    headerStyle:{
      backgroundColor:'#2a2b2bff',
      elevation:0,
    },
    headerTintColor:'white',
  }}

  sceneContainerStyle={{ backgroundColor: '#0f0f0f' }}
  >
    <Drawer.Screen name="Home" component={TabNav} options={{title:'Home'}}
    />
    <Drawer.Screen name="Profile" component={TabNav} options={{title:'Profile'}}/>
  </Drawer.Navigator>
  );
}

export default DrawerNav