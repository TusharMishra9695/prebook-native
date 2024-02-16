import { useNavigation } from "@react-navigation/native";

async function checkAuth() {
  const navigation = useNavigation();
  try {
    let result = await getCachedData("token");
    if (result.token) {
      navigation.navigate("Course");
    } else {
      navigation.navigate("Login");
    }
  } catch (e) {
    console.log(e, "auth error");
  }
}
export default checkAuth;
