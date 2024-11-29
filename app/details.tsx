import { Pressable, StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";

const Details = () => {
    const [data, setData] = useState({});
    const getData = async () => {
        const userData = await AsyncStorage.getItem('@data');
        if (userData) {
            const data = JSON.parse(userData)
            setData(data);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Pressable>
                <Link href={'./Home'} style={styles.backButton}>Volver</Link>
            </Pressable>
            <View style={styles.dataContainer}>
                <View style={styles.data}>
                    <Text style={styles.labels}>Nombre completo:</Text>
                    <Text>{data.data}</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.labels}>Correo corporativo:</Text>
                    <Text>steven.gs@globant</Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <Pressable style={styles.buttons}>
                    <Text style={styles.redButton}>Rechazar</Text>
                </Pressable>
                <Pressable style={styles.buttons}>
                    <Text style={styles.greenButton}>Aceptar</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    dataContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },
    data: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    backButton: {
        backgroundColor: '#BFD732',
        color: 'white',
        padding: 10,
        borderRadius: 24
    },
    buttons: {
        padding: 10,
        borderRadius: '100%',
    },
    redButton: {
        color: 'white',
        backgroundColor: 'red',
        borderRadius: 24,
        padding: 10
    },
    greenButton: {
        color: 'white',
        backgroundColor: '#BFD732',
        borderRadius: 24,
        padding: 10
    },
    labels: {
        color: '#BFD732',
        padding: 2
    }
})
