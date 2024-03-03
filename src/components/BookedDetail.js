import React from "react";
import { Text, View, Linking, TouchableOpacity } from "react-native";
import CoursesStyle from "../Styles/CoursesStyle";
import BookedStyle from "../Styles/BookedStyle";
import ContactusStyle from "../Styles/ContactusStyle";
export default function BookedDetail() {
  const handleGetDirections = () => {
    const officeAddress = "SmartPoint Saket Nagar";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      officeAddress
    )}`;
    Linking.openURL(googleMapsUrl);
  };
  return (
    <View style={BookedStyle.compont}>
      <Text style={BookedStyle.heading}>Designing with html/css</Text>
      <Text style={CoursesStyle.heading3}>Date: 9149327618</Text>
      <Text style={CoursesStyle.heading3}>Slot: 9149327618</Text>
      <Text style={CoursesStyle.heading3}>Help: 9149327608</Text>
      <Text style={CoursesStyle.heading3}>
        Academy Address: 00 Saket Nagar, Kanpur,UP
      </Text>
      <TouchableOpacity
        onPress={handleGetDirections}
        style={ContactusStyle.send_btn}
      >
        <Text style={CoursesStyle.buy_text}>Get Directions to Academy</Text>
      </TouchableOpacity>
    </View>
  );
}
