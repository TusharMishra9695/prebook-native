import GlobalStyles from "../Styles/GlobalStyle";
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
export const TextError = (text) => {
  return <Text style={GlobalStyles.error}>{text}*</Text>;
};
