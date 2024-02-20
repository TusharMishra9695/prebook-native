import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import GlobalStyles from "../Styles/GlobalStyle";
import CoursesStyle from "../Styles/CoursesStyle";
import BatchStyle from "../Styles/BatchStyl.e";
import { getCachedData } from "../utils/someExports";
import CourseList from "../components/CourseList";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function Batch() {
  const state = useSelector((state) => state.apiSlice.data);
  const navigation = useNavigation();
  async function checkAuth() {
    try {
      let result = await getCachedData("token");
      if (!result.token) {
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
      <View style={BatchStyle.component}>
        <Text style={BatchStyle.emptymsg}>
          Oops ! You haven't enrolled in any course.
        </Text>
        <Text style={[GlobalStyles.heading, BatchStyle.extra_margin]}>
          Here is some recommended courses for you.
        </Text>
      </View>
      {state &&
        state.result.slice(0, 5).map((item, id) => {
          return <CourseList item={item} key={id} />;
        })}
      <TouchableOpacity
        style={CoursesStyle.recommended}
        onPress={() => navigation.navigate("Classes")}
      >
        <Text style={GlobalStyles.heading}>Explore More Courses !</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
