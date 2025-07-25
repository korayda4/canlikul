import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RoomCard = ({ title, price, riyal }: any) => (
  <View style={styles.card}>
    <Text style={styles.roomTitle}>
      {title} - ${price} - Riyal {riyal}
    </Text>
    <Text style={styles.riyals}>({riyal} Riyal)</Text>
    <Text style={styles.sub}>
      0-2 Yaş Bebek: $450 ({Math.round(450 * 3.75)} Riyal)
    </Text>
    <Text style={styles.sub}>
      2-11 Yaş Çocuk: $900 ({Math.round(900 * 3.75)} Riyal)
    </Text>
    <View style={styles.bullets}>
      <Text>• Ulaşım</Text>
      <Text>• Konaklama</Text>
      <Text>• Rehberlik</Text>
      <Text>• İkramlar</Text>
    </View>
  </View>
);

export default RoomCard;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f97316",
    marginBottom: 16,
    textAlign: "center",
  },
  desc: {
    fontSize: 14,
    marginBottom: 16,
    color: "#333",
    lineHeight: 20,
  },
  travelInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 12,
  },
  travelItem: {
    alignItems: "center",
    minWidth: 80,
  },
  travelLabel: {
    marginTop: 6,
    fontWeight: "600",
    fontSize: 16,
    color: "#f97316",
  },
  travelDate: {
    marginTop: 4,
    fontSize: 13,
    color: "#555",
  },
  travelTime: {
    fontSize: 13,
    color: "#555",
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16,
    gap: 12,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f97316",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    marginBottom: 12,
  },
  roomTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  riyals: {
    color: "#555",
    marginBottom: 4,
  },
  sub: {
    fontSize: 13,
    marginBottom: 2,
  },
  bullets: {
    marginTop: 8,
    gap: 2,
  },
});