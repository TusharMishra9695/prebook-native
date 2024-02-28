import React, { useState } from "react";
import { View, Button, TextInput, Modal } from "react-native";

const OTPVerificationModal = ({ visible, onClose }) => {
  const [otp, setOTP] = useState("");

  const handleVerify = () => {
    onClose();
  };

  return (
    <Modal visible={visible} onRequestClose={onClose} animationType="slide">
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

export default OTPVerificationModal;
