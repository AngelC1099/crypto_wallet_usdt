import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const AuthScreen = () => {
  const [address, setAddress] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crypto Wallet USDT</Text>
      <TextInput
        style={styles.input}
        placeholder="Type USDT address..."
        autoCapitalize="none"
        autoCorrect={false}
        value={address}
        onChangeText={setAddress}
      />
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#111827",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    gap: 4,
  },
  button: {
    backgroundColor: "#3b82f6",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  secondaryButton: {
    backgroundColor: "#6b7280",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
