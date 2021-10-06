import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.itemLabel}>{item.label} </AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  itemLabel: {
    padding: 15,
    paddingHorizontal: 20,
  },
});

export default PickerItem;
