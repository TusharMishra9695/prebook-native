import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Courses from "../screens/Courses";
import ClassDetail from "../screens/ClassDetail";
const Stack = createNativeStackNavigator();

export default function ClassNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Course"
        component={Courses}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={ClassDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
