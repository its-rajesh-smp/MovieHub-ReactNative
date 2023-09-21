import React from "react";

import ScreenWrapper from "../components/UI/ScreenWrapper";
import Header from "../components/Header";
import StatusBar from "../components/UI/StatusBar";
import Carousel from "../components/Carousel";
import MovieLists from "../components/MovieLists";
import { ScrollView } from "react-native";

export default function Home() {
  return (
    <ScreenWrapper>
      <StatusBar />
      <Header />
      <ScrollView>
        <Carousel />
        <MovieLists />
        <MovieLists />
        <MovieLists />
        <MovieLists />
        <MovieLists />
      </ScrollView>
    </ScreenWrapper>
  );
}
