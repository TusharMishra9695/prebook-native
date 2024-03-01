import React from "react";
import { Text, View } from "react-native";
import AboutStyle from "../Styles/AboutStyle";
export default function RepeatAbout() {
  return (
    <View style={AboutStyle.main}>
      <Text style={AboutStyle.heading_text}>Heading</Text>
      <Text style={AboutStyle.sub_text}>
        Below is a generic example of terms and conditions content. Please note
        that it's crucial to consult with legal professionals to ensure that
        your terms and conditions comply with relevant laws and adequately
        protect your interests.
      </Text>
    </View>
  );
}
