import { Text, TextInput, TouchableOpacity, View } from "react-native";
import LoginStyles from "../Styles/LoginStyle";
import GlobalStyles from "../Styles/GlobalStyle";
export default function Signup() {
  return (
    <View style={LoginStyles.top}>
      <View style={LoginStyles.box}>
        <Text style={LoginStyles.texts}>Sign up</Text>
        <View>
          <TextInput placeholder="Enter Phone No." style={GlobalStyles.input} />
        </View>
        <View>
          <TextInput placeholder="Enter Password" style={GlobalStyles.input} />
        </View>
        <TouchableOpacity
          placeholder="Enter Password"
          style={LoginStyles.submit_btn}
        >
          <Text style={LoginStyles.submit_text}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={LoginStyles.msg}>
          Already have an account? <Text style={LoginStyles.msg2}>Sign in</Text>
        </Text>
      </View>
    </View>
  );
}
