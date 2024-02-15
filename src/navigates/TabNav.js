import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Courses from "../screens/Courses";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import Batch from "../screens/Batch";
import Alerts from "../screens/Alerts";
const Tab = createBottomTabNavigator();
export default function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Courses" component={Courses} />
        <Tab.Screen name="Alerts" component={Alerts} />
        <Tab.Screen name="My Batch" component={Batch} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
