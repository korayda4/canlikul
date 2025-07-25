import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import Navbar from "../components/Navbar";

const { width } = Dimensions.get("window");

// Mekke kartlarının arka plan resimleri ve verileri
const mekkahCards = [
    {
        title: "Kâbe",
        description:
            "Kâbe, İslam dünyasının kalbinde yer alan ve tüm Müslümanların kıblesi olan mukaddes yapıdır. Hz. İbrahim ve oğlu Hz. İsmail tarafından inşa edilmiştir. Yılda milyonlarca hacı tarafından ziyaret edilen Kâbe, Hac ve Umre ibadetlerinin merkezi olup, tavafın yapıldığı kutsal alandır.",
        image: require("../../assets/kabe.jpg"),
    },
    {
        title: "Mescid-i Haram",
        description:
            "Mescid-i Haram, Kâbe'yi çevreleyen ve onu içine alan en büyük camidir. Müslümanlar burada tavaf, sa’y ve namaz gibi temel ibadetlerini gerçekleştirir. Dünyanın en büyük camisi olan bu kutsal mekân, teknolojik ve mimari açıdan da büyük bir ihtişama sahiptir.",
        image: require("../../assets/mescidi-haram.jpg"),
    },
    {
        title: "Hira Mağarası",
        description:
            "Nur Dağı'nın zirvesine yakın bir konumda yer alan Hira Mağarası, İslam tarihinde çok önemli bir yere sahiptir. Hz. Muhammed (sav), burada inzivaya çekilmiş ve ilk vahyi, Cebrail (as) aracılığıyla burada almıştır. Bugün de manevi tefekkür ve ziyaret yeri olarak yoğun ilgi görmektedir.",
        image: require("../../assets/hira-magarasi.jpg"),
    },
    {
        title: "Sevr Mağarası",
        description:
            "Sevr Mağarası, Mekke'nin güneyinde, Sevr Dağı üzerinde yer alır. Hicret esnasında Hz. Muhammed (sav) ve Hz. Ebubekir burada üç gün gizlenmişlerdir. Bu olay, İslam tarihinde güven ve tevekkülün sembolü hâline gelmiştir.",
        image: require("../../assets/sevr-magarasi.jpg"),
    },
    {
        title: "Arafat Dağı",
        description:
            "Arafat Dağı, Hac ibadetinin en önemli rükünlerinden biri olan 'Arafat Vakfesi'nin yapıldığı yerdir. Hacılar, Zilhicce ayının 9. günü burada toplanır, dua ve ibadet ederler. Aynı zamanda Hz. Adem ile Hz. Havva’nın dünyada buluştukları yer olarak da rivayet edilir.",
        image: require("../../assets/arafat.jpg"),
    },
    {
        title: "Mina",
        description:
            "Mina, Hac sırasında şeytan taşlama ibadetinin yerine getirildiği bölgedir. Hac mevsiminde milyonlarca çadır kurulup hacılar burada konaklar. Aynı zamanda kurban kesim ibadeti de Mina'da gerçekleştirilir.",
        image: require("../../assets/mina.jpg"),
    },
    {
        title: "Müzdelife",
        description:
            "Mina ile Arafat arasında yer alan Müzdelife, hacıların Arafat’tan döndükten sonra konaklayıp vakit geçirdikleri önemli bir ibadet alanıdır. Burada akşam ve yatsı namazları birleştirilerek kılınır ve taşlar toplanarak ertesi gün Mina'da şeytan taşlamada kullanılır.",
        image: require("../../assets/muzdelife.jpg"),
    },
];


// Medine kartlarının arka plan resimleri ve verileri
const medinaCards = [
    {
        title: "Mescid-i Nebevi",
        description:
            "Mescid-i Nebevi, İslam’ın peygamberi Hz. Muhammed (sav) tarafından inşa ettirilen ve Medine'nin merkezinde yer alan kutsal camidir. Peygamber Efendimizin kabri burada, Ravza-i Mutahhara adı verilen bölümde bulunur. Burası, Mekke’deki Mescid-i Haram’dan sonra İslam’daki en faziletli ikinci mescittir. Günde milyonlarca ziyaretçi, bu mübarek mekânda ibadet eder ve dua eder.",
        image: require("../../assets/mescid_nebevi.jpg"),
    },
    {
        title: "Uhud Dağı",
        description:
            "Uhud Dağı, İslam tarihinin en önemli savaşlarından biri olan Uhud Savaşı’nın gerçekleştiği mekândır. Bu savaşta Hz. Hamza başta olmak üzere birçok sahabe şehit düşmüştür. Dağın eteklerinde yer alan Uhud Şehitliği, ziyaretçilerin manevi yoğunlukla dua ettiği kutsal alanlardan biridir. Peygamber Efendimiz Uhud Dağı hakkında, 'Uhud bizi sever, biz de Uhud’u severiz.' buyurmuştur.",
        image: require("../../assets/uhud.jpg"),
    },
    {
        title: "Mescid-i Kıbleteyn",
        description:
            "Mescid-i Kıbleteyn, Müslümanların ilk kıblesi olan Mescid-i Aksa’dan Kâbe’ye yönelişin gerçekleştiği yerdir. Namaz esnasında gelen vahiy ile kıblenin Mekke’ye çevrilmesi burada gerçekleşmiştir. Bu olay, İslam tarihinde kıble değişiminin simgesi olup, mescide 'İki Kıbleli Mescid' adı verilmiştir. Ziyaretçiler bu mekânda hem tarihi bir dönüşüme tanıklık eder hem de manevi bir huzur yaşar.",
        image: require("../../assets/kibleteyn.jpg"),
    },
    {
        title: "Mescid-i Kuba",
        description:
            "Mescid-i Kuba, İslam tarihinde inşa edilen ilk mescittir. Hz. Muhammed (sav), hicret yolculuğunda Medine’ye varmadan önce burada kısa bir süre kalmış ve bu mescidi inşa ettirmiştir. Peygamber Efendimiz burada namaz kılmayı faziletli görmüş, 'Kuba Mescidi’nde namaz kılanın sevabı bir umre gibidir.' buyurmuştur.",
        image: require("../../assets/kuba.jpg"),
    },
    {
        title: "Baki Mezarlığı (Cennetü'l Baki)",
        description:
            "Mescid-i Nebevi'nin hemen yanında yer alan Baki Mezarlığı, birçok sahabe, Hz. Osman, Hz. Hasan gibi Ehl-i Beyt mensupları ve önemli İslam büyüklerinin defnedildiği kutsal bir mezarlıktır. Burası 'Cennetü'l Baki' olarak da bilinir ve İslam dünyasında büyük hürmet görür. Ziyaret edenler dualar eder ve geçmişin izlerini burada hisseder.",
        image: require("../../assets/baki.jpg"),
    },
];


const MekkahAndMedinaScreen = () => {
    const [activeTab, setActiveTab] = useState<"mekkah" | "medina">("mekkah");

    const cards = activeTab === "mekkah" ? mekkahCards : medinaCards;

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Tab butonları */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === "mekkah" && styles.activeTabButton,
                    ]}
                    activeOpacity={0.8}
                    onPress={() => setActiveTab("mekkah")}
                >
                    <Text
                        style={[
                            styles.tabButtonText,
                            activeTab === "mekkah" && styles.activeTabButtonText,
                        ]}
                    >
                        Mekke
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === "medina" && styles.activeTabButton,
                    ]}
                    activeOpacity={0.8}
                    onPress={() => setActiveTab("medina")}
                >
                    <Text
                        style={[
                            styles.tabButtonText,
                            activeTab === "medina" && styles.activeTabButtonText,
                        ]}
                    >
                        Medine
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Kartlar */}
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {cards.map(({ title, description, image }, index) => (
                    <View key={index} style={styles.cardWrapper}>
                        <ImageBackground source={image} style={styles.cardImage}>

                            

                                <View style={styles.overlay} />
                            {/* İçerik */}
                            <View style={styles.cardContent}>
                                <Text style={styles.cardTitle}>{title}</Text>
                                <Text style={styles.cardDescription}>{description}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                ))}
            </ScrollView>
            <Navbar />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#F9F9F9" },
    tabContainer: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginTop: 20,
        marginBottom: 12,
        borderRadius: 24,
        backgroundColor: "#fff",
        overflow: "hidden",
        elevation: 3,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    activeTabButton: {
        backgroundColor: "#ec6e2b",
    },
    tabButtonText: {
        fontSize: 17,
        fontWeight: "600",
        color: "#555",
    },
    activeTabButtonText: {
        color: "#fff",
    },
    scrollContainer: {
        paddingHorizontal: 16,
        paddingBottom: 100,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.4)",
        borderRadius: 10,
    },
    cardWrapper: {
        marginBottom: 20,
        borderRadius: 20,
        overflow: "hidden",
    },
    cardImage: {
        width: width - 32,
        minHeight: 180,
        justifyContent: "flex-start",
    },
    blurContainer: {
        ...StyleSheet.absoluteFillObject,
    },
    cardContent: {
        padding: 20,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        textShadowColor: "rgba(0,0,0,0.7)",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 5,
        marginBottom: 10,
        alignSelf: "flex-start",
    },
    cardDescription: {
        fontSize: 15,
        color: "#eee",
        lineHeight: 22,
    },
});

export default MekkahAndMedinaScreen;
