import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
  return (
    <View className=" p-4 flex justify-between items-center flex-row">
      <Ionicons name="menu" size={32} color="white" />
      <View className="flex flex-row justify-center items-center ">
        <Text className="text-yellow-200  text-2xl font-bold">M</Text>
        <Text className="text-white  text-2xl font-bold">ovieHub</Text>
      </View>
      <Ionicons name="person" size={32} color="white" />
    </View>
  );
}
