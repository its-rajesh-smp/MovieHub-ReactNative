import { SafeAreaView } from "react-native";
import React from "react";

const ScreenWrapper = ({ children }) => {
  return (
    <SafeAreaView className=" bg-zinc-900  flex-1 ">{children}</SafeAreaView>
  );
};

export default ScreenWrapper;
