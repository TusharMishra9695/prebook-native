import { View, Text, TextInput, TouchableOpacity } from "react-native";
import GlobalStyles from "../Styles/GlobalStyle";
import ProfileStyle from "../Styles/ProfileStyle";
import ContactusStyle from "../Styles/ContactusStyle";
import { useState } from "react";
import FontIcon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Borders from "../components/Borders";
import CoursesStyle from "../Styles/CoursesStyle";

export default function Profile() {
  const [edit, setedit] = useState(false);
  return (
    <View style={GlobalStyles.main}>
      <Text style={ProfileStyle.sub_text}>Welcome</Text>
      <Text style={ProfileStyle.sub_text2}>Tushar Mishra</Text>
      <View style={ProfileStyle.outer_flexy}>
        <View style={ProfileStyle.detail_flexy}>
          <Text style={ProfileStyle.heading_text}>Your Details</Text>
          <TouchableOpacity onPress={() => setedit(!edit)}>
            <FontIcon name="user-edit" size={20} color="purple" />
          </TouchableOpacity>
        </View>

        <View style={ProfileStyle.detail_flexy__input}>
          {!edit && (
            <FontIcon name="user-alt" size={15} style={ProfileStyle.icons} />
          )}

          <TextInput
            style={edit ? GlobalStyles.input : ProfileStyle.custom_input}
            placeholder="Name"
            editable={edit}
          />
        </View>
        {!edit && <Borders />}

        <View style={ProfileStyle.detail_flexy__input}>
          {!edit && (
            <MaterialIcon name="email" size={19} style={ProfileStyle.icons} />
          )}

          <TextInput
            placeholder="Email"
            editable={edit}
            style={edit ? GlobalStyles.input : ProfileStyle.custom_input}
          />
        </View>
        {!edit && <Borders />}

        <View style={ProfileStyle.detail_flexy__input}>
          {!edit && (
            <FontIcon name="phone-alt" size={15} style={ProfileStyle.icons} />
          )}

          <TextInput
            placeholder="Phone Number"
            editable={edit}
            style={edit ? GlobalStyles.input : ProfileStyle.custom_input}
          />
        </View>
        {!edit && <Borders />}

        <View style={ProfileStyle.detail_flexy__input}>
          {!edit && (
            <FontIcon name="city" size={15} style={ProfileStyle.icons} />
          )}

          <TextInput
            placeholder="State"
            editable={edit}
            style={edit ? GlobalStyles.input : ProfileStyle.custom_input}
          />
        </View>
        {!edit && <Borders />}

        <View style={ProfileStyle.detail_flexy__input}>
          {!edit && (
            <FontIcon
              name="traffic-light"
              size={15}
              style={ProfileStyle.icons}
            />
          )}

          <TextInput
            placeholder="City"
            editable={edit}
            style={edit ? GlobalStyles.input : ProfileStyle.custom_input}
          />
        </View>
        {!edit && <Borders />}
      </View>
      {edit && (
        <View>
          <TouchableOpacity
            style={ContactusStyle.send_btn}
            // onPress={handleContact}
          >
            <Text style={CoursesStyle.buy_text}>Update Details</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
