import { Pressable, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";

const Details = () => {
    const [data, setData] = useState();

    const getData = async () => {
        const userData = await AsyncStorage.getItem('@data');
        if (userData) {
            setData(userData);
        }
    };
  

    useEffect(() => {
        getData(); 
    }, []); 
    
    return (
        <View>
            <View>
                <Text>Nombre completo:</Text>
                <Text>{data} </Text>
            </View>
            <View>
                <Text>Correo corporativo:</Text>
                <Text>steven.gs@globant</Text>
            </View>
            <View>
                <Pressable>
                    <Text>Rechazar</Text>
                </Pressable>
                <Pressable>
                    <Text>Aceptar</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Details;
