import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

export default function MovieThumb() {
  return (
    <View>
      <Image
        className="w-40 mr-2  rounded-md  h-52"
        source={{
          uri: "https://image.tmdb.org/t/p/w500//vNfL4DYnonltukBrrgMmw94zMYL.jpg",
        }}
      />
    </View>
  );
}
