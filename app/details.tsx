import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import { getParsedData } from "@/utils/helpers";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from "react-native";
import { ParsedData, QRData } from "@/types/types";

const Details = () => {
    const [data, setData] = useState<QRData | null>(null);
    const [parsedData, setParsedData] = useState<ParsedData | null>(null);

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

    useEffect(() => {
        if (data?.data) {
            try {
                const parsed = getParsedData(data.data);
                setParsedData(parsed);
            } catch (error) {
                console.error("Error al analizar los datos:", error);
            }
        }
    }, [data]);

    return (
        <View style={styles.container}>
            <Pressable style={styles.containerBackButton}>
                <Ionicons name="arrow-back" size={20} color="white" />
                <Link href={'./Home'} style={styles.backButton}>Volver</Link>
            </Pressable>
            <View style={styles.dataContainer}>
                <View style={styles.data}>
                    <Text style={styles.labels}>Nombre completo:</Text>
                    {!parsedData?.userName && <View style={styles.textSkeleton}></View>}
                    <Text style={styles.text}>{parsedData?.userName}</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.labels}>Correo corporativo:</Text>
                    {!parsedData?.email && <View style={styles.textSkeleton}></View>}
                    <Text style={styles.text}>{parsedData?.email}</Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttons}>
                    <Link href={"./Home"}><Ionicons name="close-circle" size={70} color="red" /></Link>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Link href={"./Home"}><Ionicons name="checkmark-circle" size={70} color="#BFD732" /></Link>
                </TouchableOpacity>
            </View>
            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Globant-LightBG-Color%403x.png' }}
                style={styles.image}
            />
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
        // marginBottom: 25,
        gap: 25
    },
    data: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        marginTop: 45
    },
    backButton: {
        color: 'white',
        borderRadius: 24
    },
    containerBackButton: {
        position: "absolute",
        backgroundColor: '#BFD732',
        padding: 10,
        flexDirection: "row",
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        top: 30,
        left: 30
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
        padding: 2,
        fontSize: 18,
        fontWeight: "600"
    },
    text: {
        color: "#7B7B7B",
        fontSize: 18
    },
    image: {
        position: "absolute",
        width: 100,
        height: 30,
        bottom: 30,
        left: 30
    },
    textSkeleton: {
        backgroundColor: "gray",
        height: "100%",
        width: "100%",
        borderRadius: 24
    }
})
