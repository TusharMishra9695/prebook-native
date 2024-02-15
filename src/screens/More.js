import { ScrollView, Text, View } from "react-native";
import MoreStyle from "../Styles/MoreStyle";
import GlobalStyles from "../Styles/GlobalStyle";
import Borders from "../components/Borders";
export default function More() {
  return (
    <View style={MoreStyle.main}>
      <View style={MoreStyle.list}>
        <Text style={MoreStyle.list_txt}>My Account</Text>
      </View>
      <Borders />
      <View style={MoreStyle.list}>
        <Text style={MoreStyle.list_txt}>My Downloads</Text>
      </View>
      <Borders />
      <View style={MoreStyle.list}>
        <Text style={MoreStyle.list_txt}>Transactions</Text>
      </View>
      <Borders />
      <View style={MoreStyle.list}>
        <Text style={MoreStyle.list_txt}>Terms of Use</Text>
      </View>
      <Borders />
      <View style={MoreStyle.list}>
        <Text style={MoreStyle.list_txt}>Privacy Policy</Text>
      </View>
      <Borders />
      <View style={MoreStyle.list}>
        <Text style={MoreStyle.list_txt}>Contact Us</Text>
      </View>
      <Borders />

      <View style={MoreStyle.list}>
        <Text style={MoreStyle.list_txt}>Offers</Text>
      </View>
    </View>
  );
}
