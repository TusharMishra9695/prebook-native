import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import MoreStyle from "../Styles/MoreStyle";
import GlobalStyles from "../Styles/GlobalStyle";
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
      if (result.token) {
        navigation.navigate("Course");
      } else {
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
        <Text style={MoreStyle.list_txt}>My Account</Text>
      </TouchableOpacity>
      <Borders />
      <TouchableOpacity style={MoreStyle.list}>
        <Text style={MoreStyle.list_txt}>My Downloads</Text>
      </TouchableOpacity>
      <Borders />
      <TouchableOpacity style={MoreStyle.list}>
        <Text style={MoreStyle.list_txt}>Transactions</Text>
      </TouchableOpacity>
      <Borders />
      <TouchableOpacity style={MoreStyle.list}>
        <Text style={MoreStyle.list_txt}>Terms of Use</Text>
      </TouchableOpacity>
      <Borders />
      <TouchableOpacity style={MoreStyle.list}>
        <Text style={MoreStyle.list_txt}>Privacy Policy</Text>
      </TouchableOpacity>
      <Borders />
      <TouchableOpacity style={MoreStyle.list}>
        <Text style={MoreStyle.list_txt}>Contact Us</Text>
      </TouchableOpacity>
      <Borders />

      <TouchableOpacity style={MoreStyle.list}>
        <Text style={MoreStyle.list_txt}>Offers</Text>
      </TouchableOpacity>
      <Borders />

      <TouchableOpacity style={MoreStyle.list}>
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
