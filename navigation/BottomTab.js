import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Home,
    Analysis,
    Tree
} from '../screens';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator 
    screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Analysis" component={Analysis} />
      <Tab.Screen name="Tree" component={Tree} />
    </Tab.Navigator>
  );
}
export default BottomTab