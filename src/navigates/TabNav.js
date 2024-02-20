import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Batch from "../screens/Batch";
import Alerts from "../screens/Alerts";
import More from "../screens/More";
import ClassNav from "./ClassNav";
const Tab = createBottomTabNavigator();
export default function TabNav() {
  return (
    <Tab.Navigator initialRouteName="Classes">
      <Tab.Screen name="My Batch" component={Batch} />
      <Tab.Screen name="Classes" component={ClassNav} />
      {/* <Tab.Screen name="Alerts" component={Alerts} /> */}
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}
