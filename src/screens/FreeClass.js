import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FreeClassStyle from "../Styles/FreeClassStyle";
import { Colors } from "../utils/someExports";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";

import GlobalStyles from "../Styles/GlobalStyle";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import Borders from "../components/Borders";
import ContactusStyle from "../Styles/ContactusStyle";
import CoursesStyle from "../Styles/CoursesStyle";
import CheckoutStyle from "../Styles/CheckoutStyle";
export default function FreeClass() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [done, setdone] = useState(false);

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    setShowPicker(false);
  };

  return (
    <View style={FreeClassStyle.top}>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <Text style={FreeClassStyle.top_text}>Book Free Class</Text>
      <View style={FreeClassStyle.box}>
        <View>
          <TextInput
            placeholder="Phone Number"
            style={GlobalStyles.input_free__class}
            // value={email}
            // onChangeText={(text) => setemail(text)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Email"
            style={GlobalStyles.input_free__class}
            // value={email}
            // onChangeText={(text) => setemail(text)}
          />
        </View>
        <View>
          <TouchableOpacity
            style={FreeClassStyle.date_flexy}
            onPress={() => {
              setShowPicker(true), setShowTime(true);
            }}
          >
            <Text style={FreeClassStyle.slot_text}>Select Date & Timing</Text>
            <Fontisto
              name="date"
              size={20}
              color="purple"
              style={{ paddingRight: 10 }}
            />
            {showPicker && (
              <DateTimePicker
                value={date}
                mode="date"
                is24Hour={true}
                display="spinner"
                onChange={onChange}
              />
            )}
          </TouchableOpacity>
          {showTime && (
            <View style={FreeClassStyle.slot_flexy}>
              <TouchableOpacity style={FreeClassStyle.time_radio}>
                <Text style={FreeClassStyle.time_text}>4:30 to 5:30 PM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={FreeClassStyle.time_radio}>
                <Text style={FreeClassStyle.time_text}>4:30 to 5:30 PM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={FreeClassStyle.selected_time}>
                <Text style={FreeClassStyle.selected_time__text}>
                  4:30 to 5:30 PM
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={FreeClassStyle.time_radio}>
                <Text style={FreeClassStyle.time_text}>4:30 to 5:30 PM</Text>
              </TouchableOpacity>
            </View>
          )}
          <Borders />
        </View>
        <TouchableOpacity
          style={ContactusStyle.send_btn}
          onPress={() => setdone(!done)}
        >
          <Text style={CoursesStyle.buy_text}>Reserve My Seat</Text>
        </TouchableOpacity>
        {/* <View style={[ContactusStyle.overscreen, FreeClassStyle.extra_margin]}>
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
        </View> */}
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
