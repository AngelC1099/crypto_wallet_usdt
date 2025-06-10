import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WalletScreen = () => {
  const { address } = useLocalSearchParams();
  const mockBalance = (Math.random() * 10000).toFixed(2);

  const mockTransactions = [
    { to: "0xabcd...1234", amount: (Math.random() * 1000).toFixed(2) },
    { to: "0xefgh...5678", amount: (Math.random() * 1000).toFixed(2) },
    { to: "0xijkl...abcd", amount: (Math.random() * 1000).toFixed(2) },
  ];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
      <View>
        <Text style={styles.label}>Balance:</Text>
        <Text style={styles.balance}>{mockBalance} USDT</Text>
      </View>
      <View>
        <Text style={styles.label}>Recent transactions:</Text>
        <View style={styles.listContainer}>
          {mockTransactions.map((t, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.transactionTo}>→ {t.to}</Text>
              <Text style={styles.transactionAmount}>{t.amount} USDT</Text>
            </View>
          ))}
        </View>
        {/* <FlatList
          style={styles.listContainer}
          data={mockTxs}
          keyExtractor={(item) => item.hash}
          renderItem={({ item }) => (
            <View style={styles.txItem}>
              <Text style={styles.txTo}>→ {item.to}</Text>
              <Text style={styles.txAmount}>{item.amount} USDT</Text>
            </View>
          )}
        /> */}
      </View>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: "#fafafa",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  address: {
    fontSize: 16,
    color: "#444",
  },
  balance: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1a73e8",
  },
  listContainer: {
    gap: 8,
  },
  itemContainer: {
    padding: 16,
    backgroundColor: "#e0e7ff",
    borderRadius: 16,
  },
  transactionTo: {
    fontSize: 14,
    color: "#333",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "500",
  },
});
