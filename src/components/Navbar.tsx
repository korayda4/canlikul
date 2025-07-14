import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Linking, Dimensions } from 'react-native';
import { House, Info, WhatsappLogo } from 'phosphor-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

const tabs = [
  { name: 'About', routeName: 'About', Icon: Info },
  { name: 'Home', routeName: 'Home', Icon: House },
  { name: 'Contact', routeName: 'Contact', Icon: WhatsappLogo },
];

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=905357713700&text&type=phone_number&app_absent=0';

const Navbar: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute();

  const handlePress = (routeName: string) => {
    if (routeName === 'Contact') {
      Linking.openURL(WHATSAPP_URL).catch(err =>
        console.error('WhatsApp açılırken hata:', err)
      );
    } else {
      navigation.navigate(routeName as never);
    }
  };

  return (
    <View
      style={[
        styles.navbarContainer,
        { bottom: insets.bottom > 0 ? insets.bottom : 20 },
      ]}
    >
      {tabs.map(({ routeName, Icon }) => {
        const isActive = route.name === routeName;
        return (
          <TouchableOpacity
            key={routeName}
            onPress={() => handlePress(routeName)}
            style={[styles.iconWrapper, isActive && styles.activeTab]}
          >
            <Icon size={28} weight="thin" color={isActive ? '#fff' : '#333'} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: "-50%" }],
    right: 0,
    marginBottom: 8,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
    zIndex: 100,
    width: '80%',
    maxWidth: 400,
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#ec6e2b',
  },
});

export default Navbar;
