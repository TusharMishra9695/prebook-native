import { Text, TextInput, TouchableOpacity, View } from "react-native";
import LoginStyles from "../Styles/LoginStyle";
import GlobalStyles from "../Styles/GlobalStyle";

export default function Login() {
  return (
    <View style={LoginStyles.top}>
      <View style={LoginStyles.box}>
        <Text style={LoginStyles.texts}>Log in</Text>
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
          <Text style={LoginStyles.submit_text}>LOG IN</Text>
        </TouchableOpacity>
        <Text style={LoginStyles.msg}>
          Don't have an account? <Text style={LoginStyles.msg2}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
}
