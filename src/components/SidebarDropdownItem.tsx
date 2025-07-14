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
import { CaretDown, CaretUp, CaretRight } from "phosphor-react-native";
import { DropdownItemProps } from "../types/SidebarTypes";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const DropdownItem: React.FC<DropdownItemProps> = ({ title, items }) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.header, expanded && styles.headerExpanded]}
        onPress={toggle}
        activeOpacity={0.8}
      >
        <Text style={[styles.headerText, expanded && { color: "#fff" }]}>
          {title}
        </Text>
        {expanded ? (
          <CaretUp size={18} color="#fff" />
        ) : (
          <CaretDown size={18} color="#ec6e2b" />
        )}
      </TouchableOpacity>
      {expanded && (
        <View style={styles.body}>
          {items.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <CaretRight
                size={16}
                color="#ec6e2b"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  header: {
    backgroundColor: "#fff",
    borderColor: "#ec6e2b",
    borderLeftWidth:12,
    borderWidth: 0,
    borderRadius: 8,
    shadowColor: "#000",
    marginRight:10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation:4,
    borderTopLeftRadius:4,
    borderBottomLeftRadius:4,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerExpanded: {
    backgroundColor: "#ec6e2b",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  body: {
    marginTop: 8,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginRight:6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft:16,
    borderRadius: 8,
    borderWidth: 0,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    borderColor: "#ec6e2b",
    marginBottom: 8,
  },
  itemText: {
    fontSize: 15,
    color: "#333",
    flexShrink: 1,
  },
});

export default DropdownItem;
