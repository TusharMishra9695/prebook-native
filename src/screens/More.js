import { ScrollView, Text, TouchableOpacity, View, Modal } from "react-native";
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
  function handleSignout() {
    // if (!modalVisible) {
    //   removeItemFromStorage("token");
    //   navigation.navigate("Login");
    // }
  }
  return (
    <View style={MoreStyle.main}>
      <TouchableOpacity style={MoreStyle.list}>
        <MaterialIcon name="account-circle" size={26} color="#212121" />
        <Text style={MoreStyle.list_txt}>My Account</Text>
      </TouchableOpacity>
      <Borders />
      <TouchableOpacity style={MoreStyle.list}>
        <MaterialIcon name="payment" size={26} color="#212121" />
        <Text style={MoreStyle.list_txt}>Transactions</Text>
      </TouchableOpacity>
      <Borders />
      <TouchableOpacity style={MoreStyle.list}>
        <FeatherIcon name="alert-circle" size={26} color="#212121" />
        <Text style={MoreStyle.list_txt}>About us</Text>
      </TouchableOpacity>
      <Borders />
      <TouchableOpacity style={MoreStyle.list}>
        <MaterialIcon name="check-box" size={26} color="#212121" />
        <Text style={MoreStyle.list_txt}>Terms & Conditions</Text>
      </TouchableOpacity>
      <Borders />

      <TouchableOpacity
        style={MoreStyle.list}
        onPress={() => navigation.navigate("Contact Us")}
      >
        <FeatherIcon name="phone-call" size={25} color="#212121" />
        <Text style={MoreStyle.list_txt}>Contact Us</Text>
      </TouchableOpacity>
      <Borders />
      {/* 
      <TouchableOpacity style={MoreStyle.list}>
        <MaterialIcon name="percent" size={26} color="#212121" />

        <Text style={MoreStyle.list_txt}>Offers</Text>
      </TouchableOpacity>
      <Borders /> */}

      <TouchableOpacity style={MoreStyle.list}>
        <MaterialIcon name="logout" size={26} color="#212121" />
        <Text
          style={MoreStyle.list_txt}
          onPress={() => setModalVisible(!modalVisible)}
        >
          SignOut
        </Text>
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
