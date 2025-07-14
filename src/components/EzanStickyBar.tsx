// components/EzanStickyBar.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EzanStickyBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) =>
    date
      .toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      .replace(/\./g, ':');

  const formatDate = (date: Date) =>
    date.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime(currentTime)}</Text>
      <Text style={styles.date}>{formatDate(currentTime)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 99,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    fontWeight: '400',
    color: '#555',
  },
});

export default EzanStickyBar;
