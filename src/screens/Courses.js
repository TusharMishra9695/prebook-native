import { FlatList, Image, ScrollView, Text, View } from "react-native";
import CourseList from "../components/CourseList";
import CoursesStyle from "../Styles/CoursesStyle";
import GlobalStyles from "../Styles/GlobalStyle";
export default function Courses() {
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
  );
}
