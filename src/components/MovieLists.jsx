import { View, Text, ScrollView } from "react-native";
import React from "react";
import MovieThumb from "./UI/MovieThumb";

export default function MovieLists() {
  return (
    <View className="p-2 mt-10 flex flex-col gap-5">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-xl text-white">Trending</Text>
        <Text className="text-sm text-yellow-500 mr-4 ">See All</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <MovieThumb />
        <MovieThumb />
        <MovieThumb />
        <MovieThumb />
        <MovieThumb />
        <MovieThumb />
      </ScrollView>
    </View>
  );
}
