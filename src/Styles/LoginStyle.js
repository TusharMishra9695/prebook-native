import { StyleSheet } from "react-native";
import { Colors } from "../utils/someExports";

const LoginStyles = StyleSheet.create({
  top: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: Colors.primary,
    borderRadius: 40,
  },
  box: {
    padding: 35,
    borderRadius: 40,
    height: "70%",
    backgroundColor: "#fff",
  },
  texts: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: "600",
    paddingBottom: 20,
  },
  submit_btn: {
    height: 45,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  submit_text: {
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 2,
    color: Colors.white,
  },
  msg: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "400",
  },
  msg2: {
    fontSize: 14,
    color: Colors.secondary, // "#FFB534"
    fontWeight: "500",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "center",
  },
});

export default LoginStyles;
