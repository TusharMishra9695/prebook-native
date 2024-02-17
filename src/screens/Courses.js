import {
  FlatList,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  RefreshControl,
} from "react-native";
import CourseList from "../components/CourseList";
import GlobalStyles from "../Styles/GlobalStyle";
import { useEffect, useCallback } from "react";
import { getCachedData } from "../utils/someExports";
import { useNavigation } from "@react-navigation/native";
import { getAPI } from "../utils/apiCalls";
import { useState } from "react";
export default function Courses() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [products, setproducts] = useState("");

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  async function checkAuth() {
    try {
      const result = await getCachedData("token");
      if (result.token) {
        if (!products) {
          const data = await getAPI("/products", result.token);
          if (data.success) {
            setproducts(data.result);
          } else {
            console.log(data.message);
          }
        }
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
      <ScrollView
        style={GlobalStyles.main}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View>
          <Text style={GlobalStyles.heading}>
            {products && products.length} Courses Available
          </Text>
        </View>
        {products && (
          <FlatList
            data={products}
            renderItem={({ item }) => <CourseList key={item._id} item={item} />}
            keyExtractor={(item) => item._id}
          />
        )}
      </ScrollView>
    </>
  );
}
