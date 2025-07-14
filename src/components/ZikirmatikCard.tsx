import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { ArrowCounterClockwise } from 'phosphor-react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const ZikirmatikCard: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleReset = () => setCount(0);

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('../../assets/zikirmatik.webp')} // Arka plan resmi
        style={styles.image}
        imageStyle={{ borderRadius: 16 }}
        resizeMode="cover"
      >
        {/* Reset butonu */}
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <ArrowCounterClockwise size={22} color="#333" weight="bold" />
        </TouchableOpacity>

        <View style={styles.contentRow}>
          {/* Sayma butonu */}
          <TouchableOpacity style={styles.counterButton} onPress={handleIncrement}>
            <Text style={styles.countText}>{count}</Text>
          </TouchableOpacity>
        </View>

        {/* Sağ altta büyük ve kalın ZİKİRMATİK yazısı */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>ZİKİRMATİK</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 16,
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
    height: 120,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  resetButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 2,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  countText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ec6e2b',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 12,
    right: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ZikirmatikCard;
