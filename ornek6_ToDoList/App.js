import React from "react";
import { StyleSheet, SafeAreaView, View, ImageBackground } from "react-native";
import ToDoFlatList from "./ToDoFlatList";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
      source={{uri:"https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
      style={styles.image}
      >
        
        <ToDoFlatList/>

      </ImageBackground>
      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "100%"
  }
});
export default App;
