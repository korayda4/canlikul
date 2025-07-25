import React from "react";
import { FlatList, SafeAreaView, ActivityIndicator, Text, Linking } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import UmrahTourCard from "../components/UmrahTourCard";
import Navbar from "../components/Navbar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RootTypes";
import { useUmrahTour } from "../hooks/UseUmrahTour";
import { url, urlInst } from "../constant/MainConst";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "UmrahCategoryScreen">;
type RouteProps = RouteProp<RootStackParamList, "UmrahCategoryScreen">;

interface Props {
  route: RouteProps;
}

const UmrahCategoryScreen: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<NavigationProp>();

  const type = route.params?.type ?? 0;

  const { data, isLoading, isError, error } = useUmrahTour(type);

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#f97316" />
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}
      >
        <Text style={{ color: "red", textAlign: "center" }}>
          {error?.message || "Bir hata oluştu, lütfen tekrar deneyin."}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UmrahTourCard
            {...item}
            onDataPress={() => navigation.navigate("UmrahTourDetailScreen", { id: item.id })}
            onWhatsAppPress={() => {
              Linking.openURL(url).catch(err =>
                console.error('WhatsApp açılırken hata:', err)
              );
            }}
            onInstagramPress={() => {
              Linking.openURL(urlInst).catch(err =>
                console.error('Instagram açılırken hata:', err)
              );
            }}
          />
        )}
        contentContainerStyle={{ paddingBottom: 90 }}
        showsVerticalScrollIndicator={false}
      />
      <Navbar />
    </SafeAreaView>
  );
};

export default UmrahCategoryScreen;
