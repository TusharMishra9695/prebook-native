import { ScrollView, Text, View } from "react-native";
import GlobalStyles from "../Styles/GlobalStyle";
import CoursesStyle from "../Styles/CoursesStyle";
import BatchStyle from "../Styles/BatchStyl.e";
import { getCachedData } from "../utils/someExports";
import AlertStyle from "../Styles/AlertStyle";
import CourseList from "../components/CourseList";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
export default function Batch() {
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
      <View style={BatchStyle.component}>
        <Text style={BatchStyle.emptymsg}>
          Oops ! You haven't enrolled in any batch.
        </Text>
        <Text style={[GlobalStyles.heading, BatchStyle.extra_margin]}>
          Here is some recommended batch for you.
        </Text>
      </View>
      <CourseList />
      <CourseList />
      <CourseList />
      <CourseList />
    </ScrollView>
  );
}
