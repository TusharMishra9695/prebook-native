import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import MoreStyle from "../Styles/MoreStyle";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { getCachedData } from "../utils/someExports";
import Borders from "../components/Borders";
import { useNavigation } from "@react-navigation/native";
import { removeItemFromStorage } from "../utils/someExports";
import { useEffect } from "react";
export default function More() {
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
      <TouchableOpacity style={MoreStyle.list}>
        <MaterialIcon name="account-circle" size={26} color="black" />
        <Text style={MoreStyle.list_txt}>My Account</Text>
      </TouchableOpacity>
      <Borders />
      <TouchableOpacity style={MoreStyle.list}>
        <MaterialIcon name="payment" size={26} color="black" />
        <Text style={MoreStyle.list_txt}>Transactions</Text>
      </TouchableOpacity>
      <Borders />
      <TouchableOpacity style={MoreStyle.list}>
        <MaterialIcon name="policy" size={26} color="black" />
        <Text style={MoreStyle.list_txt}>Terms of Use</Text>
      </TouchableOpacity>
      <Borders />
      <TouchableOpacity style={MoreStyle.list}>
        <MaterialIcon name="privacy-tip" size={26} color="black" />
        <Text style={MoreStyle.list_txt}>Privacy Policy</Text>
      </TouchableOpacity>
      <Borders />
      <TouchableOpacity style={MoreStyle.list}>
        <MaterialIcon name="contact-mail" size={26} color="black" />
        <Text style={MoreStyle.list_txt}>Contact Us</Text>
      </TouchableOpacity>
      <Borders />

      <TouchableOpacity style={MoreStyle.list}>
        <MaterialIcon name="percent" size={26} color="black" />

        <Text style={MoreStyle.list_txt}>Offers</Text>
      </TouchableOpacity>
      <Borders />

      <TouchableOpacity style={MoreStyle.list}>
        <MaterialIcon name="logout" size={26} color="black" />
        <Text
          style={MoreStyle.list_txt}
          onPress={() => {
            removeItemFromStorage("token");
            navigation.navigate("Login");
          }}
        >
          SignOut
        </Text>
      </TouchableOpacity>
    </View>
  );
}
