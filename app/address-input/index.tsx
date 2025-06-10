import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { isAddress } from "../utils/usdt-address";

const AddressInputScreen = () => {
  const [address, setAddress] = useState<string>("");

  const handleWalletNavigation = () => {
    if (address.trim() === "" || !isAddress(address)) {
      alert("Por favor, ingresa una dirección USDT válida.");
      return;
    }
    router.push({
      pathname: "/wallet",
      params: { address },
    });
  };

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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleWalletNavigation}
        >
          <Text style={styles.buttonText}>Get wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => router.push("/qr-scanner")}
        >
          <Text style={styles.buttonText}>Scan QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressInput;

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
