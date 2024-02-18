import { FlatList, Text, View, RefreshControl } from "react-native";
import CourseList from "../components/CourseList";
import GlobalStyles from "../Styles/GlobalStyle";
import { useEffect, useCallback } from "react";
import { getCachedData } from "../utils/someExports";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/slices/apiSlice";
import { useState } from "react";
export default function Courses() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apiSlice.data);

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
        if (!state) {
          dispatch(fetchData(result.token));
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
      <View style={GlobalStyles.main}>
        <View>
          <Text style={GlobalStyles.heading}>
            {state && state.result && state.result.length} Courses Available
          </Text>
        </View>
        {state && (
          <FlatList
            data={state.result && state.result}
            renderItem={({ item }) => <CourseList item={item} />}
            keyExtractor={(item) => item._id}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      </View>
    </>
  );
}
