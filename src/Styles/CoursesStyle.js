import { StyleSheet } from "react-native";
import { Colors } from "../utils/someExports";

const CoursesStyle = StyleSheet.create({
  heading2: {
    fontSize: 14,
    fontWeight: "500",
    color: "purple",
  },
  heading3: {
    fontSize: 14,
    fontWeight: "500",
    color: "#212121",
    textTransform: "capitalize",
  },
  compont: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 4,
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    height: 150,
    borderRadius: 8,
    resizeMode: "cover",
  },
  quotes_head: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  quotes: {
    fontSize: 10,
    fontWeight: "500",
    color: "#212121",
  },
  quotes_left: {
    fontSize: 10,
    fontWeight: "400",
    color: "grey",
  },

  buy_btn: {
    height: 40.5,
    width: 135,
    borderRadius: 20,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    elevation: 10,
  },
  items: {
    color: Colors.secondary, // Example styles
  },
  price_text: {
    color: "purple",
    fontSize: 14,
    fontWeight: "500",
  },
  buy_text: {
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "500",
    color: "#fff",
  },
  btn_flex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexy_picker: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  inner_price: {
    marginTop: 1,
    fontSize: 13,
    fontWeight: "300",
    color: "grey",
    textDecorationLine: "line-through",
  },
  discount: {
    textAlign: "center",
    color: "purple",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.5,
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  seat_alert: {
    fontSize: 14,
    textAlign: "center",
    backgroundColor: Colors.primary,
    color: "red",
    letterSpacing: 3,
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
export default CoursesStyle;
