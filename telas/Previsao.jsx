// screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation

const HomeScreen = () => {
  const navigation = useNavigation(); // Use o hook useNavigation para obter a navegação

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Image
          source={require('../assets/MicrosoftTeams-image (1).png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Visionary AI</Text>
      </View>
      <Text style={styles.subtitle}>Previsão De Tendências De Mercado</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Visionary')}>
        <Text style={styles.buttonText}>Comece Já</Text>
      </TouchableOpacity>
      <View style={styles.features}>
        <Text style={styles.featureItem}>• Relatórios semanais de tendências</Text>
        <Text style={styles.featureItem}>• Análises detalhadas mensais</Text>
        <Text style={styles.featureItem}>• Parâmetros de previsão personalizáveis</Text>
      </View>
      <Image
        source={require('../assets/Imagem4.png')}
        style={styles.roboticHand}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 70,
    height: 60,
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    color: '#34C0EB', // Cor roxa do texto Visionary AI
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A933FF', // Cor roxa do botão
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  features: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  featureItem: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  roboticHand: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
});

export default HomeScreen;
