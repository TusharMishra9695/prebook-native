import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import FreeClassStyle from "../Styles/FreeClassStyle";
import { dates, times } from "../utils/json";
import { Colors, TextError, validateEmail } from "../utils/someExports";
import { getCachedData } from "../utils/someExports";
import Fontisto from "react-native-vector-icons/Fontisto";
import GlobalStyles from "../Styles/GlobalStyle";
import { useEffect, useState } from "react";
import Borders from "../components/Borders";
import ContactusStyle from "../Styles/ContactusStyle";
import { useSelector } from "react-redux";
import CheckoutStyle from "../Styles/CheckoutStyle";
import { postAPI } from "../utils/apiCalls";
import ReservedSeat from "../components/ReservedSeat";
export default function FreeClass() {
  const state = useSelector((state) => state.apiSlice.userdata);
  const [done, setdone] = useState(false);
  const [showDateTime, setShowDateTime] = useState(false);
  const [form, setform] = useState({
    name: "",
    email: "",
    college: "",
    date: "",
    time: "",
    token: "",
    date_id: "",
    time_id: "",
  });
  const [error, seterror] = useState({
    email: false,
    check: false,
  });
  async function handleSubmit() {
    if (form.name && form.email && form.college && form.date && form.time) {
      if (validateEmail(form.email)) {
        let formData = {
          phoneNumber: state && state.result && state.result.phoneNumber,
          name: form.name,
          email: form.email,
          college: form.college,
          date: form.date,
          time: form.time,
        };
        try {
          let confirm = await postAPI("/free-class", formData, form.token);
          if (confirm.success) {
            setform({
              ...form,
              name: "",
              email: "",
              college: "",
              date: "",
              time: "",
            });
            seterror({ ...error, check: false });
            setdone(true);
          }
        } catch (e) {
          console.log("some error ");
        }
      } else {
        seterror({ ...error, email: true });
      }
    } else {
      seterror({ ...error, check: true });
    }
  }
  async function checkAuth() {
    try {
      let result = await getCachedData("token");
      if (result.token) {
        setform({ ...form, token: result.token });
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
      {done ? (
        <ReservedSeat />
      ) : (
        <ScrollView style={FreeClassStyle.top}>
          <StatusBar
            backgroundColor={Colors.primary}
            barStyle="light-content"
          />
          <Text style={FreeClassStyle.top_text}>Book Free Class</Text>

          <View style={FreeClassStyle.box}>
            <View>
              <TextInput
                placeholder="Name"
                style={GlobalStyles.input_free__class}
                value={form.name}
                onChangeText={(text) => setform({ ...form, name: text })}
              />
              {error.check && !form.name && TextError("This field is required")}
            </View>
            <View>
              <TextInput
                placeholder={
                  state && state.result && state.result.phoneNumber.toString()
                }
                style={GlobalStyles.input_free__class}
                editable={false}
              />
            </View>
            <View>
              <TextInput
                style={GlobalStyles.input_free__class}
                placeholder="Email"
                value={form.email}
                onChangeText={(text) => setform({ ...form, email: text })}
              />
              {error.check &&
                !form.email &&
                TextError("This field is required")}
              {error.email && TextError("Enter correct email")}
            </View>
            <View>
              <TextInput
                style={GlobalStyles.input_free__class}
                placeholder="College"
                value={form.college}
                onChangeText={(text) => setform({ ...form, college: text })}
              />
              {error.check &&
                !form.college &&
                TextError("This field is required")}
            </View>
            <View>
              <TouchableOpacity
                style={FreeClassStyle.date_flexy}
                onPress={() => {
                  setShowDateTime(true);
                }}
              >
                <Text style={FreeClassStyle.slot_text}>
                  {form.date && form.time
                    ? `${form.date} & ${form.time}`
                    : "Select Date & Timing"}
                </Text>
                <Fontisto
                  name="date"
                  size={20}
                  color="purple"
                  style={{ paddingRight: 10 }}
                />
              </TouchableOpacity>
              {showDateTime && (
                <>
                  <View style={FreeClassStyle.slot_flexy}>
                    {dates.map((item, id) => {
                      return (
                        <TouchableOpacity
                          style={
                            form.date_id === id
                              ? FreeClassStyle.selected_time
                              : FreeClassStyle.time_radio
                          }
                          key={id}
                          onPress={() =>
                            setform({ ...form, date: item, date_id: id })
                          }
                        >
                          <Text
                            style={
                              form.date_id === id
                                ? FreeClassStyle.selected_time__text
                                : FreeClassStyle.time_text
                            }
                          >
                            {item}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                    {error.check &&
                      !form.date &&
                      TextError("This field is required")}
                  </View>
                  <Borders />
                  <View style={FreeClassStyle.slot_flexy}>
                    {times.map((item, id) => {
                      return (
                        <TouchableOpacity
                          style={
                            form.time_id === id
                              ? FreeClassStyle.selected_time
                              : FreeClassStyle.time_radio
                          }
                          key={id}
                          onPress={() =>
                            setform({ ...form, time: item, time_id: id })
                          }
                        >
                          <Text
                            style={
                              form.time_id === id
                                ? FreeClassStyle.selected_time__text
                                : FreeClassStyle.time_text
                            }
                          >
                            {item}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                    {error.check &&
                      !form.time &&
                      TextError("This field is required")}
                  </View>
                </>
              )}

              <Borders />
            </View>
            <TouchableOpacity
              style={ContactusStyle.send_btn}
              onPress={() => handleSubmit()}
            >
              <Text style={CheckoutStyle.checkout_text}>Reserve My Seat</Text>
            </TouchableOpacity>
            <View
              style={[ContactusStyle.overscreen, FreeClassStyle.extra_margin]}
            >
              <View style={ContactusStyle.gap_us}>
                <Text style={ContactusStyle.talk_text}>Academy Address</Text>
                <Text style={ContactusStyle.inside_heading}>
                  00 Saket Nagar
                </Text>
                <Text style={ContactusStyle.inside_heading}>
                  Kanpur, Uttar Pradesh
                </Text>
              </View>
              <View style={ContactusStyle.gap_us}>
                <Text style={ContactusStyle.talk_text}>Talk to us</Text>
                <Text style={ContactusStyle.inside_heading}>
                  +91 1234567890
                </Text>
                <Text style={ContactusStyle.inside_heading}>
                  test01@gmail.com
                </Text>
              </View>
            </View>
            {/* style={CheckoutStyle.footer} */}
          </View>
        </ScrollView>
      )}
    </>
  );
}
