import { View } from "react-native";
import Login from "./src/screens/Login";
import GlobalStyles from "./src/Styles/GlobalStyle";
import TabNav from "./src/navigates/TabNav";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Checkout from "./src/screens/Checkout";
import ClassDetail from "./src/screens/ClassDetail";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import Contactus from "./src/screens/Contactus";
import Aboutandterms from "./src/screens/Aboutandterms";
import Profile from "./src/screens/Profile";
import FreeClass from "./src/screens/FreeClass";
import { Colors } from "./src/utils/someExports";
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
            <Stack.Screen
              name="Course Details"
              component={ClassDetail}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Contact Us"
              component={Contactus}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="About Us"
              component={Aboutandterms}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Terms and Conditions"
              component={Aboutandterms}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="My Profile"
              component={Profile}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="FreeClass"
              component={FreeClass}
              options={{
                title: "Book Free Class",
                headerShown: false,
                // headerStyle: {
                //   backgroundColor: Colors.primary,
                //   elevation: 0,
                //   borderBottomWidth: "transparent",
                // },
                // headerTintColor: "#212121",
              }}
            />
            <Stack.Screen name="Checkout" component={Checkout} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}
