import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import Navbar from "../components/Navbar";

// Umre adımlarının her biri için veri ve görsel tanımı
const umrahSteps = [
  {
    title: "1. İhrama Girme",
    text:
      "Umreye başlamadan önce mikat sınırlarında ihrama girilir. Niyet edilir ve telbiye (Lebbeyk...) getirilir. Erkekler iki parça dikişsiz beyaz örtü giyerken, kadınlar sade kıyafetler tercih eder.",
    image: require("../../assets/ihram.jpg"),
  },
  {
    title: "2. Kâbe’yi Tavaf Etme",
    text:
      "Hacılardan beklenen 7 şavt (tur) ile Kâbe’nin etrafında tavaf yapılır. Tavaf sırasında dualar edilir ve sağ omuz açıkta bırakılır (erkekler için).",
    image: require("../../assets/tavaf.jpg"),
  },
  {
    title: "3. Safa ile Merve Arasında Sa'y",
    text:
      "Tavaf sonrası Safa ile Merve tepeleri arasında 7 kez gidip gelinerek Sa'y yapılır. Bu, Hacer validemizin su arayışını sembolize eder.",
    image: require("../../assets/safa-merve.jpg"),
  },
  {
    title: "4. Saç Kesimi ve İhramdan Çıkma",
    text:
      "Sa’y tamamlandıktan sonra erkekler saçlarını kazıtır veya kısaltır, kadınlar ise saçlarının uçlarından az bir miktar keser. Böylece ihramdan çıkılır ve Umre tamamlanmış olur.",
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

const HowToMakeUmrahScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Başlık */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🕋 Umre Nasıl Yapılır?</Text>
          <Text style={styles.introText}>
            Umre, yılın herhangi bir zamanında yapılabilen kutsal bir ibadettir. Hac gibi belirli bir
            vakti olmamakla birlikte, benzer ritüelleri içerir. Umre, ihrama girmekle başlar ve
            tavaf, sa’y ile sona erer.
          </Text>
        </View>

        {/* Kartları göster */}
        {umrahSteps.map((step, index) => (
          <CardWithBackground
            key={index}
            title={step.title}
            text={step.text}
            image={step.image}
          />
        ))}

        {/* Önemli Notlar */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📝 Önemli Notlar</Text>
        </View>
        <View style={styles.textCard}>
          <Text style={styles.sectionText}>
            Umre ibadeti, gönülden ve bilinçli şekilde yapılmalıdır. Kalabalıklar içinde sabırlı olmak,
            ibadetlerin manevi yönüne odaklanmak ve sağlık önlemleri almak büyük önem taşır.
          </Text>
        </View>

        {/* Yaygın Hatalar */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚠️ Yaygın Yapılan Hatalar</Text>
        </View>
        <View style={styles.textCard}>
          <Text style={styles.cardTitle}>1. Niyetsiz Başlamak</Text>
          <Text style={styles.sectionText}>
            İhrama niyet etmeden ve telbiyeyi getirmeden ibadete başlamak Umreyi geçersiz kılabilir.
          </Text>
        </View>
        <View style={styles.textCard}>
          <Text style={styles.cardTitle}>2. Tavafta Hatalar</Text>
          <Text style={styles.sectionText}>
            Tavaf sırasında abdestli olmak, Kâbe’nin etrafını saat yönünün tersine doğru dönmek gibi
            temel kurallara uymamak sıkça yapılan hatalardandır.
          </Text>
        </View>

        {/* Öneriler */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💡 Öneriler</Text>
        </View>
        <View style={styles.textCard}>
          <Text style={styles.sectionText}>
            Umreye gitmeden önce farzlarını ve sünnetlerini öğrenmek, fiziki hazırlık yapmak, gruplarla
            hareket etmek ve rehberlerin uyarılarına kulak vermek ibadetin huzur içinde geçmesini sağlar.
          </Text>
        </View>
      </ScrollView>

      {/* Alt navbar */}
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
    color: "#e67e22",
    textAlign: "center",
    marginBottom: 8,
  },
  introText: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
  },
  cardBackground: {
    height: 200,
    marginVertical: 8,
    justifyContent: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
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
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  cardText: {
    fontSize: 15,
    color: "#fff",
    lineHeight: 20,
  },
  section: {
    marginTop: 20,
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2a2a2a",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },
  textCard: {
    backgroundColor: "#f5f5f5",
    padding: 14,
    marginVertical: 6,
    borderRadius: 10,
  },
  bottomNavbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default HowToMakeUmrahScreen;
