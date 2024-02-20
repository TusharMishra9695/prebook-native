import { StyleSheet } from "react-native";
import { Colors } from "../utils/someExports";
const CheckoutStyle = StyleSheet.create({
  main: { flex: 1, backgroundColor: Colors.white, paddingTop: 10 },
  flexy: { flex: 1, flexDirection: "row", gap: 10 },
  footer: {
    flex: 1,
    gap: 15,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 15,
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 10,
  },
  items: {
    gap: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  items_list: {
    // flex: 1,
    // flexDirection: "row",
    gap: 10,
    borderWidth: 1, // Border width
    borderColor: "#d3d3d3", // Border color
    borderRadius: 10,
    padding: 10,
  },
  checkout_btn: {
    flex: 1,
    padding: 14,
    borderRadius: 5,
    backgroundColor: Colors.secondary,
  },
  checkout_text: {
    textAlign: "center",
    fontSize: 15,
    textTransform: "uppercase",
    color: Colors.white,
    letterSpacing: 1,
    fontWeight: "600",
  },
  selectedValue: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.secondary,
  },
  oneitem: {
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "500",
    color: "#212121",
  },
  discount_btn: {
    backgroundColor: Colors.primary,
    color: "white",
    fontSize: 11,
    fontWeight: "500",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 6,
  },
  image: {
    // width: 100,
    height: 100,
    borderRadius: 5,
  },
});

export default CheckoutStyle;
