import { Text, TouchableOpacity, View, Image } from "react-native";
import CheckoutStyle from "../Styles/CheckoutStyle";
import CoursesStyle from "../Styles/CoursesStyle";
import Borders from "../components/Borders";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default function Checkout(props) {
  const { original_price, name, coupon, duration, discounted_price } =
    props.route.params.data;
  const { selectedValue } = props.route.params;
  return (
    <View style={CheckoutStyle.main}>
      <View style={CheckoutStyle.items}>
        <Text style={CheckoutStyle.selectedValue}>Items in Cart</Text>
        <View style={CheckoutStyle.items_list}>
          <Text style={CheckoutStyle.oneitem}>You are buying (1) item</Text>

          <Image
            style={CheckoutStyle.image}
            source={{
              uri: "https://boffinsacademy.com/wp-content/uploads/2023/10/best-data-science-courses-in-nagpur-8.png",
            }}
          />
          <Text style={CheckoutStyle.selectedValue}>
            {name} [{duration} Months]
          </Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={CheckoutStyle.selectedValue}>
              ₹ {selectedValue.toLocaleString()}
            </Text>
            <Text style={CoursesStyle.inner_price}>
              {original_price.toLocaleString()}
            </Text>
            <Text style={CheckoutStyle.discount_btn}>
              {(100 - (selectedValue * 100) / original_price).toFixed(2)}% OFF
            </Text>
          </View>
          <Text style={CheckoutStyle.oneitem}>
            {`You saved (₹${(
              original_price - selectedValue
            ).toLocaleString()})`}
          </Text>
        </View>
        <View style={CheckoutStyle.coupon}></View>
        <View style={CheckoutStyle.summary}>
          <View style={CheckoutStyle.inside_summary}>
            <Text style={CheckoutStyle.summary_name01}>Payment Summary</Text>
            <MaterialIcon name="arrow-drop-down" size={26} color="black" />
          </View>
          <View style={CheckoutStyle.inside_summary}>
            <Text style={CheckoutStyle.summary_name01}>Price</Text>
            <Text style={CheckoutStyle.summary_name02}>
              ₹ {original_price.toLocaleString()}
            </Text>
          </View>
          <View style={CheckoutStyle.inside_summary}>
            <Text style={CheckoutStyle.summary_name01}>Course Disc.</Text>
            <Text style={CheckoutStyle.summary_name02}>
              -₹ {(original_price - selectedValue).toLocaleString()}
            </Text>
          </View>
          <View style={CheckoutStyle.inside_summary}>
            <Text style={CheckoutStyle.summary_name01}>Coupon Disc.</Text>
            <Text style={CheckoutStyle.summary_name02}>
              -₹{" "}
              {selectedValue === discounted_price.onetime
                ? coupon.toLocaleString()
                : 0}
            </Text>
          </View>
          <Borders />
          <View style={CheckoutStyle.inside_summary}>
            <Text style={CheckoutStyle.summary_name01}>Total Amount</Text>
            <Text style={CheckoutStyle.summary_name02}>
              ₹
              {selectedValue === discounted_price.onetime
                ? (selectedValue - coupon).toLocaleString()
                : selectedValue}
            </Text>
          </View>
        </View>
      </View>
      <View style={CheckoutStyle.footer}>
        <View style={CheckoutStyle.flexy}>
          <View style={CheckoutStyle.flexy}>
            <Text style={CheckoutStyle.selectedValue}>
              ₹ {selectedValue.toLocaleString()}
            </Text>
            <Text style={CoursesStyle.inner_price}>
              {original_price.toLocaleString()}
            </Text>
            <Text style={CheckoutStyle.discount_btn}>
              {(100 - (selectedValue * 100) / original_price).toFixed(2)}% OFF
            </Text>
          </View>
        </View>
        <TouchableOpacity style={CheckoutStyle.checkout_btn}>
          <Text style={CheckoutStyle.checkout_text}>Checkout To Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
