import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import DropdownItem from './SidebarDropdownItem';
import { SidebarProps } from '../types/SidebarTypes';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SIDEBAR_WIDTH = SCREEN_WIDTH * 0.85;

const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(SIDEBAR_WIDTH)).current;
  const [isMounted, setIsMounted] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setIsMounted(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: SIDEBAR_WIDTH,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setIsMounted(false);
      });
    }
  }, [isVisible]);

  if (!isMounted) return null;

  return (
    <View style={styles.overlay}>
      {/* Dış alana tıklanınca kapanmasını sağlayan şeffaf backdrop */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      {/* Sidebar içeriği */}
      <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
        <ScrollView
          contentContainerStyle={{
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
            paddingBottom: 32,
          }}
        >
          <DropdownItem
            title="Umre Turları"
            items={[
              'Ekonomik Umre Turları (SERVİSLİ)',
              'Lüks Servisli Umre Turları',
              'Ekonomik Umre Turları (Yürüme Mesafesi)',
              '40 vakitli umre turları',
              '5 yıldızlı umre turları',
              'Örnek Umre Programı',
            ]}
          />
          <DropdownItem
            title="Hac"
            items={[
              'Ekonomik Hac',
              'Lüks hac vizeli program',
              '5 Yıldızlı Hac',
            ]}
          />
          {['Katalog', 'Vize', 'Turistik geziler', 'Gezilecek yerler', 'Sosyal Medya'].map((label, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.itemText}>{label}</Text>
            </View>
          ))}
          <View style={styles.desc} >
            <Text style={styles.footerText}>Belge No: 14632</Text>
            <Text style={styles.footerText}>Canlı Kul Turizm Seyahat Acentası</Text>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 999,
  },
  desc: {
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  sidebar: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    backgroundColor: '#fff',
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    marginRight: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderWidth: 0,
    borderColor: '#ec6e2b',
    borderLeftWidth: 12,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    marginVertical: 2,
  },
});

export default Sidebar;
