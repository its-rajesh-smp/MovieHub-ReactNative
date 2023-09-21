import React from "react";
import { StatusBar as OriginalStatusBar } from "expo-status-bar";

export default function StatusBar() {
  return (
    <OriginalStatusBar
      hidden={true}
      backgroundColor="rgb(24 24 27)"
      style="light"
      translucent={false}
    />
  );
}
