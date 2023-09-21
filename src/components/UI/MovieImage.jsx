import { Image, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

export default function MovieImage() {
  return (
    <Image
      source={{
        uri: "https://image.tmdb.org/t/p/w500//vNfL4DYnonltukBrrgMmw94zMYL.jpg",
      }}
      style={{
        width: width * 0.6,
        height: height * 0.5,
        borderRadius: 20,
      }}
    />
  );
}
