import { StyleSheet } from "react-native";
import { Colors } from "../utils/someExports";

const GlobalStyles = StyleSheet.create({
  common: {
    flex: 1,
  },
  input: {
    height: 45,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20,
    borderRadius: 20,
    backgroundColor: "#f3f5f7",
  },
  main: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 13,
    fontWeight: "500",
    color: Colors.secondary,
    letterSpacing: 1,
  },
  border: {
    justifyContent: "center",
    height: 0.5,
    backgroundColor: "#000",
    marginVertical: 10,
  },
  error: {
    fontSize: 12,
    fontWeight: "400",
    color: "red",
  },
});
export default GlobalStyles;
