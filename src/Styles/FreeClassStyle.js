import { StyleSheet } from "react-native";
import { Colors } from "../utils/someExports";

const FreeClassStyle = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  box: {
    flex: 1,
    padding: 35,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#fff",
  },
  top_text: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  slot_text: {
    fontSize: 14,
    color: "grey",
    fontWeight: "400",
    textAlign: "center",
  },
  time_radio: {
    height: 30,
    width: 120,
    borderRadius: 20,
    // backgroundColor: "#f3f5f7",
    borderWidth: 1,
    borderColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  selected_time: {
    height: 30,
    width: 120,
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  selected_time__text: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors.white,
    letterSpacing: 1,
  },
  time_text: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors.secondary,
    letterSpacing: 1,
  },
  slot_flexy: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
  },
  date_flexy: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#f3f5f7",
    alignItems: "center",
  },
  extra_margin: {
    marginTop: 20,
    overflow: "hidden",
  },
});
export default FreeClassStyle;
