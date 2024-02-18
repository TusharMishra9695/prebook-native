import { Text, View, Image, TouchableOpacity } from "react-native";
import Borders from "./Borders";
import CoursesStyle from "../Styles/CoursesStyle";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../Styles/GlobalStyle";
import { Picker } from "@react-native-picker/picker";

export default function CourseList(props) {
  const [selectedValue, setSelectedValue] = useState(
    props.mode === "online" ? "2499" : "3499"
  );

  const navigation = useNavigation();
  const {
    name,
    topics,
    seats,
    original_price,
    mode,
    lectures,
    language,
    interview_questions,
    imageUrl,
    duration,
    discounted_price,
    classStart,
    _id,
  } = props.item;
  return (
    <View style={CoursesStyle.compont}>
      <Text style={CoursesStyle.heading2}>
        {name}{" "}
        <Text style={CoursesStyle.heading3}>
          [{language}, {mode}]
        </Text>
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { id: _id })}
      >
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
          Only {seats} seats available !
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
        {/* <TouchableOpacity style={CoursesStyle.price_btn}> */}
        {/* <Text style={CoursesStyle.price_text}>
            ₹ {discounted_price.after_coupon.toLocaleString()}{" "}
            <Text style={CoursesStyle.inner_price}>
              {original_price.toLocaleString()}
            </Text>
          </Text> */}
        <Picker
          selectedValue={selectedValue}
          style={CoursesStyle.price_btn}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="2900" value="2900" />
          <Picker.Item label={original_price} value="option2" />
          <Picker.Item label={discounted_price.onetime} value="option3" />
          <Picker.Item label={discounted_price.half} value="option4" />
          <Picker.Item label={discounted_price.after_coupon} value="option4" />
        </Picker>
        {/* </TouchableOpacity> */}

        <TouchableOpacity style={CoursesStyle.buy_btn}>
          <Text style={CoursesStyle.buy_text}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
