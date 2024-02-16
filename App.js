import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login";
import GlobalStyles from "./src/Styles/GlobalStyle";
import Courses from "./src/screens/Courses";
import TabNav from "./src/navigates/TabNav";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassNav from "./src/navigates/ClassNav";
import ClassDetail from "./src/screens/ClassDetail";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <View style={GlobalStyles.common}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Course"
            component={TabNav}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
