import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import GlobalStyles from "./src/Styles/GlobalStyle";
import Courses from "./src/screens/Courses";
import TabNav from "./src/navigates/TabNav";
import StackNav from "./src/navigates/StackNav";

export default function App() {
  return (
    <View style={GlobalStyles.common}>
      <StatusBar style="auto" />
      <TabNav />
    </View>
  );
}
