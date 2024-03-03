import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import Borders from "./Borders";
import CoursesStyle from "../Styles/CoursesStyle";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../Styles/GlobalStyle";
import { StyleSheet } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../utils/someExports";

export default function CourseList(props) {
  const [selectedValue, setSelectedValue] = useState(3499);
  const [showOptions, setShowOptions] = useState(false);

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

  const [rotation] = useState(new Animated.Value(0));

  const rotateIcon = () => {
    Animated.timing(rotation, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      // Reset rotation to 0 after the animation is complete
      rotation.setValue(0);
    });
  };

  const interpolatedRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <>
      <View style={CoursesStyle.compont}>
        <Text style={CoursesStyle.heading2}>
          {name}{" "}
          <Text style={CoursesStyle.heading3}>
            [{language}, {mode}]
          </Text>
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Course Details", { id: _id })}
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
        {/* {mode === "online" ? (
          <Text style={[GlobalStyles.heading, CoursesStyle.seat_alert]}>
            {seats < 500 ? `Only ${seats} seats left !!!` : "Limited seats !!!"}
          </Text>
        ) : (
          <Text style={[GlobalStyles.heading, CoursesStyle.seat_alert]}>
            Only {seats} seats available !
          </Text>
        )} */}

        {selectedValue != discounted_price.monthly && (
          <Text style={[GlobalStyles.heading, CoursesStyle.discount]}>
            {`${(100 - (selectedValue * 100) / original_price).toFixed(
              2
            )} % Discount`}
            {selectedValue != discounted_price.monthly &&
              ` [ You saved (₹${(
                original_price - selectedValue
              ).toLocaleString()}) ]`}
          </Text>
        )}
        {showOptions && (
          <View style={styles.optionsContainer}>
            {discounted_price &&
              Object.keys(discounted_price).map((key) => {
                return (
                  discounted_price[key] != 0 && (
                    <TouchableOpacity
                      key={key}
                      onPress={() => {
                        setSelectedValue(discounted_price[key]);
                        setShowOptions(false);
                      }}
                      style={CoursesStyle.flexy_picker}
                    >
                      <Text style={styles.option}>
                        {key}: {discounted_price[key].toLocaleString()}
                      </Text>
                      <Text style={CoursesStyle.inner_price}>
                        {key != "monthly" && (3499 * duration).toLocaleString()}
                      </Text>
                    </TouchableOpacity>
                  )
                );
              })}
          </View>
        )}
        <View style={CoursesStyle.btn_flex}>
          <TouchableOpacity
            style={styles.pickerContainer}
            onPress={() => {
              rotateIcon(), setShowOptions(!showOptions);
            }}
          >
            <Text style={styles.selectedValue}>
              ₹{" "}
              {selectedValue === 3499
                ? `${selectedValue.toLocaleString()}/month`
                : selectedValue.toLocaleString()}
            </Text>
            <Animated.View
              style={{ transform: [{ rotate: interpolatedRotation }] }}
            >
              <MaterialIcon name="arrow-drop-up" size={20} color="purple" />
            </Animated.View>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={CoursesStyle.buy_btn}
            onPress={() =>
              navigation.navigate("Checkout", {
                data: props.item,
                selectedValue: selectedValue,
              })
            }
          >
            <Text style={CoursesStyle.buy_text}>Buy Now</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={CoursesStyle.book_btn}
            onPress={() => navigation.navigate("FreeClass")}
          >
            <Text style={CoursesStyle.buy_text}>Book Free Class</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    width: 138,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  selectedValue: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.secondary,
    marginTop: -4,
  },
  optionsContainer: {
    marginTop: 10,
    borderColor: "purple",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  option: {
    fontSize: 15,
    marginBottom: 15,
    textTransform: "capitalize",
  },
});
