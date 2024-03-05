import { StyleSheet } from "react-native";
import { Colors } from "../utils/someExports";

const BookedStyle = StyleSheet.create({
  compont: {
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
  heading: {
    fontSize: 15,
    fontWeight: "500",
    color: "purple",
  },
  text_flexy: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  name_heading__color: {
    width: 80,
    fontSize: 14,
    fontWeight: "500",
    textTransform: "capitalize",
    color: Colors.secondary,
  },
  user_text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#212121",
  },
});
export default BookedStyle;
