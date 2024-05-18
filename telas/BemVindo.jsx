// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-Vindo!</Text>
      <Text style={styles.subText}>Conheça nosso produto!</Text>
      <Image source={require('../assets/Imagem1.png')} style={styles.image} />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Previsao')}>
        <Text style={styles.buttonText}>Clique Aqui</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sobre nós</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'magenta',
  },
  subText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
