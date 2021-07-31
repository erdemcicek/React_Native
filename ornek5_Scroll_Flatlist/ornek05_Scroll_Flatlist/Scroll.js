import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import { Button, Text } from "react-native-elements";


export default function Scroll() {

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
        <Text style={styles.baslik}></Text>
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
      <ScrollView>
        <View>
          {isler.map((job) => (
            <View style={styles.isKutu}>
              <Text style={styles.isYazi} key={job.id}>
                {job.deger}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
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
      fontWeight: "700",
      marginBottom: 20,
  }
})