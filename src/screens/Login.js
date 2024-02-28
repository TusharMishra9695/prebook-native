import { Text, TextInput, TouchableOpacity, View } from "react-native";
import LoginStyles from "../Styles/LoginStyle";
import GlobalStyles from "../Styles/GlobalStyle";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { postAPI } from "../utils/apiCalls";
import {
  TextError,
  cacheData,
  getCachedData,
  validatePassword,
  validatePhoneNumber,
} from "../utils/someExports";
import OTPVerificationModal from "../components/OTPModal";
import Container, { Toast } from "toastify-react-native";
export default function Login() {
  const navigation = useNavigation();
  const route = useRoute();
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const [errors, seterrors] = useState({
    phoneNumber: false,
    password: false,
  });

  function checkAuth() {
    let result = getCachedData("token");
    if (result.token) {
      navigation.navigate("Course");
    }
  }
  useEffect(() => {
    checkAuth();
  }, []);
  async function handleSubmit() {
    let number = parseInt(phoneNumber);
    if (validatePhoneNumber(phoneNumber)) {
      let formData = { phoneNumber: number, password, role: "user" };
      let signupData = {
        phoneNumber: number,
        password,
        role: "user",
        isVerified: false,
      };
      try {
        let data = await postAPI(
          `/${
            route.params && route.params.data === "Signup" ? "signup" : "login"
          }`,
          route.params && route.params.data === "Signup" ? signupData : formData
        );

        if (data.success) {
          route.params && route.params.data == "Signup"
            ? null
            : cacheData("token", { token: data.token });
          navigation.navigate(
            route.params && route.params.data == "Signup"
              ? setModalVisible(true)
              : "Course"
          );
        } else {
          Toast.error(data.message);
        }
      } catch (e) {
        console.log("some error in login/signup");
      }
    } else {
      seterrors({ ...errors, phoneNumber: true });
    }
    setpassword(""), setphoneNumber("");
  }

  return (
    <View style={LoginStyles.top}>
      <Container position="top" />
      <View style={LoginStyles.box}>
        <Text style={LoginStyles.texts}>
          {route.params && route.params.data === "Signup" ? "Signup" : "Login"}
        </Text>

        <View>
          <TextInput
            placeholder="Enter your phone no."
            style={GlobalStyles.input}
            value={phoneNumber}
            onChangeText={(number) => {
              setphoneNumber(number),
                seterrors({ ...errors, phoneNumber: false });
            }}
            keyboardType="numeric"
            maxLength={10}
          />
          {errors.phoneNumber && TextError("Enter Correct Number")}
        </View>
        <View>
          <TextInput
            placeholder="Enter password"
            style={GlobalStyles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setpassword(text)}
          />
        </View>
        <TouchableOpacity style={LoginStyles.submit_btn} onPress={handleSubmit}>
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
              route.params
                ? route.params.data === "Signup"
                  ? navigation.navigate("Login")
                  : null
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
      <OTPVerificationModal visible={modalVisible} onClose={handleCloseModal} />
    </View>
  );
}
