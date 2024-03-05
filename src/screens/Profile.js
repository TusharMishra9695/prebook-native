import { View, Text, TextInput, TouchableOpacity } from "react-native";
import GlobalStyles from "../Styles/GlobalStyle";
import ProfileStyle from "../Styles/ProfileStyle";
import ContactusStyle from "../Styles/ContactusStyle";
import { validateEmail } from "../utils/someExports";
import { getCachedData } from "../utils/someExports";
import { fetchUserData } from "../store/slices/apiSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { patchAPI } from "../utils/apiCalls";
import FontIcon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Borders from "../components/Borders";
import CoursesStyle from "../Styles/CoursesStyle";
import Container, { Toast } from "toastify-react-native";
import { TextError } from "../utils/someExports";

export default function Profile(props) {
  const [edit, setedit] = useState(false);
  const dispatch = useDispatch();

  const [form, setform] = useState({
    name: "",
    email: "",
  });
  const [error, seterror] = useState({
    email: false,
    check: false,
  });
  async function handleContact() {
    if (form.name && form.email) {
      if (validateEmail(form.email)) {
        let formData = {
          name: form.name,
          email: form.email,
        };
        try {
          let result = await getCachedData("token");
          if (result.token) {
            let confirm = await patchAPI(
              "/user-detail",
              formData,
              result.token
            );

            if (confirm.success) {
              setform({
                ...form,
                name: "",
                email: "",
              });
              seterror({ ...error, check: false });
              setedit(false);
              dispatch(fetchUserData(result.token));
              Toast.success(confirm.message);
            }
          }
        } catch (e) {
          console.log("some error in profile", e);
        }
      } else {
        seterror({ ...error, email: true });
      }
    } else {
      seterror({ ...error, check: true });
    }
  }
  return (
    <>
      {props.route.params && (
        <View style={GlobalStyles.main}>
          <Container position="top" />
          <Text style={ProfileStyle.sub_text}>Welcome</Text>
          <Text style={ProfileStyle.sub_text2}>
            {props.route.params.data.name || "You can also update your detail!"}
          </Text>
          <View style={ProfileStyle.outer_flexy}>
            <View style={ProfileStyle.detail_flexy}>
              <Text style={ProfileStyle.heading_text}>Your Details</Text>
              <TouchableOpacity onPress={() => setedit(!edit)}>
                <FontIcon name="user-edit" size={20} color="purple" />
              </TouchableOpacity>
            </View>

            <View style={ProfileStyle.detail_flexy__input}>
              {!edit && (
                <FontIcon
                  name="user-alt"
                  size={15}
                  style={ProfileStyle.icons}
                />
              )}

              <TextInput
                style={edit ? GlobalStyles.input : ProfileStyle.custom_input}
                placeholder={props.route.params.data.name || "Name"}
                editable={edit}
                value={form.name}
                onChangeText={(text) => setform({ ...form, name: text })}
              />
              {error.check && !form.name && TextError("This field is required")}
            </View>
            {!edit && <Borders />}

            <View style={ProfileStyle.detail_flexy__input}>
              {!edit && (
                <MaterialIcon
                  name="email"
                  size={19}
                  style={ProfileStyle.icons}
                />
              )}

              <TextInput
                placeholder={props.route.params.data.email || "Email"}
                editable={edit}
                style={edit ? GlobalStyles.input : ProfileStyle.custom_input}
                value={form.email}
                onChangeText={(text) => setform({ ...form, email: text })}
              />
              {error.check &&
                !form.email &&
                TextError("This field is required")}
              {error.email && TextError("Enter correct email")}
            </View>
            {!edit && <Borders />}

            {!edit && (
              <>
                <View style={ProfileStyle.detail_flexy__input}>
                  <FontIcon
                    name="phone-alt"
                    size={15}
                    style={ProfileStyle.icons}
                  />

                  <TextInput
                    placeholder={props.route.params.data.phoneNumber.toString()}
                    editable={edit}
                    style={
                      edit ? GlobalStyles.input : ProfileStyle.custom_input
                    }
                  />
                </View>
                <Borders />
              </>
            )}

            {!edit && (
              <>
                <View style={ProfileStyle.detail_flexy__input}>
                  <FontIcon name="city" size={15} style={ProfileStyle.icons} />

                  <TextInput
                    placeholder={props.route.params.data.state}
                    editable={edit}
                    style={
                      edit ? GlobalStyles.input : ProfileStyle.custom_input
                    }
                  />
                </View>
                <Borders />
              </>
            )}

            {!edit && (
              <>
                <View style={ProfileStyle.detail_flexy__input}>
                  <FontIcon
                    name="traffic-light"
                    size={15}
                    style={ProfileStyle.icons}
                  />

                  <TextInput
                    placeholder={props.route.params.data.city}
                    editable={edit}
                    style={
                      edit ? GlobalStyles.input : ProfileStyle.custom_input
                    }
                  />
                </View>
                <Borders />
              </>
            )}
          </View>
          {edit && (
            <View>
              <TouchableOpacity
                style={ContactusStyle.send_btn}
                onPress={() => handleContact()}
              >
                <Text style={CoursesStyle.buy_text}>Update Details</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </>
  );
}
