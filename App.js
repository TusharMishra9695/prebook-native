import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import GlobalStyles from "./src/Styles/GlobalStyle";
import Courses from "./src/screens/Courses";
import TabNav from "./src/navigates/TabNav";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={GlobalStyles.common}>
        <TabNav />
      </View>
    </NavigationContainer>
  );
}
