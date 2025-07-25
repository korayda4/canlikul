import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Platform,
} from "react-native";
import { List, CaretLeft } from "phosphor-react-native";
import Sidebar from "./Sidebar";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  currentRoute?: string;
};

const Header: React.FC<HeaderProps> = ({ currentRoute }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigation = useNavigation();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const showBack = currentRoute !== undefined && currentRoute !== "Home";

  return (
    <>
      <View style={styles.container}>
        {showBack && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <CaretLeft size={24} weight="regular" color="#ff8000" />
          </TouchableOpacity>
        )}

        <View style={styles.centerContainer}>
          <Image
            source={require("../../assets/applogo.png")}
            style={styles.logo}
          />
        </View>

        <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
          <List size={28} weight="regular" color="#ff8000" />
        </TouchableOpacity>
      </View>

      <Sidebar isVisible={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#ff7809a1",
    position: "relative",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width:200,
    height: 35,
  },
  menuButton: {
    position: "absolute",
    right: 12,
    padding: 8,
    zIndex: 1,
  },
  backButton: {
    position: "absolute",
    left: 12,
    padding: 8,
    zIndex: 1,
  },
});

export default Header;
