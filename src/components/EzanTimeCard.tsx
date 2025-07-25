import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { MapPin } from "phosphor-react-native";
import { ActivityIndicator } from "react-native";

import { useNextPrayerTime } from "../hooks/UseNextPrayerTime";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const PRAYERS: { [key: string]: string } = {
  Imsak: "İmsak",
  Sunrise: "Güneş",
  Dhuhr: "Öğle",
  Asr: "İkindi",
  Maghrib: "Akşam",
  Isha: "Yatsı",
};

const EzanTimeCard: React.FC = () => {
  const { data } = useNextPrayerTime();
  const [activePrayer, setActivePrayer] = useState<string>("");
  const [nextPrayerTime, setNextPrayerTime] = useState<string>("");
  const [countdown, setCountdown] = useState("Yükleniyor");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (data?.name && data?.time) {
      setActivePrayer(data?.name);
      setNextPrayerTime(data?.time);
    }
  }, [data]);

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
      return "00:00:00";
    }

    const totalSeconds = Math.floor(diffMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  useEffect(() => {
    if (!nextPrayerTime) return;

    const targetTime = convertToDateTime(nextPrayerTime);

    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setCountdown(calculateCountdown(targetTime, new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, [nextPrayerTime]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (!data) {
    return (
      <View style={styles.wrapper}>
      <ImageBackground
        source={require("../../assets/ezantime.jpg")}
        style={styles.image}
        imageStyle={{ borderRadius: 16 }}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <ActivityIndicator
          size="large"
          color="#fff"
          style={{ position: "absolute", top: "50%", left: "50%", transform: [{ translateX: -20 }, { translateY: -20 }] }}
        />

        <View style={styles.bottomRight}>
          <Text style={styles.bottomText}>{formatDate(currentTime)}</Text>
        </View>
      </ImageBackground>
    </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("../../assets/ezantime.jpg")}
        style={styles.image}
        imageStyle={{ borderRadius: 16 }}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <View style={styles.prayerNamesRow}>
          {Object.values(PRAYERS).map((prayer, index) => (
            <Text
              key={index}
              style={[
                styles.prayerName,
                prayer === PRAYERS[activePrayer] && styles.activePrayer,
              ]}
            >
              {prayer}
            </Text>
          ))}
        </View>

        <View style={styles.content}>
          <Text style={styles.nextPrayer}>
            {PRAYERS[activePrayer]} ezanına kalan süre
          </Text>
          <Text style={styles.timeText}>{countdown}</Text>
        </View>

        <View style={styles.bottomRight}>
          <Text style={styles.bottomText}>{formatDate(currentTime)}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 16,
    marginBottom: 0,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  image: {
    width: SCREEN_WIDTH - 32,
    height: 160,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 16,
  },
  prayerNamesRow: {
    position: "absolute",
    top: 12,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prayerName: {
    fontSize: 13,
    color: "#eee",
    opacity: 0.5,
    fontWeight: "400",
  },
  activePrayer: {
    color: "#fff",
    opacity: 1,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  nextPrayer: {
    fontSize: 14,
    color: "#eee",
    fontWeight: "300",
    marginBottom: 6,
  },
  timeText: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
  },
  bottomLeft: {
    position: "absolute",
    bottom: 12,
    left: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  bottomRight: {
    position: "absolute",
    bottom: 12,
    right: 16,
  },
  bottomText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "400",
  },
});

export default EzanTimeCard;
