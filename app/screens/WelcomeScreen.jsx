import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/card-2.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-4.png")} />
        <Text style={styles.tagline}>قله موفقیت رو خودت طی کن </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color={"secondary"}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
  },
  logo: {
    width: 70,
    height: 70,
    // alignSelf: "baseline",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
    left: "38%",
  },
});

export default WelcomeScreen;
