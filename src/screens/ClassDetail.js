import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import GlobalStyles from "../Styles/GlobalStyle";
import BatchDetailStyle from "../Styles/BatchDetailStyle";
import Borders from "../components/Borders";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { getCachedData } from "../utils/someExports";
import { useNavigation } from "@react-navigation/native";
import { getAPI } from "../utils/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { fetchFaqData } from "../store/slices/apiSlice";
export default function ClassDetail(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const faqState = useSelector((state) => state.apiSlice.faq);
  const [classDetails, setclassDetails] = useState("");
  const [showFaq, setshowFaq] = useState({
    value: false,
    openId: null,
  });
  async function checkAuth() {
    try {
      let result = await getCachedData("token");
      if (result.token) {
        let details = await getAPI(
          `/product-detail?_id=${props.route.params.id}`,
          result.token
        );
        if (details.success) {
          setclassDetails(details.result[0].includes);
        } else {
          console.log(details.message);
        }
        if (!faqState) {
          dispatch(fetchFaqData(result.token));
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
    <ScrollView style={BatchDetailStyle.main}>
      {classDetails &&
        classDetails.map((item, id) => {
          const { heading, points } = item;
          return (
            <View style={BatchDetailStyle.main} key={id}>
              <View style={BatchDetailStyle.section}>
                <Text style={BatchDetailStyle.heading}>{heading}</Text>
                {points &&
                  points.map((items, id) => {
                    return (
                      <View key={id} style={BatchDetailStyle.points_wrapper}>
                        <Icon name="check-circle" size={15} color="skyblue" />
                        <Text style={BatchDetailStyle.wrapper_text_points}>
                          {items.detail}
                        </Text>
                      </View>
                    );
                  })}
              </View>
            </View>
          );
        })}
      <View style={[BatchDetailStyle.main, BatchDetailStyle.endFaq]}>
        <Text style={BatchDetailStyle.heading}>FAQ's</Text>
        {faqState &&
          faqState.result &&
          faqState.result.map((item, id) => {
            const { question, answer } = item;
            return (
              <View key={id}>
                <View>
                  <TouchableOpacity
                    style={BatchDetailStyle.inside_sec02}
                    onPress={() =>
                      setshowFaq({
                        ...showFaq,
                        value: !showFaq.value,
                        openId: id,
                      })
                    }
                  >
                    <Text style={BatchDetailStyle.inside_sec02_text}>
                      {question}
                    </Text>
                  </TouchableOpacity>
                  {showFaq.value && showFaq.openId == id && (
                    <View style={BatchDetailStyle.wrapper}>
                      <Text style={BatchDetailStyle.wrapper_text}>
                        {answer}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
}
