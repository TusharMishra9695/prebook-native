import { StyleSheet } from "react-native";
import { Colors } from "../utils/someExports";
const BatchDetailStyle = StyleSheet.create({
  main: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    gap: 20,
  },
  section: {
    flex: 1,
    gap: 20,
  },
  heading: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.secondary,
    letterSpacing: 1,
  },
  wrapper_text_points: {
    fontSize: 12,
    fontWeight: "500",
    color: "#212121",
  },
  inside_sec02: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primary,
    borderRadius: 8,
  },
  inside_sec02_text: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  wrapper: {
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#f6f8fa",
  },
  wrapper_text: {
    fontSize: 12,
    fontWeight: "400",
    color: "#212121",
  },
  endFaq: {
    marginBottom: 20,
  },
  points_wrapper: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  extra_pad: {
    paddingTop: 15,
    paddingBottom: 25,
  },
});
export default BatchDetailStyle;
