import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ key, imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  return (
    <View
      style={{
        flexDirection: "row",
        // alignSelf: "flex-start",
        // justifyContent: "flex-start",
      }}
    >
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => {
          scrollView.current.scrollToEnd({ animated: true, duration: 500 });
          //   scrollView.current.flashScrollIndicators();
        }}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: { marginRight: 10 },
});

export default ImageInputList;
