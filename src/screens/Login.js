import { Text, TextInput, TouchableOpacity, View } from "react-native";
import LoginStyles from "../Styles/LoginStyle";
import GlobalStyles from "../Styles/GlobalStyle";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { postAPI } from "../utils/apiCalls";
export default function Login() {
  const navigation = useNavigation();
  const route = useRoute();
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");
  function handleSubmit() {
    let formData = { phoneNumber, password };
    postAPI(
      `/${route.params && route.params.data === "Signup" ? "Signup" : "Login"}`,
      formData
    );
  }

  return (
    <View style={LoginStyles.top}>
      <View style={LoginStyles.box}>
        <Text style={LoginStyles.texts}>
          {route.params && route.params.data === "Signup" ? "Signup" : "Login"}
        </Text>
        <View>
          <TextInput
            placeholder="Enter Phone No."
            style={GlobalStyles.input}
            value={phoneNumber}
            onChangeText={(number) => setphoneNumber(number)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <TextInput
            placeholder="Enter Password"
            style={GlobalStyles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setpassword(text)}
          />
        </View>
        <TouchableOpacity
          placeholder="Enter Password"
          style={LoginStyles.submit_btn}
          onPress={handleSubmit}
        >
          <Text style={LoginStyles.submit_text}>
            {route.params && route.params.data === "Signup"
              ? "SIGN UP"
              : "LOG IN"}
          </Text>
        </TouchableOpacity>
        <View style={LoginStyles.container}>
          <Text style={LoginStyles.msg}>
            {route.params && route.params.data === "Signup"
              ? "Already have an account? "
              : "Don't have an account? "}
          </Text>
          <TouchableOpacity
            onPress={() =>
              route.params && route.params.data === "Signup"
                ? navigation.navigate("Login")
                : navigation.navigate("Signup", { data: "Signup" })
            }
          >
            <Text style={LoginStyles.msg2}>
              {route.params && route.params.data === "Signup"
                ? "Sign in"
                : "Sign up"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
