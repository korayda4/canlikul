import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Dimensions, View, Text, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import Navbar from "../components/Navbar";

const { width, height } = Dimensions.get("window");

const CatalogScreen = () => {
  const pdfUrl = "https://canlikulturizm.com/images/canl%C4%B1turizm-katalog.pdf";
  const googleViewer = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(pdfUrl)}`;

  const [loadError, setLoadError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        {!loadError ? (
          <>
            {loading && (
              <ActivityIndicator size="large" color="#ff7f00" style={styles.loading} />
            )}
            <WebView
              source={{ uri: googleViewer }}
              style={styles.webview}
              onLoadEnd={() => setLoading(false)}
              onError={() => setLoadError(true)}
              startInLoadingState
            />
          </>
        ) : (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              PDF görüntülenemiyor. Lütfen indirilen dosyaları kontrol edin.
            </Text>
          </View>
        )}
      </View>

      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
  webview: {
    width: width,
    height: height - 60, // Navbar yüksekliği kadar boşluk bırak
  },
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -20,
    marginTop: -20,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#ff7f00",
    textAlign: "center",
  },
});

export default CatalogScreen;
