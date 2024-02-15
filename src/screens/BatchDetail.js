import { Text, View, ScrollView } from "react-native";
import GlobalStyles from "../Styles/GlobalStyle";
import BatchDetailStyle from "../Styles/BatchDetailStyle";
import Borders from "../components/Borders";
export default function BatchDetail() {
  return (
    <ScrollView style={GlobalStyles.main}>
      <View style={BatchDetailStyle.sec01}>
        <Text style={GlobalStyles.heading}>What this class includes ?</Text>
        <View style={BatchDetailStyle.inside_sec01}>
          <Text style={BatchDetailStyle.sec01_text}>Live Leactures</Text>
        </View>
        <View style={BatchDetailStyle.inside_sec01}>
          <Text style={BatchDetailStyle.sec01_text}>Live Leactures</Text>
        </View>
        <View style={BatchDetailStyle.inside_sec01}>
          <Text style={BatchDetailStyle.sec01_text}>Live Leactures</Text>
        </View>
        <View style={BatchDetailStyle.inside_sec01}>
          <Text style={BatchDetailStyle.sec01_text}>Live Leactures</Text>
        </View>
      </View>
      <View style={BatchDetailStyle.sec02}>
        <Text style={GlobalStyles.heading}>Other Details</Text>
        <View style={BatchDetailStyle.inside_sec02}>
          <Text style={BatchDetailStyle.sec02_text}>
            This bath include live and much more
          </Text>
          <Borders />
          <Text style={BatchDetailStyle.sec02_text}>
            This bath include live and much more
          </Text>
          <Borders />
          <Text style={BatchDetailStyle.sec02_text}>
            This bath include live and much more
          </Text>
          <Borders />
          <Text style={BatchDetailStyle.sec02_text}>
            This bath include live and much more
          </Text>
          <Borders />
        </View>
      </View>
      <View style={BatchDetailStyle.sec03}>
        <Text style={GlobalStyles.heading}>FAQ's</Text>
        <View style={BatchDetailStyle.inside_sec03}>
          <Text style={BatchDetailStyle.sec03_text}>Is Refund Available</Text>
        </View>
        <View style={BatchDetailStyle.inside_sec03}>
          <Text style={BatchDetailStyle.sec03_text}>Is Refund Available</Text>
        </View>
        <View style={BatchDetailStyle.inside_sec03}>
          <Text style={BatchDetailStyle.sec03_text}>Is Refund Available</Text>
        </View>
        <View style={BatchDetailStyle.inside_sec03}>
          <Text style={BatchDetailStyle.sec03_text}>Is Refund Available</Text>
        </View>
      </View>
    </ScrollView>
  );
}
