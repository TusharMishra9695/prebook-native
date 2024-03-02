import React from "react";
import { Text, View } from "react-native";
import AboutStyle from "../Styles/AboutStyle";
export default function RepeatAbout(props) {
  return (
    <View style={AboutStyle.main}>
      <Text style={AboutStyle.heading_text}>{props.item.heading}</Text>
      <Text style={AboutStyle.sub_text}>{props.item.detail}</Text>
    </View>
  );
}
