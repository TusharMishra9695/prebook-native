import { Text, View, Image, TouchableOpacity } from "react-native";
import Borders from "./Borders";
import CoursesStyle from "../Styles/CoursesStyle";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../Styles/GlobalStyle";

export default function CourseList() {
  const navigation = useNavigation();
  return (
    <View style={CoursesStyle.compont}>
      <Text style={CoursesStyle.heading2}>
        HTML/CSS Course{" "}
        <Text style={CoursesStyle.heading3}>[ Hindi, Online ]</Text>
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Image
          style={CoursesStyle.image}
          source={{
            uri: "https://boffinsacademy.com/wp-content/uploads/2023/10/best-data-science-courses-in-nagpur-8.png",
          }}
        />
      </TouchableOpacity>
      <View style={CoursesStyle.quotes_head}>
        <Text style={CoursesStyle.quotes_left}>
          Starts on<Text style={CoursesStyle.quotes}>10 Feb 2024</Text>
        </Text>
        <Text style={CoursesStyle.quotes}>50+ Live Lectures</Text>
        <Text style={CoursesStyle.quotes}>100+ Topics</Text>
      </View>
      <Borders />

      <Text style={[GlobalStyles.heading, CoursesStyle.seat_alert]}>
        Limited Seats
      </Text>
      <Text style={[GlobalStyles.heading, CoursesStyle.discount]}>
        50% Discount applied
      </Text>
      <View style={CoursesStyle.btn_flex}>
        <TouchableOpacity style={CoursesStyle.price_btn}>
          <Text style={CoursesStyle.price_text}>
            ₹ 10,999 <Text style={CoursesStyle.inner_price}>21,999</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={CoursesStyle.buy_btn}>
          <Text style={CoursesStyle.buy_text}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
