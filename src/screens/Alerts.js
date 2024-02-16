import { ScrollView, Text, View } from "react-native";
import GlobalStyles from "../Styles/GlobalStyle";
import AlertStyle from "../Styles/AlertStyle";
import CoursesStyle from "../Styles/CoursesStyle";
import { getCachedData } from "../utils/someExports";
import Borders from "../components/Borders";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
export default function Alerts() {
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
    <ScrollView style={GlobalStyles.main}>
      <View style={[GlobalStyles.common, AlertStyle.margin_extra]}>
        <Text style={[GlobalStyles.heading, AlertStyle.date_text]}>Today</Text>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
      </View>
      <View style={[GlobalStyles.common, AlertStyle.margin_extra]}>
        <Text style={[GlobalStyles.heading, AlertStyle.date_text]}>Today</Text>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
      </View>
      <View style={[GlobalStyles.common, AlertStyle.margin_extra]}>
        <Text style={[GlobalStyles.heading, AlertStyle.date_text]}>Today</Text>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
      </View>
      <View style={[GlobalStyles.common, AlertStyle.margin_extra]}>
        <Text style={[GlobalStyles.heading, AlertStyle.date_text]}>Today</Text>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
      </View>
      <View style={[GlobalStyles.common, AlertStyle.margin_extra]}>
        <Text style={[GlobalStyles.heading, AlertStyle.date_text]}>Today</Text>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
      </View>
      <View style={[GlobalStyles.common, AlertStyle.margin_extra]}>
        <Text style={[GlobalStyles.heading, AlertStyle.date_text]}>Today</Text>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <Text style={CoursesStyle.quotes_left}>
            Your Class in going to start in 50 mins Your Class in going to start
            in 50 mins Your Class in going to start in 50 mins Your Class in
            going to start in 50 mins.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
