import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { CaretDown, CaretUp, CaretRight, MapPin } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { DropdownItemProps } from "../types/SidebarTypes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RootTypes";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  title,
  items,
  description,
  onClose,
}) => {
  const [expanded, setExpanded] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const handleItemPress = (item: string) => {
    switch (item) {
      case "Ekonomik Umre Turları (SERVİSLİ)":
        navigation.navigate("UmrahCategoryScreen", { type: 0 });
        break;
      case "Lüks Servisli Umre Turları":
        navigation.navigate("UmrahCategoryScreen", { type: 1 });
        break;
      case "Ekonomik Umre Turları (Yürüme Mesafesi)":
        navigation.navigate("UmrahCategoryScreen", { type: 2 });
        break;
      case "40 vakitli umre turları":
        navigation.navigate("UmrahCategoryScreen", { type: 3 });
        break;
      case "5 yıldızlı umre turları":
        navigation.navigate("UmrahCategoryScreen", { type: 4 });
        break;
      case "Ekonomik Hac":
      case "Lüks hac vizeli program":
      case "5 Yıldızlı Hac":
        navigation.navigate("HajjTourScreen" as never);
        break;
      default:
        break;
    }

    onClose();
  };

  return (
    <View style={styles.container}>
      {/* Başlık */}
      <TouchableOpacity
        onPress={toggle}
        activeOpacity={0.8}
        style={styles.itemContainer}
      >
        <View style={styles.itemInner}>
          <View style={styles.iconBackground}>
            <MapPin weight="fill" size={24} color="#ec6e2b" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.itemText}>{title}</Text>
            {description ? (
              <Text style={styles.itemDescription}>{description}</Text>
            ) : null}
          </View>
          <View style={styles.arrowIcon}>
            {expanded ? (
              <CaretUp weight="light" size={24} color={expanded ? "#ec6e2b" : "#c4c4c4ff"} />
            ) : (
              <CaretDown size={24} color={expanded ? "#ec6e2b" : "#c4c4c4ff"} />
            )}
          </View>
        </View>
        <View style={styles.separator} />
      </TouchableOpacity>

      {/* Açılan alt itemler */}
      {expanded && (
        <View style={styles.body}>
          {items.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => handleItemPress(item)}
                style={styles.subItemContainer}
                activeOpacity={0.7}
              >
                <CaretRight size={16} color="#ec6e2b" style={{ marginRight: 8 }} />
                <Text style={styles.subItemText}>{item}</Text>
              </TouchableOpacity>
              {index < items.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    backgroundColor: "transparent",
    paddingVertical: 12,
  },
  itemInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconBackground: {
    backgroundColor: "#ffe6cc",
    padding: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 15,
    fontWeight: '300',
    color: '#000',
    marginBottom: 2,
  },
  itemDescription: {
    fontSize: 13,
    fontWeight: "300",
    color: "#888",
    marginTop: 2,
  },
  arrowIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#e6e6e6",
    marginTop: 10,
  },
  body: {
    marginTop: 8,
  },
  subItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 56, // Başlıktaki ikon ile hizalanması için
    backgroundColor: "transparent",
  },
  subItemText: {
    fontSize: 15,
    color: "#333",
    flexShrink: 1,
  },
});

export default DropdownItem;
