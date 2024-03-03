import { StyleSheet } from "react-native";
import { Colors } from "../utils/someExports";

const FreeClassStyle = StyleSheet.create({
  top: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: Colors.primary,
  },
  box: {
    padding: 35,
    borderRadius: 40,
    height: "90%",
    backgroundColor: "#fff",
  },
});
export default FreeClassStyle;
