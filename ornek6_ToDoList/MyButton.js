import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import color from './constants/color'

const MyButton = (props) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.5} 
        onPress={(props.onPress)}
        
        >
            <View style={styles.buton}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

export default MyButton

const styles = StyleSheet.create({
    buton: {
        backgroundColor: color.anaRenk,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    text: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        fontWeight: "500",
    }


})

