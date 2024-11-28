import { Pressable, Text, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";


const getData = async () => {
    const userData = await AsyncStorage.getItem('@data')
    return userData
}

const Details = () => {
    
    return (
        <View>
            <View>
                <Text>Nombre completo:</Text>
                <View>{JSON.stringify(userData)}</View>
            </View>
            <View>
                <Text>Correo corporativo:</Text>
                <Text>steven.gs@globant</Text>
            </View>
            <View>
                <Pressable>Rechazar</Pressable>
                <Pressable>Aceptar</Pressable>
            </View>
        </View>
    )
}

export default Details