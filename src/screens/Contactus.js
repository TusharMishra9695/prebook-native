import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import ContactusStyle from "../Styles/ContactusStyle";
import GlobalStyles from "../Styles/GlobalStyle";
import CoursesStyle from "../Styles/CoursesStyle";

export default function Contactus() {
  return (
    <View style={ContactusStyle.main}>
      <Text style={ContactusStyle.heading}>Contact Us</Text>
      <View style={ContactusStyle.overscreen}>
        <Text style={ContactusStyle.inside_heading}>
          Feel free to contact us and we will get back to you as soon as we can
          !
        </Text>
        <View>
          <TextInput
            placeholder="Name"
            style={GlobalStyles.input}
            // value={password}
            // onChangeText={(text) => setpassword(text)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Email"
            style={GlobalStyles.input}
            // value={password}
            // onChangeText={(text) => setpassword(text)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Message"
            style={GlobalStyles.input}
            // value={password}
            // onChangeText={(text) => setpassword(text)}
          />
        </View>
        <View>
          <TouchableOpacity style={ContactusStyle.send_btn}>
            <Text style={CoursesStyle.buy_text}>SEND</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={ContactusStyle.overscreen}>
        <View style={ContactusStyle.gap_us}>
          <Text style={ContactusStyle.talk_text}>Visit us</Text>
          <Text style={ContactusStyle.inside_heading}>00 Pashupati Nagar</Text>
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
    </View>
  );
}
