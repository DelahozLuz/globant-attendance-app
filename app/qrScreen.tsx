import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { RootStackParamList } from '@/types/types';
import { StackNavigationProp } from '@react-navigation/stack';

export default function QrScreen() {
  const router = useNavigation<StackNavigationProp<RootStackParamList>>()
  const [permission, requestPermission] = useCameraPermissions();
  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Necesitamos permisos para acceder a la cámara</Text>
        <Button onPress={requestPermission} title="Permitir" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <CameraView
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={
          async (data) => {
            console.log("esta es la data", data);
            await AsyncStorage.setItem('@data', JSON.stringify(data))
            router.navigate('Details');
          }
        }
        style={styles.camera} >
        <View style={styles.buttonContainer}>
        </View>
      </CameraView>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://th.bing.com/th?q=Globant+Company+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=es-XL&cc=CO&setlang=en&adlt=moderate&t=1&mw=247',
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  greenButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
});