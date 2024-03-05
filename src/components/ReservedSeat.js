import { Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FreeClassStyle from "../Styles/FreeClassStyle";
export default function ReservedSeat() {
  return (
    <View style={FreeClassStyle.reserved_seat__main}>
      <Text style={FreeClassStyle.done_text}>Done!</Text>
      <View>
        <Text style={FreeClassStyle.book_text}>
          Your seat has been reserved for
        </Text>
        <Text style={FreeClassStyle.book_text}>the free class on Monday</Text>
        <Text style={FreeClassStyle.book_text}>10 March at 05:00 pm</Text>
      </View>

      <AntDesign
        name="checkcircleo"
        size={100}
        style={FreeClassStyle.check_icon}
      />
    </View>
  );
}
