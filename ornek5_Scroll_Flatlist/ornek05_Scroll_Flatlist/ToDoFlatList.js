import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList } from "react-native";
import { Button, Text,  } from "react-native-elements";
import { globalStyles } from "./styles/globalStyles";


export default function ToDoFlatList() {

  const [is, setIs] = useState("");
  const [isler, setIsler] = useState([]);
  const girilenIsiOku = function (girisText) {
    setIs(girisText);
  };
//   console.log(isler);
  const ekle = function () {
    setIsler((mevcutIsler) => [
      ...mevcutIsler,
      { id: Math.random().toString(), deger: is },
    ]);
  };

  return (
    <View style={styles.body}>
        <Text style={globalStyles.baslik}></Text>
      <View style={globalStyles.inputContainer}>
        <TextInput
          style={globalStyles.input}
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
      renderItem = {(is)=>(<View style={globalStyles.isKutu}>
                <Text style={globalStyles.isYazi} >
                    {is.item.deger}
                </Text>
                </View>)}
      >
      </FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    padding: 50,
  },
})