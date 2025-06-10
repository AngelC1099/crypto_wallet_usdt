import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="address-input"
      screenOptions={{ headerShown: false }}
    />
  );
}
