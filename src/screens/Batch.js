import { ScrollView, Text, View } from "react-native";
import GlobalStyles from "../Styles/GlobalStyle";
import CoursesStyle from "../Styles/CoursesStyle";
import BatchStyle from "../Styles/BatchStyl.e";
import AlertStyle from "../Styles/AlertStyle";
import CourseList from "../components/CourseList";
export default function Batch() {
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
