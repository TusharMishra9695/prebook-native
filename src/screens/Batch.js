import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import GlobalStyles from "../Styles/GlobalStyle";
import CoursesStyle from "../Styles/CoursesStyle";
import BatchStyle from "../Styles/BatchStyl.e";
import { getCachedData } from "../utils/someExports";
import CourseList from "../components/CourseList";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import BookedDetail from "../components/BookedDetail";
import { fetchUserData } from "../store/slices/apiSlice";
import { FlatList } from "react-native";
export default function Batch(props) {
  const state = useSelector((state) => state.apiSlice.userdata);
  const course_list = useSelector((state) => state.apiSlice.data);

  const dispatch = useDispatch();

  const navigation = useNavigation();
  async function checkAuth() {
    try {
      let result = await getCachedData("token");
      if (result.token) {
        dispatch(fetchUserData(result.token));
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
    <>
      {state && state.result && state.result.free_class.length > 0 ? (
        <View style={GlobalStyles.main}>
          <FlatList
            data={state.result.free_class}
            renderItem={({ item }) => <BookedDetail item={item} />}
            keyExtractor={(item) => item._id}
          />
        </View>
      ) : (
        <ScrollView style={GlobalStyles.main}>
          <View style={BatchStyle.component}>
            <Text style={BatchStyle.emptymsg}>
              Oops! You haven't booked any class.
            </Text>
            <Text style={[GlobalStyles.heading, BatchStyle.extra_margin]}>
              Here is some recommended course for you.
            </Text>
            <Text style={[GlobalStyles.heading, BatchStyle.extra_margin]}>
              Book your free class now!
            </Text>
          </View>
          {course_list &&
            course_list.result.slice(0, 5).map((item, id) => {
              return <CourseList item={item} key={id} />;
            })}
          <TouchableOpacity
            style={CoursesStyle.recommended}
            onPress={() => navigation.navigate("Classes")}
          >
            <Text style={GlobalStyles.heading}>Explore More Courses !</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </>
  );
}
