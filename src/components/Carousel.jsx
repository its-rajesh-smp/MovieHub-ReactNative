import { Dimensions, View } from "react-native";
import React from "react";
import MovieImage from "./UI/MovieImage";
import ReactCarousel from "react-native-snap-carousel";

const data = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }];

const { width } = Dimensions.get("window");

export default function Carousel() {
  return (
    <View className="mt-5">
      <ReactCarousel
        data={data}
        renderItem={({ item }) => <MovieImage />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
      />
    </View>
  );
}
