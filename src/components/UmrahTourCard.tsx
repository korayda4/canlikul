import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Airplane,
  HouseLine,
  MapPin,
  WhatsappLogo,
  InstagramLogo,
} from "phosphor-react-native";

import { UmrahTourCardProps } from "../types/UmrahCategoryTypes";

const UmrahTourCard: React.FC<UmrahTourCardProps> = ({
  tourNumber,
  title,
  departureDate,
  passageDate,
  returnalDate,
  madinahHotel,
  mekkahHotel,
  twoPersonHotelPrice,
  threePersonHotelPrice,
  fourPersonHotelPrice,
  onWhatsAppPress,
  onInstagramPress,
  onDataPress,
}) => {
  return (
    <View style={styles.card}>
      <Image source={require("../../assets/umre-program.jpg")} style={styles.image} />

      <View style={styles.infoContainer}>
        {/* Tur kodu ve butonlar aynı satırda */}
        <View style={styles.headerRow}>
          <Text style={styles.tourCode}>{tourNumber}</Text>

          <View style={styles.topButtonsGroup}>
            <TouchableOpacity
              style={[styles.topButton, styles.leftButton]}
              onPress={onWhatsAppPress}
              activeOpacity={0.7}
            >
              <WhatsappLogo size={20} color="#25D366" weight="regular" />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.topButton, styles.middleButton]}
              onPress={onInstagramPress}
              activeOpacity={0.7}
            >
              <InstagramLogo size={20} color="#C13584" weight="regular" />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.topButton, styles.rightButton]}
              onPress={onDataPress}
              activeOpacity={0.7}
            >
              <Text style={styles.dataButtonText}>Detaya Git</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.tourName}>{title}</Text>

        {/* Giriş - Geçiş - Dönüş ikonlu ve tarihli */}
        <View style={styles.verticalInfo}>
          <View style={styles.iconRow}>
            <Airplane size={16} color="#555" weight="regular" />
            <View style={styles.textGroup}>
              <Text style={styles.iconText}>Giriş: {departureDate}</Text>
            </View>
          </View>

          <View style={styles.iconRow}>
            <HouseLine size={16} color="#555" weight="regular" />
            <View style={styles.textGroup}>
              <Text style={styles.iconText}>Geçiş: {passageDate}</Text>
            </View>
          </View>

          <View style={styles.iconRow}>
            <MapPin size={16} color="#555" weight="regular" />
            <View style={styles.textGroup}>
              <Text style={styles.iconText}>Dönüş: {returnalDate}</Text>
            </View>
          </View>
        </View>

        <View style={styles.iconRow}>
          <HouseLine size={16} color="#555" weight="regular" />
          <Text style={styles.iconText}>{madinahHotel}</Text>
        </View>

        <View style={styles.iconRow}>
          <MapPin size={16} color="#555" weight="regular" />
          <Text style={styles.iconText}>{mekkahHotel}</Text>
        </View>

        <View style={styles.priceContainer}>
          <View style={styles.priceBox}>
            <Text style={styles.priceLabel}>2'li Oda Kişi Başı</Text>
            <Text style={styles.priceValue}>{twoPersonHotelPrice}$</Text>
            <Text style={styles.priceLabel}>{Math.round(Number(twoPersonHotelPrice) * 3.75)} Riyal</Text>

          </View>
          <View style={styles.priceBox}>
            <Text style={styles.priceLabel}>3'lü Oda Kişi Başı</Text>
            <Text style={styles.priceValue}>{threePersonHotelPrice}$</Text>
            <Text style={styles.priceLabel}>{Math.round(Number(threePersonHotelPrice) * 3.75)} Riyal</Text>

          </View>
          {fourPersonHotelPrice && (
            <View style={styles.priceBox}>
              <Text style={styles.priceLabel}>4'lü Oda Kişi Başı</Text>
              <Text style={styles.priceValue}>{fourPersonHotelPrice}$</Text>
              <Text style={styles.priceLabel}>{Math.round(Number(fourPersonHotelPrice) * 3.75)} Riyal</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default UmrahTourCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 12,
    marginHorizontal: 16,
    borderColor: "#eee",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 50,
  },
  infoContainer: {
    padding: 12,
    paddingTop: 16, // Resim ile arasında boşluk
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8, // Altındaki yazılar ile biraz boşluk
  },
  tourCode: {
    fontSize: 12,
    color: "#888",
  },
  topButtonsGroup: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    overflow: "hidden",
  },
  topButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  leftButton: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ddd",
  },
  rightButton: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  dataButtonText: {
    color: "#0a7",
    fontWeight: "bold",
    fontSize: 14,
  },
  tourName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  verticalInfo: {
    marginBottom: 12,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  textGroup: {
    marginLeft: 8,
  },
  iconText: {
    fontSize: 14,
    color: "#444",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  priceBox: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#ddd",
    alignItems: "center",
  },
  priceLabel: {
    fontSize: 12,
    color: "#333",
  },
  priceValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0a7",
  },
});
