import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { UmrahCardProps } from "../types/UmrahCategoryTypes";

const UmrahCard: React.FC<UmrahCardProps> = ({ title, image, onPress }) => {
  const getImageSource = (img: string | import("react-native").ImageSourcePropType) => {
    if (typeof img === "string") {
      return { uri: img };
    }
    return img;
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <ImageBackground
        source={getImageSource(image)}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 16 }}
      >
        <LinearGradient
          colors={["rgba(0, 10, 4, 0.9)", "rgba(0, 77, 29, 0.57)"]}
          style={styles.overlay}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
        </View>

        <View style={styles.rightArrowContainer}>
          <Feather name="chevron-right" size={24} color="#fff" />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default UmrahCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 16,
    overflow: "hidden",
  },
  imageBackground: {
    height: 140,
    justifyContent: "flex-start",
    padding: 12,
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
  },
  titleContainer: {
    marginTop: 40,
    zIndex: 2,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    flexWrap: "wrap",
  },
  rightArrowContainer: {
    position: "absolute",
    bottom: 12,
    right: 12,
    zIndex: 2,
  },
});
