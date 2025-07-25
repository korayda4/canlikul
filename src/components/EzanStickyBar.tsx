import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useNextPrayerTime } from '../hooks/UseNextPrayerTime'; // hook'u import et
import { ActivityIndicator } from 'react-native-paper';

const EzanStickyBar: React.FC = () => {
  const { data } = useNextPrayerTime();

  const [countdown, setCountdown] = useState("Yükleniyor");
  const [currentTime, setCurrentTime] = useState(new Date());

  const convertToDateTime = (time: string): Date => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    const now = new Date();

    const target = new Date(now);
    target.setHours(hours);
    target.setMinutes(minutes);
    target.setSeconds(seconds ?? 0);
    target.setMilliseconds(0);

    if (target <= now) {
      target.setDate(target.getDate() + 1);
    }

    return target;
  };

  const calculateCountdown = (targetTime: Date, currentTime: Date): string => {
    const diffMs = targetTime.getTime() - currentTime.getTime();
    if (diffMs <= 0) {
      return "Yükleniyor";
    }

    const totalSeconds = Math.floor(diffMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  useEffect(() => {
    if (!data?.time) return;

    const targetTime = convertToDateTime(data.time);

    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setCountdown(calculateCountdown(targetTime, now));
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  if(!data) {
    return (
      <View style={styles.container}>
      <Text style={styles.time}>Sonraki Vakit: <ActivityIndicator /></Text>
      <Text style={styles.date}>{currentTime.toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}</Text>
    </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.time}>Sonraki Vakit: {countdown}</Text>
      <Text style={styles.date}>{currentTime.toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 99,
  },
  time: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  date: {
    fontSize: 14,
    fontWeight: "400",
    color: "#555",
  },
});

export default EzanStickyBar;
