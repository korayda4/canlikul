import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Navbar from "../components/Navbar";

const AboutScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>Güven ve Maneviyatla Yolculuğunuzda Yanınızdayız.</Text>
                    <Text style={styles.paragraph}>
                        T.C. Kültür ve Turizm Bakanlığı’na bağlı, A Grubu 14632 belge numarası ile kayıtlı olan Canlıkul Turizm Seyahat Acentası, yıllardır güven ve memnuniyet odaklı hizmet anlayışıyla faaliyet göstermektedir.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>Firmamız</Text>
                    <Text style={styles.paragraph}>
                        Firmamız; geniş bir hizmet yelpazesi sunmaktadır:
                    </Text>
                    <View style={styles.list}>
                        <ListItem text="Hac ve Umre organizasyonları" />
                        <ListItem text="Uçak bileti temini" />
                        <ListItem text="Yurt içi ve yurt dışı turların düzenlenmesi" />
                        <ListItem text="Kutsal topraklarda özel rehberlik" />
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>Misafir Memnuniyeti</Text>
                    <Text style={styles.paragraph}>
                        Misafirlerimizin memnuniyetini ve dostluğunu kazanmayı temel ilkemiz olarak benimseyen Canlıkul Turizm, enerjisini hiç kaybetmeden en iyi hizmeti sunma hedefiyle çalışmalarını sürdürmektedir. Kutsal yolculuklardan tatil organizasyonlarına kadar tüm ihtiyaçlarınızda yanınızdayız.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>Hizmetlerimiz</Text>
                    <View style={styles.list}>
                        <ListItem text="Hac ve Umre Organizasyonlarında Güvenilir Hizmet" />
                        <ListItem text="Yurt İçi ve Yurt Dışı Turlar ile Unutulmaz Deneyimler" />
                    </View>
                </View>

            </ScrollView>

            <View style={styles.navbarContainer}>
                <Navbar />
            </View>
        </SafeAreaView>
    );
};

const ListItem = ({ text }: { text: string }) => (
    <View style={styles.listItem}>
        <MaterialIcons name="check-circle" size={20} color="#ff7f00" />
        <Text style={styles.listItemText}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f9fafb",
    },
    container: {
        padding: 20,
        paddingBottom: 80, // Navbar yüksekliği kadar alt boşluk
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#ff7f00",
        marginBottom: 12,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 26,
        color: "#444",
        marginBottom: 12,
    },
    list: {
        marginTop: 8,
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    listItemText: {
        marginLeft: 10,
        fontSize: 16,
        color: "#555",
    },
    navbarContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingVertical: 10,
    },
});

export default AboutScreen;
