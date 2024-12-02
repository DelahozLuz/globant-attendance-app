import { Link } from "expo-router";
import { useEffect } from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { routes } from "@/utils/helpers";

export default function Home() {
  useEffect(() => {
    async function resetValue() {
      try {
        await AsyncStorage.removeItem("@data");
      } catch (e) {
        console.error(e);
      }
    }
    resetValue();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/5/56/Globant-LightBG-Color%403x.png",
        }}
        style={styles.image}
      />
      <Pressable style={styles.button}>
        <Link href={routes.qr} style={styles.linkText}>
          Comenzar
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: 200,
    height: 60,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#BFD732",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});