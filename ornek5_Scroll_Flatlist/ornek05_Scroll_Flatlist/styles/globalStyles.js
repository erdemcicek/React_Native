import {StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
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