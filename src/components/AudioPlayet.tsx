import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Audio, AVPlaybackStatus } from "expo-av";
import { Play, Pause } from "phosphor-react-native"; // ← ikonlar burada

interface AudioPlayerProps {
  audioUri: string | number;
  shouldPlay?: boolean;
  onPlay?: () => void;
  onStop?: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioUri,
  shouldPlay = false,
  onPlay,
  onStop,
}) => {
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [positionMillis, setPositionMillis] = useState(0);
  const [durationMillis, setDurationMillis] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const formatTime = (millis: number): string => {
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const unloadSound = async () => {
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current.setOnPlaybackStatusUpdate(null);
      soundRef.current = null;
    }
  };

  const loadSound = async () => {
    setIsLoading(true);
    try {
      await unloadSound();
      const source =
        typeof audioUri === "string" ? { uri: audioUri } : audioUri;

      const { sound } = await Audio.Sound.createAsync(source, {
        shouldPlay: false,
      });

      sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
        if (!status.isLoaded) return;
        setPositionMillis(status.positionMillis);
        setDurationMillis(status.durationMillis ?? 1);
        setIsPlaying(status.isPlaying);

        if (status.didJustFinish) {
          onStop?.();
        }
      });

      soundRef.current = sound;
    } catch (err) {
      console.error("Ses yüklenirken hata:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePlayPause = async () => {
    if (!soundRef.current) return;
    const status = await soundRef.current.getStatusAsync();
    if (!status.isLoaded) return;

    if (status.isPlaying) {
      await soundRef.current.pauseAsync();
      onStop?.();
    } else {
      await soundRef.current.playAsync();
      onPlay?.();
    }
  };

  const handleSeek = async (value: number) => {
    if (!soundRef.current) return;
    await soundRef.current.setPositionAsync(value);
  };

  useEffect(() => {
    loadSound();
    return () => {
      unloadSound();
    };
  }, [audioUri]);

  useEffect(() => {
    const controlPlayback = async () => {
      if (!soundRef.current) return;
      const status = await soundRef.current.getStatusAsync();
      if (!status.isLoaded) return;

      if (shouldPlay && !status.isPlaying) {
        await soundRef.current.playAsync();
        onPlay?.();
      } else if (!shouldPlay && status.isPlaying) {
        await soundRef.current.pauseAsync();
        onStop?.();
      }
    };

    controlPlayback();
  }, [shouldPlay]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#ff7809a1" />
      ) : (
        <View style={styles.controlBox}>
          <TouchableOpacity onPress={togglePlayPause} style={styles.playPauseButton}>
            {isPlaying ? (
              <Pause size={24} color="#ff7809a1" weight="bold" />
            ) : (
              <Play size={24} color="#ff7809a1" weight="bold" />
            )}
          </TouchableOpacity>

          <View style={styles.sliderArea}>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={durationMillis}
              value={positionMillis}
              onSlidingComplete={handleSeek}
              minimumTrackTintColor="#ff7809a1"
              maximumTrackTintColor="#ccc"
              thumbTintColor="#ff7809a1"
            />
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{formatTime(positionMillis)}</Text>
              <Text style={styles.timeText}>{formatTime(durationMillis)}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    padding: 8,
    backgroundColor: "#F0F0F0",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  controlBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  playPauseButton: {
    padding: 8,
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderArea: {
    flex: 1,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -4,
  },
  timeText: {
    fontSize: 12,
    color: "#333",
  },
});

export default AudioPlayer;
