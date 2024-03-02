import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import RepeatAbout from "../components/RepeatAbout";
import { getCachedData } from "../utils/someExports";
import { getAPI } from "../utils/apiCalls";
import Container, { Toast } from "toastify-react-native";
import GlobalStyles from "../Styles/GlobalStyle";

export default function Aboutandterms(props) {
  const [aboutdata, setaboutdata] = useState("");
  async function checkAuth() {
    try {
      let result = await getCachedData("token");
      if (result.token) {
        let data = await getAPI(
          `/about?category=${
            props.route.params && props.route.params.category
          }`,
          result.token
        );
        if (data.success) {
          setaboutdata(data.result);
        } else {
          Toast.error("Unable to get data");
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
    <View style={GlobalStyles.main}>
      <Container position="top" />
      {aboutdata && (
        <FlatList
          data={aboutdata}
          renderItem={({ item }) => <RepeatAbout item={item} />}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
}
