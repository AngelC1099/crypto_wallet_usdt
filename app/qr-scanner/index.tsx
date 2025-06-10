import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { isAddress } from "../utils/usdt-address";

const QRScannerScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (!permission?.granted) {
    requestPermission();
    return <View />;
  }

  const handleScan = (result: BarcodeScanningResult) => {
    if (!scanned) {
      setScanned(true);
      if (isAddress(result.data)) {
        router.replace({
          pathname: "/wallet",
          params: { address: result.data },
        });
      } else {
        setError("Scan a valid USDT QR address.");
      }
      setTimeout(() => {
        setScanned(false);
        setError(null);
      }, 3000);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={handleScan}
      >
        <View style={styles.overlay}>
          {error && <Text style={styles.overlayError}>{error}</Text>}
          <Text style={styles.overlayText}>Scan QR</Text>
        </View>
      </CameraView>
    </View>
  );
};

export default QRScannerScreen;

const styles = StyleSheet.create({
  container: { position: "relative", flex: 1 },
  camera: { flex: 1 },
  overlay: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  overlayText: {
    color: "#fff",
    fontSize: 18,
    backgroundColor: "#0009",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  overlayError: {
    color: "red",
    fontSize: 14,
    marginBottom: 8,
  },
});
