import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  Platform,
} from 'react-native';
import {
  Users,
  ShieldCheck,
  HandsPraying,
  CalendarCheck,
  Compass,
} from 'phosphor-react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Ekranda 2 kart yan yana olacağı için genişlik yarısı, margin ve padding göz önüne alınmalı
const VISIBLE_CARDS = 2;
const CARD_MARGIN_HORIZONTAL = 8;
const CARD_WIDTH = (SCREEN_WIDTH - CARD_MARGIN_HORIZONTAL * (VISIBLE_CARDS + 1)) / VISIBLE_CARDS;

const features = [
  { icon: Users, text: 'Kişiye Özel Rehberlik.' },
  { icon: ShieldCheck, text: 'Kanıtlanmış Çözümler.' },
  { icon: HandsPraying, text: 'Bütünsel Maneviyat.' },
  { icon: CalendarCheck, text: 'Esnek Programlar.' },
  { icon: Compass, text: 'Güvenli Yolculuklar.' },
];

const FeatureCards: React.FC = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + VISIBLE_CARDS;
      if (nextIndex >= features.length) nextIndex = 0;
      setCurrentIndex(nextIndex);

      flatListRef.current?.scrollToOffset({
        offset: nextIndex * (CARD_WIDTH + CARD_MARGIN_HORIZONTAL),
        animated: true,
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }: { item: typeof features[0] }) => {
    const Icon = item.icon;
    return (
      <View style={[styles.card, { width: CARD_WIDTH, marginHorizontal: CARD_MARGIN_HORIZONTAL / 2 }]}>
        <Icon size={32} color="#ec6e2b" weight="thin" />
        <Text style={styles.text}>{item.text}</Text>
        <View style={styles.underline} />
      </View>
    );
  };

  return (
    <View style={[styles.wrapper, styles.shadow]}>
      <FlatList
        ref={flatListRef}
        data={features}
        horizontal
        pagingEnabled={false} // Çünkü biz manuel snap yapıyoruz
        snapToInterval={CARD_WIDTH + CARD_MARGIN_HORIZONTAL}
        snapToAlignment="start"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: CARD_MARGIN_HORIZONTAL / 2 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  shadow: {
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
      },
    }),
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  underline: {
    marginTop: 8,
    height: 3,
    width: '40%',
    backgroundColor: '#ec6e2b',
    borderRadius: 3,
  },
});

export default FeatureCards;
