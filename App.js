import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import GlobalStyles from "./src/Styles/GlobalStyle";

export default function App() {
  return (
    <View style={GlobalStyles.common}>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}
