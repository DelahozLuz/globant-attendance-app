import { Link } from 'expo-router';
import { View, Image, StyleSheet, Button, Alert, Pressable } from 'react-native';
export default function Home() {
  const handlePress = () => {
    Alert.alert('¡Botón presionado!', 'Has presionado el botón Comenzar.');
  };
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://es.wikipedia.org/wiki/Archivo:Globant-LightBG-Color@3x.png' }}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button title="Comenzar" onPress={handlePress} color="#4CAF50" />
        <Pressable>
          <Link
          href={"./Home"}>
            Empezar pa
          </Link>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});