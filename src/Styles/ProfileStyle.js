import { StyleSheet } from "react-native";

const ProfileStyle = StyleSheet.create({
  heading_text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  sub_text: {
    textAlign: "center",
    color: "#212121",
    fontSize: 13,
    fontWeight: "400",
  },
  sub_text2: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 40,
  },
  custom_input: {
    fontSize: 15,
    fontWeight: "400",
    color: "#000",
    marginTop: -4,
  },
  detail_flexy: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detail_flexy__input: {
    flexDirection: "row",
    gap: 20,
  },
  outer_flexy: {
    gap: 5,
  },
  icons: {
    width: 15,
    color: "purple",
  },
});
export default ProfileStyle;
