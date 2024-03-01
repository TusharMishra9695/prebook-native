import { StyleSheet } from "react-native";
import { Colors } from "../utils/someExports";

const ContactusStyle = StyleSheet.create({
  main: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    backgroundColor: Colors.primary,
    gap: 25,
  },
  overscreen: {
    width: "100%",
    gap: 5,
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 20,
    shadowColor: "grey",
    elevation: 10,
  },
  send_btn: {
    marginTop: 10,
    height: 40,
    borderRadius: 20,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    elevation: 10,
  },
  heading: {
    color: "purple",
    fontSize: 24,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  inside_heading: {
    color: "purple",
    fontSize: 12,
    fontWeight: "500",
  },
  talk_text: {
    color: "#212121",
    fontSize: 14,
    fontWeight: "500",
  },
  gap_us: {
    gap: 5,
    marginBottom: 25,
  },
});
export default ContactusStyle;
