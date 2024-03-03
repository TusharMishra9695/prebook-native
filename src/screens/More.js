import { Text, TouchableOpacity, View, Modal } from "react-native";
import MoreStyle from "../Styles/MoreStyle";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { getCachedData } from "../utils/someExports";
import Borders from "../components/Borders";
import { useNavigation } from "@react-navigation/native";
import { removeItemFromStorage } from "../utils/someExports";
import { useEffect, useState } from "react";
export default function More() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  async function checkAuth() {
    try {
      let result = await getCachedData("token");
      if (!result.token) {
        navigation.navigate("Login");
      }
    } catch (e) {
      console.log(e, "auth error");
    }
  }
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <View style={MoreStyle.main}>
      <TouchableOpacity
        style={MoreStyle.list}
        onPress={() => navigation.navigate("My Profile")}
      >
        <MaterialIcon name="account-circle" size={26} color="black" />
        <Text style={MoreStyle.list_txt}>View Profile</Text>
      </TouchableOpacity>
      {/* <Borders />
      <TouchableOpacity style={MoreStyle.list}>
        <MaterialIcon name="payment" size={26} color="black" />
        <Text style={MoreStyle.list_txt}>Transactions</Text>
      </TouchableOpacity> */}
      <Borders />
      <TouchableOpacity
        style={MoreStyle.list}
        onPress={() => navigation.navigate("About Us", { category: "about" })}
      >
        <FeatherIcon name="alert-circle" size={25} color="black" />
        <Text style={MoreStyle.list_txt}>About Us</Text>
      </TouchableOpacity>
      <Borders />
      <TouchableOpacity
        style={MoreStyle.list}
        onPress={() =>
          navigation.navigate("Terms and Conditions", { category: "terms" })
        }
      >
        <MaterialIcon name="check-box" size={25} color="black" />
        <Text style={MoreStyle.list_txt}>Terms & Conditions</Text>
      </TouchableOpacity>
      <Borders />

      <TouchableOpacity
        style={MoreStyle.list}
        onPress={() => navigation.navigate("Contact Us")}
      >
        <FeatherIcon name="phone-call" size={24} color="black" />
        <Text style={MoreStyle.list_txt}>Contact Us</Text>
      </TouchableOpacity>
      <Borders />

      <TouchableOpacity
        style={MoreStyle.list}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <MaterialIcon name="logout" size={25} color="black" />
        <Text style={MoreStyle.list_txt}>SignOut</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={MoreStyle.centeredView}>
          <View style={MoreStyle.modalView}>
            <Text style={MoreStyle.modalText}>
              Are you sure you would like to Sign Out ?
            </Text>
            <View style={MoreStyle.handle_btns}>
              <TouchableOpacity
                style={MoreStyle.cancel_btn}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={MoreStyle.cancel_text}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={MoreStyle.Signout_btn}
                onPress={() => {
                  removeItemFromStorage("token");
                  navigation.navigate("Login");
                }}
              >
                <Text style={MoreStyle.signout_text}>Signout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
