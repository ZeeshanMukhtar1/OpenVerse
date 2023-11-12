// App.js
import React from "react";
import Navigation from "./Navigation";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Navigation />
    </View>
  );
};

export default App;
