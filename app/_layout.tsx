
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './(drawer)/_layout';
const Stack = createStackNavigator();
export default function RootLayout() {
  return (
    
  <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Drawer" component={DrawerNav}/>
    </Stack.Navigator>
    
    );
}
