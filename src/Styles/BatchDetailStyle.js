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

  inside_sec01: { flex: 1 },
  inside_sec02: { flex: 1 },
  inside_sec03: { flex: 1, color: Colors.primary },
});
export default BatchDetailStyle;
