import React, { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import ContactusStyle from "../Styles/ContactusStyle";
import GlobalStyles from "../Styles/GlobalStyle";
import CoursesStyle from "../Styles/CoursesStyle";
import { TextError, getCachedData, validateEmail } from "../utils/someExports";
import { postAPI } from "../utils/apiCalls";
import Container, { Toast } from "toastify-react-native";

export default function Contactus() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [token, settoken] = useState("");
  const [error, seterror] = useState({
    email: false,
    check: false,
  });
  async function handleContact() {
    if (name && email && message) {
      if (validateEmail(email)) {
        seterror({ ...error, email: false });
        let formData = {
          name,
          email,
          message,
          phoneNumber: 9149000021,
        };
        try {
          let confirm = await postAPI("/contact", formData, token);
          if (confirm.success) {
            Toast.success(confirm.message);
            setname("");
            setemail("");
            setmessage("");
            seterror({ ...error, check: false });
          } else {
            Toast.error(confirm.message);
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
        settoken(result.token);
      } else {
        navigation.navigate("Login");
      }
    } catch (e) {
      console.log(e, "auth error contact");
    }
  }
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <View style={ContactusStyle.main}>
      <Container position="top" />
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
            value={name}
            onChangeText={(text) => setname(text)}
          />
          {error.check && !name && TextError("This field is required")}
        </View>
        <View>
          <TextInput
            placeholder="Email"
            style={GlobalStyles.input}
            value={email}
            onChangeText={(text) => setemail(text)}
          />
          {error.check && !email && TextError("This field is required")}
          {error.email && TextError("Enter correct email")}
        </View>
        <View>
          <TextInput
            placeholder="Message"
            multiline={true}
            style={GlobalStyles.input}
            value={message}
            onChangeText={(text) => setmessage(text)}
          />
          {error.check && !message && TextError("This field is required")}
        </View>
        <View>
          <TouchableOpacity
            style={ContactusStyle.send_btn}
            onPress={handleContact}
          >
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
