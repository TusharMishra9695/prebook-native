import { Text, TouchableOpacity, View, Image } from "react-native";
import CheckoutStyle from "../Styles/CheckoutStyle";
import CoursesStyle from "../Styles/CoursesStyle";
export default function Checkout(props) {
  const { original_price, name } = props.route.params.data;
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
          <Text style={CheckoutStyle.selectedValue}>{name}</Text>

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
            {`You saved total (₹${(
              original_price - selectedValue
            ).toLocaleString()})`}
          </Text>
        </View>
        <View style={CheckoutStyle.coupon}></View>
        <View style={CheckoutStyle.summary}></View>
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
