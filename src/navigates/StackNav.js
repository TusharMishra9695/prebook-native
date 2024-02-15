import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import BatchDetail from "../screens/BatchDetail";
const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <NavigationContainer initialRouteName="Classes">
      <Stack.Navigator>
        <Stack.Screen name="Details" component={BatchDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
