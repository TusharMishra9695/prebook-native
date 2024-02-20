import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login";
import GlobalStyles from "./src/Styles/GlobalStyle";
import Courses from "./src/screens/Courses";
import TabNav from "./src/navigates/TabNav";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassNav from "./src/navigates/ClassNav";
import Checkout from "./src/screens/Checkout";
import ClassDetail from "./src/screens/ClassDetail";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
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
            <Stack.Screen name="Checkout" component={Checkout} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}
