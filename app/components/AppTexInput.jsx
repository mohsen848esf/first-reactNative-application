import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Icon from "./Icon";
import defaultStyles from "../config/styles";
function AppTexInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        placeholderTextColor={colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    // width: "100%",
    padding: 15,
    marginVertical: 10,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  icon: {
    marginLeft: 10,
  },
  // textInput: {
  //   color: colors.dark,
  //   fontSize: 18,
  //   fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  // },
});

export default AppTexInput;
