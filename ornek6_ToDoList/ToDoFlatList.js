import React, { useState } from "react";
import { Alert } from "react-native";
import { Platform } from "react-native";
import { View, TextInput, StyleSheet, FlatList, TouchableOpacity, ToastAndroid } from "react-native";
import { Button, Text,  } from "react-native-elements";
import MyButton from "./MyButton";
// import Toast from "react-native-simple-toast";


export default function ToDoFlatList() {

  const [is, setIs] = useState("");
  const [isler, setIsler] = useState([]);
  const girilenIsiOku = function (girisText) {
    setIs(girisText);
  };
//   console.log(isler);
  const ekle = function () {
    if(!is){
      // //! Platforma gore uyari mesaji vermek icin Platform.OS kullanilabilir
      if(Platform.OS === "android"){
        ToastAndroid.showWithGravity("Yapilacaklar bos birakilamaz", 
      ToastAndroid.SHORT,
      ToastAndroid.CENTER);
      }else if(Platform.OS === "ios"){
        Alert.alert("Yapilacaklar bos birakilamaz");
      }
      // Toast.showWithGravity(("Yapilacaklar bos birakilamaz", Toast.LONG, Toast.CENTER))
      
    }else{
      setIsler((mevcutIsler) => [
        ...mevcutIsler,
        { id: Math.random().toString(), deger: is },
      ]);
      setIs("");
    }
    
  };
  const isSil = function(id){
    setIsler( (suankiIsler) => suankiIsler.filter((is)=> is.id !== id))
  }

  return (
    <View style={styles.body}>
        <Text style={styles.baslik}>
          YAPILACAKLAR
        </Text>
        <MyButton
        onPress = {()=> alert("Dikkat")}
        >MY BUTTON</MyButton>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Yapilacaklari giriniz"
          value={is}
          onChangeText={girilenIsiOku}
        ></TextInput>
        <Button
          title="EKLE"
          buttonStyle={{ backgroundColor: "green", width: 80, height: 40 }}
          onPress={ekle}
        ></Button>
      </View>


      <FlatList
      keyExtractor = {(item)=> item.id}
      data = {isler}
      renderItem = {(is)=>(
            <TouchableOpacity activeOpacity={0.5} 
            onPress={()=>isSil(is.item.id)}
            // underlayColor="red"
            >
                <View style={styles.isKutu}>
                  <Text style={styles.isYazi} >
                      {is.item.deger}
                  </Text>
                </View>

            </TouchableOpacity>
      )}
      >
        

      </FlatList>

      
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    height: 40,
    marginRight: 10,
  },
  isKutu: {
    padding: 10,
    backgroundColor: "yellowgreen",
    marginVertical: 15,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 5,
  },
  isYazi: {
    fontSize: 20,
    fontWeight: "700",
  },
  baslik: {
      textAlign: "center",
      color: "darkgreen",
      fontWeight: "500",
      marginBottom: 20,
  }
})