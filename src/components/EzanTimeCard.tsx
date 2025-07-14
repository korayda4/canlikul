import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { MapPin } from 'phosphor-react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const PRAYERS = ['Sabah', 'Öğle', 'İkindi', 'Akşam', 'Yatsı'];
const ACTIVE_PRAYER = 'Akşam'; // Şimdilik hardcoded

const EzanTimeCard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date
      .toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      .replace(/\./g, ':');
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('../../assets/ezantime.jpg')}
        style={styles.image}
        imageStyle={{ borderRadius: 16 }}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <View style={styles.prayerNamesRow}>
          {PRAYERS.map((prayer, index) => (
            <Text
              key={index}
              style={[
                styles.prayerName,
                prayer === ACTIVE_PRAYER && styles.activePrayer,
              ]}
            >
              {prayer}
            </Text>
          ))}
        </View>

        <View style={styles.content}>
          <Text style={styles.nextPrayer}>{ACTIVE_PRAYER} ezanına kalan süre</Text>
          <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
        </View>

        <View style={styles.bottomLeft}>
          <MapPin size={18} color="#fff" weight="regular" />
          <Text style={styles.bottomText}>İstanbul</Text>
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
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  image: {
    width: SCREEN_WIDTH - 32,
    height: 200,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 16,
  },
  prayerNamesRow: {
    position: 'absolute',
    top: 12,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prayerName: {
    fontSize: 13,
    color: '#eee',
    opacity: 0.5,
    fontWeight: '400',
  },
  activePrayer: {
    color: '#fff',
    opacity: 1,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextPrayer: {
    fontSize: 14,
    color: '#eee',
    fontWeight: '300',
    marginBottom: 6,
  },
  timeText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 12,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 12,
    right: 16,
  },
  bottomText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '400',
  },
});

export default EzanTimeCard;
