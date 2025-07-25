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
import UmrahCategoryArea from "../components/UmrahCategoryArea";
import EzanTimeCard from "../components/EzanTimeCard";
import EzanStickyBar from "../components/EzanStickyBar";
import TopAyah from "../components/TopAyah";

const EZAN_CARD_HEIGHT = 180; // EzanTimeCard sabit yüksekliği

const HomeScreen = () => {
  const [showSticky, setShowSticky] = useState(false);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = e.nativeEvent.contentOffset.y;
    setShowSticky(scrollY > EZAN_CARD_HEIGHT - 20);
  };

  return (
    <View style={{ flex: 1 }}>


      {showSticky && (
        <View style={styles.stickyBarWrapper}>
          <EzanStickyBar />
        </View>
      )}

      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <TopAyah />
        <EzanTimeCard />
        {/* <Slider /> */}
        <UmrahCategoryArea
          categories={[
            {
              id: "1",
              title: "Ekonomik Umre Turları (Servisli)",
              image: require("../../assets/kabe.jpg"),
            },
            {
              id: "2",
              title: "Lüks Servisli Umre Turları",
              image: require("../../assets/uhud.jpg")
            },
            {
              id: "3",
              title: "Ekonomik Umre Turları (Yürüme)",
              image: require("../../assets/mina.jpg")
            },
            {
              id: "4",
              title: "Kırk Vakitli Umre Turları",
              image: require("../../assets/ihram.jpg")
            },
            {
              id: "5",
              title: "5 Yıldızlı Umre Turları",
              image:  require("../../assets/kibleteyn.jpg")
            }
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
