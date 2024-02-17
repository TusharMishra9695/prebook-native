import { Text, View, Image, TouchableOpacity } from "react-native";
import Borders from "./Borders";
import CoursesStyle from "../Styles/CoursesStyle";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../Styles/GlobalStyle";

export default function CourseList(props) {
  const navigation = useNavigation();
  const {
    name,
    topics,
    seats,
    projects,
    original_price,
    mode,
    lectures,
    language,
    interview_questions,
    includes,
    imageUrl,
    duration,
    discounted_price,
    classStart,
    category,
  } = props.item;

  return (
    <View style={CoursesStyle.compont}>
      <Text style={CoursesStyle.heading2}>
        {name}{" "}
        <Text style={CoursesStyle.heading3}>
          [{language}, {mode}]
        </Text>
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
          Starts on <Text style={CoursesStyle.quotes}>{classStart}</Text>
        </Text>
        <Text style={CoursesStyle.quotes_left}>
          Course duration{" "}
          <Text style={CoursesStyle.quotes}>{duration} Months</Text>
        </Text>
      </View>
      <View style={CoursesStyle.quotes_head}>
        <Text style={CoursesStyle.quotes}>{lectures}+ Live Lectures</Text>
        <Text style={CoursesStyle.quotes}>{topics}+ Topics</Text>
        <Text style={CoursesStyle.quotes}>
          {interview_questions}+ Interview questions
        </Text>
      </View>
      <Borders />
      {mode === "online" ? (
        <Text style={[GlobalStyles.heading, CoursesStyle.seat_alert]}>
          {seats < 500 ? `Only ${seats} seats left !!!` : "Limited seats !!!"}
        </Text>
      ) : (
        <Text style={[GlobalStyles.heading, CoursesStyle.seat_alert]}>
          Only {seats} seats left !!!
        </Text>
      )}

      <Text style={[GlobalStyles.heading, CoursesStyle.discount]}>
        {Math.round(
          ((original_price - discounted_price.after_coupon) * 100) /
            original_price
        )}
        % Discount applied
      </Text>
      <View style={CoursesStyle.btn_flex}>
        <TouchableOpacity style={CoursesStyle.price_btn}>
          <Text style={CoursesStyle.price_text}>
            ₹ {discounted_price.after_coupon.toLocaleString()}{" "}
            <Text style={CoursesStyle.inner_price}>
              {original_price.toLocaleString()}
            </Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={CoursesStyle.buy_btn}>
          <Text style={CoursesStyle.buy_text}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
