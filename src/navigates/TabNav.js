import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Courses from "../screens/Courses";
import Batch from "../screens/Batch";
import Alerts from "../screens/Alerts";
import More from "../screens/More";
const Tab = createBottomTabNavigator();
export default function TabNav() {
  return (
    <NavigationContainer initialRouteName="Classes">
      <Tab.Navigator>
        <Tab.Screen name="My Batch" component={Batch} />
        <Tab.Screen name="Classes" component={Courses} />
        <Tab.Screen name="Alerts" component={Alerts} />
        <Tab.Screen name="Profile" component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
