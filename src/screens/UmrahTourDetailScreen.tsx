import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Linking,
} from "react-native";
import {
  AirplaneTilt,
  ArrowsLeftRight,
  WhatsappLogo,
  InstagramLogo,
} from "phosphor-react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/RootTypes";
import Navbar from "../components/Navbar";
import RoomCard from "../components/RoomCard";
import { useUmrahTour, useUmrahTourDetail } from "../hooks/UseUmrahTour";
import { urlInst, url } from "../constant/MainConst";

type DetailRouteProp = RouteProp<RootStackParamList, "UmrahTourDetailScreen">;

const NAVBAR_HEIGHT = 60;

const UmrahTourDetailScreen = () => {
  const route = useRoute<DetailRouteProp>();
  const { id } = route.params;

  const { data, isLoading, isError } = useUmrahTourDetail(id);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#f97316" />
      </View>
    );
  }

  if (isError || !data) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: "red" }}>Detay verisi alınamadı.</Text>
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{data.title}</Text>

        <View style={styles.travelInfoContainer}>
          <View style={styles.travelItem}>
            <AirplaneTilt size={28} color="#f97316" />
            <Text style={styles.travelLabel}>Gidiş</Text>
            <Text style={styles.travelDate}>{data.departureDate}</Text>
          </View>

          <View style={styles.travelItem}>
            <ArrowsLeftRight size={28} color="#f97316" />
            <Text style={styles.travelLabel}>Ara Geçiş</Text>
            <Text style={styles.travelDate}>{data.passageDate}</Text>
          </View>

          <View style={styles.travelItem}>
            <AirplaneTilt size={28} weight="regular" color="#f97316" />
            <Text style={styles.travelLabel}>Dönüş</Text>
            <Text style={styles.travelDate}>{data.returnalDate}</Text>
          </View>
        </View>

        <Text style={styles.hotelInfo}>
          📍 Medine Otel: {data.madinahHotel}
        </Text>
        <Text style={styles.hotelInfo}>
          📍 Mekke Otel: {data.mekkahHotel}
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL(url).catch(err =>
                console.error('WhatsApp açılırken hata:', err)
              );
            }}
          >
            <WhatsappLogo size={24} color="#fff" />
            <Text style={styles.buttonText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(urlInst).catch(err =>
                console.error('Instagram açılırken hata:', err)
              );
            }}
            style={styles.button}
          >
            <InstagramLogo size={24} color="#fff" />
            <Text style={styles.buttonText}>Instagram</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingBottom: NAVBAR_HEIGHT + 20 }}>
          <RoomCard
            title="2'li Oda"
            price={data.twoPersonHotelPrice}
            riyal={Math.round(data.twoPersonHotelPrice * 3.75)} // örnek dönüşüm
          />
          <RoomCard
            title="3'lü Oda"
            price={data.threePersonHotelPrice}
            riyal={Math.round(data.threePersonHotelPrice * 3.75)}
          />
          {data.fourPersonHotelPrice && (
            <RoomCard
              title="4'lü Oda"
              price={data.fourPersonHotelPrice}
              riyal={Math.round(data.fourPersonHotelPrice * 3.75)}
            />
          )}
        </View>
      </ScrollView>

      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </View>
  );
};

export default UmrahTourDetailScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f97316",
    marginBottom: 16,
    textAlign: "center",
  },
  travelInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 12,
  },
  travelItem: {
    alignItems: "center",
    minWidth: 80,
  },
  travelLabel: {
    marginTop: 6,
    fontWeight: "600",
    fontSize: 16,
    color: "#f97316",
  },
  travelDate: {
    marginTop: 4,
    fontSize: 13,
    color: "#555",
  },
  hotelInfo: {
    fontSize: 14,
    marginTop: 12,
    color: "#333",
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16,
    gap: 12,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f97316",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  navbarContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: NAVBAR_HEIGHT,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
