import { Text, View, ScrollView } from "react-native";
import GlobalStyles from "../Styles/GlobalStyle";
import BatchDetailStyle from "../Styles/BatchDetailStyle";
import Borders from "../components/Borders";
import { useEffect } from "react";
import { getCachedData } from "../utils/someExports";
import { useNavigation } from "@react-navigation/native";
export default function ClassDetail() {
  const navigation = useNavigation();
  async function checkAuth() {
    try {
      let result = await getCachedData("token");
      if (result.token) {
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
    <ScrollView style={BatchDetailStyle.main}>
      <View style={BatchDetailStyle.main}>
        <View style={BatchDetailStyle.section}>
          <Text style={GlobalStyles.heading}>What this class includes ?</Text>
          <View style={BatchDetailStyle.inside_sec01}>
            <Text>Live Leactures</Text>
          </View>
          <View style={BatchDetailStyle.inside_sec01}>
            <Text>Live Leactures</Text>
          </View>
          <View style={BatchDetailStyle.inside_sec01}>
            <Text>Live Leactures</Text>
          </View>
          <View style={BatchDetailStyle.inside_sec01}>
            <Text>Live Leactures</Text>
          </View>
        </View>
        <View style={BatchDetailStyle.section}>
          <Text style={GlobalStyles.heading}>Other Details</Text>
          <View style={BatchDetailStyle.inside_sec02}>
            <Text>This bath include live and much more</Text>
            <Borders />
            <Text>This bath include live and much more</Text>
            <Borders />
            <Text>This bath include live and much more</Text>
            <Borders />
            <Text>This bath include live and much more</Text>
            <Borders />
          </View>
        </View>
        <View style={BatchDetailStyle.section}>
          <Text style={GlobalStyles.heading}>FAQ's</Text>
          <View style={BatchDetailStyle.inside_sec03}>
            <Text>Is Refund Available</Text>
          </View>
          <View style={BatchDetailStyle.inside_sec03}>
            <Text>Is Refund Available</Text>
          </View>
          <View style={BatchDetailStyle.inside_sec03}>
            <Text>Is Refund Available</Text>
          </View>
          <View style={BatchDetailStyle.inside_sec03}>
            <Text>Is Refund Available</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
