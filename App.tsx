import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/components/Header";

import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/types/RootTypes";

import HomeScreen from "./src/screens/HomeScreen";
import UmrahCategoryScreen from "./src/screens/UmrahCategoryScreen";
import UmrahTourDetailScreen from "./src/screens/UmrahTourDetailScreen";
import HowToMakeUmrahScreen from "./src/screens/HowToMakeUmrahScreen";
import HowToMakeHajjScreen from "./src/screens/HowToMakeHajjScreen";
import HajjDuasScreen from "./src/screens/HajjDuasScreen";
import HajjTourScreen from "./src/screens/HajjTourScreen";
import CatalogScreen from "./src/screens/CatalogScreen";
import AboutScreen from "./src/screens/AboutScreen";
import MekkahAndMedinaScreen from "./src/screens/MekkahAndMedinaScreen";
import SavtDuasScreen from "./src/screens/SavtDuasScreen";
import QuranScreen from "./src/screens/QuranScreen";

import { useEffect, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const navigationRef = useNavigationContainerRef();
  const [currentRoute, setCurrentRoute] = useState<string | undefined>();

  useEffect(() => {
    // İlk mount'ta route'ı almak için
    const timeout = setTimeout(() => {
      const route = navigationRef.getCurrentRoute();
      if (route) setCurrentRoute(route.name);
    }, 100);

    // Navigation state değişince route güncelle
    const unsubscribe = navigationRef.addListener("state", () => {
      const route = navigationRef.getCurrentRoute();
      if (route) setCurrentRoute(route.name);
    });

    return () => {
      unsubscribe();
      clearTimeout(timeout);
    };
  }, [navigationRef]);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        {/* BURADA navigationRef'ı veriyoruz */}
        <NavigationContainer ref={navigationRef}>
          <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <Header currentRoute={currentRoute} />
            <View style={styles.stackContainer}>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="UmrahCategoryScreen" component={UmrahCategoryScreen} />
                <Stack.Screen name="UmrahTourDetailScreen" component={UmrahTourDetailScreen} />
                <Stack.Screen name="HowToMakeUmrahScreen" component={HowToMakeUmrahScreen} />
                <Stack.Screen name="HowToMakeHajjScreen" component={HowToMakeHajjScreen} />
                <Stack.Screen name="HajjDuasScreen" component={HajjDuasScreen} />
                <Stack.Screen name="HajjTourScreen" component={HajjTourScreen} />
                <Stack.Screen name="CatalogScreen" component={CatalogScreen} />
                <Stack.Screen name="AboutScreen" component={AboutScreen} />
                <Stack.Screen name="MekkahAndMedinaScreen" component={MekkahAndMedinaScreen} />
                <Stack.Screen name="SavtDuasScreen" component={SavtDuasScreen} />
                <Stack.Screen name="QuranScreen" component={QuranScreen} />
              </Stack.Navigator>
            </View>
            <StatusBar style="auto" />
          </SafeAreaView>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  stackContainer: {
    flex: 1,
    width: "100%",
  },
});
