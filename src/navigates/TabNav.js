import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Batch from "../screens/Batch";
import Alerts from "../screens/Alerts";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Foundation from "react-native-vector-icons/Foundation";
import More from "../screens/More";
import ClassNav from "./ClassNav";
const Tab = createBottomTabNavigator();
export default function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Classes"
      screenOptions={{
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="My Batch"
        component={Batch}
        options={{
          tabBarLabel: "My Batch",
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="local-library" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Classes"
        component={ClassNav}
        options={{
          tabBarLabel: "Classes",
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="batch-prediction" size={25} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen name="Alerts" component={Alerts} /> */}
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color }) => (
            <Foundation name="indent-more" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
