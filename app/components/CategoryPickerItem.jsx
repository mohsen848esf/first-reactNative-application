import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={90}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "yellow",
    width: "33%",
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    // justifyContent: "center",
  },
  label: { marginTop: 5, textAlign: "center" },
});

export default CategoryPickerItem;
