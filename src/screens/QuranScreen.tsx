import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Linking, Alert } from "react-native";
import Navbar from "../components/Navbar";

const QuranScreen = () => {
    const pdfUrl = "https://api.canlikulturizm.com/files/quran.pdf";

    const openPDF = async () => {
        try {
            const supported = await Linking.canOpenURL(pdfUrl);
            if (supported) {
                await Linking.openURL(pdfUrl);
            } else {
                Alert.alert("Hata", "PDF dosyasını açacak uygun uygulama bulunamadı.");
            }
        } catch (error) {
            Alert.alert("Hata", "PDF dosyası açılamadı.");
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.infoText}>PDF'yi dış uygulamada açmak için aşağıdaki butona tıklayın.</Text>
                <TouchableOpacity style={styles.button} onPress={openPDF}>
                    <Text style={styles.buttonText}>PDF'yi Aç</Text>
                </TouchableOpacity>
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
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center",
        color: "#333",
    },
    button: {
        backgroundColor: "#ff7f00",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
});

export default QuranScreen;
