import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native";
import Navbar from "../components/Navbar";

const { width } = Dimensions.get("window");

// Hac adımları ve her biri için farklı görseller
const hajjSteps = [
  {
    title: "1. İhrama Girme",
    text:
      "Hac ibadetine niyet ederek, ihrama girilir. Erkekler için iki parça dikişsiz beyaz örtü, kadınlar için sade ve dikkat çekmeyen kıyafetler giyilir. Bu aşamada bazı yasaklar başlar; mesela tırnak kesmek, koku sürmek, kavga etmek yasaktır.",
    image: require("../../assets/ihram.jpg"),
  },
  {
    title: "2. Arafat Vakfesi",
    text:
      "Haccın en önemli rüknü olan Arafat Vakfesi'nde, 9. Zilhicce günü Arafat Dağı'nda vakfedilir. Burada dua edilir, tövbe edilir ve Allah'tan af dilenir.",
    image: require("../../assets/arafat.jpg"),
  },
  {
    title: "3. Müzdelife ve Mina",
    text:
      "Arafat'tan sonra Müzdelife'ye gidilir ve burada gece kalınır. Sabah Mina'ya geçilerek, şeytan taşlama ibadeti yapılır. Bu ibadet, putlara karşı duruşu sembolize eder.",
    image: require("../../assets/mina.jpg"),
  },
  {
    title: "4. Kurban Kesme ve Sa'y",
    text:
      "Haccın bu kısmında kurban kesilir. Daha sonra Safa ile Merve tepeleri arasında Sa'y denilen koşu yapılır; bu, Hacer validemizin su arama mücadelesini anmak içindir.",
    image: require("../../assets/safa-merve.jpg"),
  },
  {
    title: "5. Tıraş ve İhramdan Çıkma",
    text:
      "Kurban ve Sa'y tamamlandıktan sonra erkekler saçlarını tıraş eder veya kısaltır, kadınlar ise saç uçlarından az bir miktar alır. Böylece ihramdan çıkarak, günlük yaşama geçiş yapılır.",
    image: require("../../assets/tiras.jpg"),
  },
];

const CardWithBackground = ({ title, text, image }: any) => (
  <ImageBackground
    source={image}
    style={styles.cardBackground}
    imageStyle={styles.cardImage}
  >
    <View style={styles.overlay} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  </ImageBackground>
);

const HowToMakeHajjScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Başlık */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🕋 Hac Nasıl Yapılır?</Text>
          <Text style={styles.introText}>
            Hac, İslam'ın beş şartından biridir ve Müslümanlar için çok önemli bir ibadettir.
            Zamanı ve mekânı belli olan bu ibadet, belirlenen kurallar çerçevesinde yapılır.
          </Text>
        </View>

        {/* Kartları Listele */}
        {hajjSteps.map((step, index) => (
          <CardWithBackground
            key={index}
            title={step.title}
            text={step.text}
            image={step.image}
          />
        ))}
      </ScrollView>

      {/* Alt Navbar */}
      <View style={styles.bottomNavbar}>
        <Navbar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 100,
    paddingHorizontal: 16,
  },
  header: {
    marginVertical: 16,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e67e22", // Turuncu renk
    marginBottom: 8,
    textAlign: "center",
  },
  introText: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
  },
  cardBackground: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    borderRadius: 10,
    resizeMode: "cover",
    opacity: 0.9,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 10,
  },
  cardContent: {
    padding: 12,
    position: "absolute",
    bottom: 0,
    color: "black",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  cardText: {
    fontWeight: "500",
    fontSize: 15,
    color: "#fff",
    lineHeight: 20,
  },
  bottomNavbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default HowToMakeHajjScreen;
