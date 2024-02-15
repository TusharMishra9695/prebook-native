import { ScrollView, Text, View } from "react-native";
import GlobalStyles from "../Styles/GlobalStyle";
import AlertStyle from "../Styles/AlertStyle";
import CoursesStyle from "../Styles/CoursesStyle";
export default function Alerts() {
  return (
    <ScrollView style={GlobalStyles.main}>
      <View style={GlobalStyles.common}>
        <Text style={[GlobalStyles.heading, AlertStyle.date_text]}>Today</Text>
        <View style={CoursesStyle.compont}>
          <Text style={CoursesStyle.heading2}>HTM/CSS [Batch - 10]</Text>
          <View style={CoursesStyle.quotes_head}>
            <Text style={CoursesStyle.quotes_left}>
              Your Class in going to start in 50 min
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
