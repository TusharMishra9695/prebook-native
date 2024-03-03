import { View, Text, StatusBar } from "react-native";
import FreeClassStyle from "../Styles/FreeClassStyle";
import { Colors } from "../utils/someExports";

export default function FreeClass() {
  return (
    <View style={FreeClassStyle.top}>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <View style={FreeClassStyle.box}></View>
    </View>
  );
}
