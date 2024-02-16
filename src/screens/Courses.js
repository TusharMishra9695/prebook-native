import { FlatList, ScrollView, Text, View } from "react-native";
import CourseList from "../components/CourseList";
import GlobalStyles from "../Styles/GlobalStyle";
import { useEffect } from "react";
import { getCachedData } from "../utils/someExports";
import { useNavigation } from "@react-navigation/native";
export default function Courses() {
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
  const data = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 3" },
    { id: "5", title: "Item 3" },
    { id: "6", title: "Item 3" },
    { id: "7", title: "Item 3" },
    { id: "8", title: "Item 3" },
    { id: "9", title: "Item 3" },
  ];
  const renderItem = ({ item }) => <CourseList title={item.title} />;
  return (
    <>
      <ScrollView style={GlobalStyles.main}>
        <View>
          <Text style={GlobalStyles.heading}>10 Courses Available</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </>
  );
}
