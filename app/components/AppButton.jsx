import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary", width = 200 }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color], width }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 5,
    alignSelf: "center",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
