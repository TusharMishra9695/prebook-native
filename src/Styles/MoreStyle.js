import { StyleSheet } from "react-native";
import { Colors } from "../utils/someExports";

const MoreStyle = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Colors.primary,
  },
  list: {
    flexDirection: "row",
    height: 40,
    gap: 10,
    paddingTop: 5,
    paddingLeft: 20,
  },
  list_txt: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: "400",
    color: "#212121",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
  },

  modalView: {
    gap: 25,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 40,
    paddingBottom: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 15,
    fontWeight: "500",
  },
  handle_btns: {
    flexDirection: "row",
    gap: 10,
  },
  cancel_btn: {
    height: 40.5,
    width: 135,
    borderRadius: 20,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    elevation: 10,
  },
  Signout_btn: {
    height: 40.5,
    width: 135,
    borderRadius: 20,
    backgroundColor: "#e0aae5",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    elevation: 10,
  },
  cancel_text: {
    color: "#fff",
    letterSpacing: 1,
    fontSize: 15,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  signout_text: {
    color: "purple",
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
export default MoreStyle;
