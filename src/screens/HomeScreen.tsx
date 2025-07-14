import React, { useRef, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import MainNavbar from "../components/Navbar";
import Slider from "../components/Slider";
import FeatureCards from "../components/FeatureCards";
import UmrahCategoryArea from "../components/UmrahCategoryArea";
import EzanTimeCard from "../components/EzanTimeCard";
import EzanStickyBar from "../components/EzanStickyBar";
import ZikirmatikCard from "../components/ZikirmatikCard";

const EZAN_CARD_HEIGHT = 180; // EzanTimeCard sabit yüksekliği

const HomeScreen = () => {
  const [showSticky, setShowSticky] = useState(false);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = e.nativeEvent.contentOffset.y;
    setShowSticky(scrollY > EZAN_CARD_HEIGHT - 20);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Sticky bar sabit pozisyonda (gizli olabilir) */}
      {showSticky && (
        <View style={styles.stickyBarWrapper}>
          <EzanStickyBar />
        </View>
      )}

      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <ZikirmatikCard />
        <EzanTimeCard />
        <Slider />
        <FeatureCards />
        <UmrahCategoryArea
          categories={[
            {
              id: "1",
              title: "Ekonomik Umre Turları (Servisli)",
              image: { uri: "https://placehold.co/600x400" },
            },
            {
              id: "2",
              title: "Lüks Servisli Umre Turları",
              image: { uri: "https://placehold.co/600x400" },
            },
            {
              id: "3",
              title: "Ekonomik Umre Turları (Yürüme Mesafesi)",
              image: { uri: "https://placehold.co/600x400" },
            },
            {
              id: "4",
              title: "Kırk Vakitli Umre Turları",
              image: { uri: "https://placehold.co/600x400" },
            },
            {
              id: "5",
              title: "5 Yıldızlı Umre Turları",
              image: { uri: "https://placehold.co/600x400" },
            },
            {
              id: "6",
              title: "Örnek Umre Programı",
              image: { uri: "https://placehold.co/600x400" },
            },
          ]}
        />
      </ScrollView>

      <MainNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  stickyBarWrapper: {
    position: "absolute",
    top: 0, // header'ın hemen altında görünmesini istiyorsan burada offset verebilirsin
    left: 0,
    right: 0,
    zIndex: 100,
  },
});

export default HomeScreen;
