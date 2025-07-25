import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import Navbar from "../components/Navbar";

const HajjTourScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Hac Programları</Text>

      <ScrollView
        style={styles.zoomWrapper}
        contentContainerStyle={styles.zoomContainer}
        maximumZoomScale={3}
        minimumZoomScale={1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pinchGestureEnabled={true}
        horizontal={false}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://api.canlikulturizm.com/images/hac.jpg" }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff7f00",
    marginBottom: 20,
  },
  zoomWrapper: {
    flex: 1,
    width: "100%",
  },
  zoomContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  image: {
    width: 330,
    height: 500,
  },
});

export default HajjTourScreen;
