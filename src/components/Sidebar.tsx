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
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropdownItem from './SidebarDropdownItem';
import { SidebarProps } from '../types/SidebarTypes';
import { CaretRight } from 'phosphor-react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SIDEBAR_WIDTH = SCREEN_WIDTH * 0.85;

const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(SIDEBAR_WIDTH)).current;
  const [isMounted, setIsMounted] = useState(isVisible);
  const navigation = useNavigation();

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

  const handleNavigate = (label: string) => {
    switch (label) {
      case 'Katalog':
        navigation.navigate('CatalogScreen' as never);
        break;
      case 'Turistik geziler':
        navigation.navigate('TuristikGezilerScreen' as never);
        break;
      case 'Umre Nasıl Yapılır?':
        navigation.navigate('HowToMakeUmrahScreen' as never);
        break;
      case 'Hac Nasıl Yapılır?':
        navigation.navigate('HowToMakeHajjScreen' as never);
        break;
      case 'Mekke ve Medine':
        navigation.navigate('MekkahAndMedinaScreen' as never);
        break;
      case 'Dualar':
        navigation.navigate('HajjDuasScreen' as never);
        break;
      case 'Tavaf Duaları':
        navigation.navigate('SavtDuasScreen' as never);
        break;
      case 'Kuran-ı Kerim':
        navigation.navigate('QuranScreen' as never);
        break;
      default:
        break;
    }
    onClose();
  };

  return (
    <View style={styles.overlay}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>
              <CaretRight
                weight='light'
                size={24}
              />
            </Text>
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/applogo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.closeButtonPlaceholder} />
        </View>

        {/* İÇERİK */}
        <ScrollView
          contentContainerStyle={styles.scrollContentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Dropdown bileşenler olduğu gibi kalıyor */}
          <DropdownItem
            title="Umre Turları"
            description="Umre turları ve detayları"
            items={[
              'Ekonomik Umre Turları (SERVİSLİ)',
              'Lüks Servisli Umre Turları',
              'Ekonomik Umre Turları (Yürüme Mesafesi)',
              '40 vakitli umre turları',
              '5 yıldızlı umre turları',
            ]}
            onClose={onClose}
          />
          <DropdownItem
            title="Hac Turları"
            description="Hac turları ve detayları"
            items={[
              'Ekonomik Hac',
              'Lüks hac vizeli program',
              '5 Yıldızlı Hac',
            ]}
            onClose={onClose}
          />

          {/* Diğer menüler */}
          {[
            {
              label: 'Katalog',
              description: 'Tüm turların listesi',
              icon: 'BookBookmark',
            },
            {
              label: 'Umre Nasıl Yapılır?',
              description: 'Adım adım Umre rehberi',
              icon: 'Info',
            },
            {
              label: 'Hac Nasıl Yapılır?',
              description: 'Hac ibadetinin detayları',
              icon: 'Info',
            },
            {
              label: 'Dualar',
              description: 'Hac ve Umre duaları',
              icon: 'HandsPraying',
            },
            {
              label: 'Tavaf Duaları',
              description: 'Tavaf sırasında okunacak dualar',
              icon: 'Repeat',
            },
            {
              label: 'Mekke ve Medine',
              description: 'Kutsal şehirlerin tanıtımı',
              icon: 'MapPin',
            },
            {
              label: 'Kuran-ı Kerim',
              description: 'Kuran-ı Kerim ve içeriği',
              icon: 'BookOpen',
            },
          ].map(({ label, description, icon }, index) => {
            const IconComponent = require('phosphor-react-native')[icon];

            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleNavigate(label)}
                style={styles.itemContainer}
              >
                <View style={styles.itemInner}>
                  <View style={styles.iconBackground}>
                    <IconComponent weight="fill" size={24} color="#ec6e2b" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.itemText}>{label}</Text>
                    <Text style={styles.itemDescription}>{description}</Text>
                  </View>
                </View>
                <View style={styles.separator} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>



        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Belge No: 14632</Text>
          <Text style={styles.footerText}>Canlı Kul Turizm Seyahat Acentası</Text>
          <Image
            source={require('../../assets/tursab.png')}
            style={{ width: 120, height: 50, marginTop: 8, objectFit: "contain", borderRadius: 8 }}
          />
        </View>
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
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    paddingBottom: 12,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  closeButton: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 26,
    color: '#333',
    fontWeight: 'bold',
    transform: [{ rotate: '180deg' }], // > simgesini sola döndürmek için
  },
  closeButtonPlaceholder: {
    width: 40, // header'da ortalama için boş alan
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  logo: {
    width: 200,
    height: 35,
  },
  scrollContentContainer: {
    paddingTop: 12,
    paddingBottom: 32,
  },
  itemContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },

  itemInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  iconBackground: {
    backgroundColor: '#ffe6cc',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 15,
    fontWeight: '300',
    color: '#000',
    marginBottom: 2,
  },

  itemDescription: {
    fontSize: 13,
    fontWeight: '300',
    color: '#888',
  },
  separator: {
    height: 1,
    backgroundColor: '#e6e6e6',
    marginTop: 10,
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    marginVertical: 2,
  },
});

export default Sidebar;
