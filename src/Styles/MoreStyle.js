import { StyleSheet } from "react-native";
import { Colors } from "../utils/someExports";

const MoreStyle = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Colors.primary,
  },
  list: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  list_txt: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: "400",
    color: "#000",
  },
});
export default MoreStyle;
