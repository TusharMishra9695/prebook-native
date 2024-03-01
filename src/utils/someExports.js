// import GlobalStyles from "../Styles/GlobalStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native";

export const Colors = {
  primary: "#ffc969",
  secondary: "purple",
  white: "#fff",
};

export const validatePhoneNumber = (phoneNumber) => {
  // Regular expression for Indian phone numbers
  const phoneNumberRegex = /^[6-9]\d{9}$/;

  // Test the phone number against the regex
  return phoneNumberRegex.test(phoneNumber);
};
export const validatePassword = (password) => {
  // Regular expression for password validation
  // At least one uppercase letter, one lowercase letter, one digit, and a minimum length of 8 characters
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  // Test the password against the regex
  return passwordRegex.test(password);
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export const TextError = (text) => {
  return <Text style={{ color: "red" }}>{text}*</Text>;
};

export const cacheData = async (key, data) => {
  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Error caching data:", error);
  }
};

// Function to retrieve cached data
export const getCachedData = async (key) => {
  try {
    const jsonData = await AsyncStorage.getItem(key);
    return jsonData ? JSON.parse(jsonData) : null;
  } catch (error) {
    console.error("Error retrieving cached data:", error);
    return null;
  }
};

export const removeItemFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Item with key ${key} removed from AsyncStorage.`);
  } catch (error) {
    console.error("Error removing item from AsyncStorage:", error);
  }
};
