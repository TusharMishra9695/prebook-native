import { StyleSheet } from "react-native";
import { Colors } from "../utils/someExports";
const BatchDetailStyle = StyleSheet.create({
  sec01: {
    padding: 15,
  },
  sec02: {
    padding: 15,
  },
  sec03: {
    padding: 15,
  },
  inside_sec01: { flex: 1 },
  inside_sec02: { flex: 1 },
  inside_sec03: { flex: 1, padding: 15, color: Colors.primary },
  sec01_text: { fontSize: 13, fontWeight: "400", color: "#000" },
  sec02_text: { fontSize: 13, fontWeight: "400", color: "#000" },
  sec03_text: { fontSize: 13, fontWeight: "400", color: "#000" },
});
export default BatchDetailStyle;
