import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import FreeClassStyle from "../Styles/FreeClassStyle";
import { dates, times } from "../utils/json";
import { Colors, validateEmail } from "../utils/someExports";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import GlobalStyles from "../Styles/GlobalStyle";
import { useEffect, useState } from "react";
import Borders from "../components/Borders";
import ContactusStyle from "../Styles/ContactusStyle";
import CheckoutStyle from "../Styles/CheckoutStyle";
import { postAPI } from "../utils/apiCalls";
export default function FreeClass() {
  const [done, setdone] = useState(false);
  const [showDateTime, setShowDateTime] = useState(false);
  const [form, setform] = useState({
    name: "",
    email: "",
    college: "",
    date: "",
    time: "",
    token: "",
  });
  const [error, seterror] = useState({
    email: false,
    check: false,
  });
  async function handleSubmit() {
    if (form.name && form.email && form.college && form.date && form.time) {
      if (validateEmail(form.email)) {
        seterror({ ...error, email: false });
        let formData = {
          phoneNumber: 9149327018,
          name: form.name,
          email: form.email,
          college: form.college,
          date: form.date,
          time: form.time,
        };
        try {
          let confirm = await postAPI("/free-class", formData, form.token);
          if (confirm.success) {
            setform({ ...form, name: "", email: "", college: "" });
            seterror({ ...error, check: false });
            setdone(done);
          }
        } catch (e) {
          Toast.error("Some problem occured");
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
    <View style={FreeClassStyle.top}>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <Text style={FreeClassStyle.top_text}>Book Free Class</Text>
      <View style={FreeClassStyle.box}>
        <View>
          <TextInput
            placeholder="Name"
            style={GlobalStyles.input_free__class}
            value={form.name}
            onChangeText={(text) => setform({ ...form, name: text })}
          />
        </View>
        <View>
          <TextInput
            placeholder="Phone Number"
            style={GlobalStyles.input_free__class}
            // value={email}
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
        </View>
        <View>
          <TextInput
            style={GlobalStyles.input_free__class}
            placeholder="College"
            value={form.college}
            onChangeText={(text) => setform({ ...form, college: text })}
          />
        </View>

        <View>
          <TouchableOpacity
            style={FreeClassStyle.date_flexy}
            onPress={() => {
              setShowDateTime(true);
            }}
          >
            <Text style={FreeClassStyle.slot_text}>Select Date & Timing</Text>
            <Fontisto
              name="date"
              size={20}
              color="purple"
              style={{ paddingRight: 10 }}
            />
          </TouchableOpacity>
          {showDateTime && (
            <>
              <View style={FreeClassStyle.date_select__flexy}>
                <FlatList
                  data={dates}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        FreeClassStyle.date_radio,
                        FreeClassStyle.date_extra__margin,
                      ]}
                    >
                      <Text style={FreeClassStyle.time_text}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                />
              </View>
              <View style={FreeClassStyle.slot_flexy}>
                {times.map((item) => {
                  return (
                    <TouchableOpacity style={FreeClassStyle.time_radio}>
                      <Text style={FreeClassStyle.time_text}>{item}</Text>
                    </TouchableOpacity>
                  );
                })}
                {/* <TouchableOpacity style={FreeClassStyle.selected_time}>
                <Text style={FreeClassStyle.selected_time__text}>
                  4:30 to 5:30 PM
                </Text>
              </TouchableOpacity> */}
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
        <View style={[ContactusStyle.overscreen, FreeClassStyle.extra_margin]}>
          <View style={ContactusStyle.gap_us}>
            <Text style={ContactusStyle.talk_text}>Academy Address</Text>
            <Text style={ContactusStyle.inside_heading}>00 Saket Nagar</Text>
            <Text style={ContactusStyle.inside_heading}>
              Kanpur, Uttar Pradesh
            </Text>
          </View>
          <View style={ContactusStyle.gap_us}>
            <Text style={ContactusStyle.talk_text}>Talk to us</Text>
            <Text style={ContactusStyle.inside_heading}>+91 1234567890</Text>
            <Text style={ContactusStyle.inside_heading}>test01@gmail.com</Text>
          </View>
        </View>
        {done && (
          <View style={CheckoutStyle.footer}>
            <Text style={FreeClassStyle.done_text}>Done!</Text>
            <View>
              <Text style={FreeClassStyle.book_text}>
                Your seat has been reserved for
              </Text>
              <Text style={FreeClassStyle.book_text}>
                the free class on Monday
              </Text>
              <Text style={FreeClassStyle.book_text}>10 March at 05:00 pm</Text>
            </View>

            <AntDesign
              name="checkcircleo"
              size={60}
              style={FreeClassStyle.check_icon}
            />
          </View>
        )}
      </View>
    </View>
  );
}
