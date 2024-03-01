import React, { useState } from "react";
import { memo } from "react";
import { View, Button, TextInput, Modal } from "react-native";
import { postAPI } from "../utils/apiCalls";
import Container, { Toast } from "toastify-react-native";

const OTPVerificationModal = ({ visible, onClose, data }) => {
  const [otp, setOTP] = useState("");

  const handleVerify = async () => {
    try {
      let result = await postAPI("/verify", data);
      console.log(result, "result aa gya hai");
      if (result.success) {
        Toast.error(result.message);
        onClose();
      } else {
        Toast.error(result.message);
      }
    } catch (e) {
      console.log(e, "error in otp modal");
    }
  };

  return (
    <Modal visible={visible} onRequestClose={onClose} animationType="slide">
      <Container position="top" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          placeholder="Enter OTP"
          value={otp}
          onChangeText={setOTP}
          keyboardType="numeric"
          maxLength={6}
          style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
        />
        <Button title="Verify OTP" onPress={handleVerify} />
      </View>
    </Modal>
  );
};

export default memo(OTPVerificationModal);
