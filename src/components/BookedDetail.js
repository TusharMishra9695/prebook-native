import React from "react";
import { Text, View, Linking, TouchableOpacity } from "react-native";
import CoursesStyle from "../Styles/CoursesStyle";
import BookedStyle from "../Styles/BookedStyle";
import ContactusStyle from "../Styles/ContactusStyle";
export default function BookedDetail(props) {
  const handleGetDirections = () => {
    const officeAddress = "SmartPoint Saket Nagar";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      officeAddress
    )}`;
    Linking.openURL(googleMapsUrl);
  };

  return (
    <View style={BookedStyle.compont}>
      <Text style={BookedStyle.heading}>{props.item.course_name}</Text>
      <View style={BookedStyle.text_flexy}>
        <Text style={BookedStyle.name_heading__color}>Name</Text>
        <Text style={BookedStyle.user_text}>{props.item.name}</Text>
      </View>
      <View style={BookedStyle.text_flexy}>
        <Text style={BookedStyle.name_heading__color}>Date</Text>
        <Text style={BookedStyle.user_text}>{props.item.date}</Text>
      </View>
      <View style={BookedStyle.text_flexy}>
        <Text style={BookedStyle.name_heading__color}>Slot</Text>
        <Text style={BookedStyle.user_text}>{props.item.time}</Text>
      </View>
      <View style={BookedStyle.text_flexy}>
        <Text style={BookedStyle.name_heading__color}>College</Text>
        <Text style={BookedStyle.user_text}>{props.item.college}</Text>
      </View>
      <View style={BookedStyle.text_flexy}>
        <Text style={BookedStyle.name_heading__color}>Help</Text>
        <Text style={BookedStyle.user_text}>9149327608</Text>
      </View>
      <View style={BookedStyle.text_flexy}>
        <Text style={BookedStyle.name_heading__color}>Academy address</Text>
        <Text style={BookedStyle.user_text}> 00 Saket Nagar, Kanpur,UP</Text>
      </View>
      <TouchableOpacity
        onPress={handleGetDirections}
        style={ContactusStyle.send_btn}
      >
        <Text style={CoursesStyle.buy_text}>Get Directions to Academy</Text>
      </TouchableOpacity>
    </View>
  );
}
