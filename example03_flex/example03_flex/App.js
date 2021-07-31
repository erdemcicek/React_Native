import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Flexbox01 from "./Flexbox01";
import Flexbox2 from "./Flexbox02";

function App() {
  return (
    <SafeAreaView style={styles.container}>
    {/* Flexbox01 komponenti Ekranin 1/3 nu kaplasin */}
      <Flexbox01></Flexbox01>

      {/* Flexbox01 komponenti Ekranin 2/3 nu kaplasin */}
      <Flexbox2></Flexbox2>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",

  },
});

export default App;
