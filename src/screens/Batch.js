import { Text, View } from "react-native";
import GlobalStyles from "../Styles/GlobalStyle";
import CoursesStyle from "../Styles/CoursesStyle";
import BatchStyle from "../Styles/BatchStyl.e";
import AlertStyle from "../Styles/AlertStyle";
export default function Batch() {
  return (
    <View style={GlobalStyles.main}>
      <View style={CoursesStyle.compont}>
        <Text style={BatchStyle.emptymsg}>
          Your Class in going to start in 50 mins Your Class in going to start
          in 50 mins Your Class in going to start in 50 mins Your Class in going
          to start in 50 mins.
        </Text>
      </View>
    </View>
  );
}
