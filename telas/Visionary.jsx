import React from 'react';
import { View, Text, TextInput, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation

const HomeScreen = () => {
  const navigation = useNavigation(); // Use o hook useNavigation para obter a navegação

  return (
    <View style={{ flex: 1, backgroundColor: '#000', padding: 20 }}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require('../assets/MicrosoftTeams-image (1).png')} // Substitua pelo caminho da sua imagem
        style={{ width: 150, height: 150, alignSelf: 'center', marginBottom: 20 }}
      />
      <Text style={{ color: '#fff', fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>Visionary AI</Text>
      <TextInput
        placeholder="Nome/Empresa:"
        placeholderTextColor="#000000"
        style={{
          color: '#fff',
          backgroundColor: '#BFB7FD', // Cor de fundo alterada
          marginBottom: 50, // Espaçamento ajustado
          borderRadius: 100, // Adicionado o borderRadius
          paddingHorizontal: 10, // Adicionado espaçamento interno
          height: 35, // Aumento da altura da caixa de texto
        }}
      />
      <TextInput
        placeholder="CNPJ:"
        placeholderTextColor="#000000"
        style={{
          color: '#fff',
          backgroundColor: '#BFB7FD', // Cor de fundo alterada
          marginBottom: 50, // Espaçamento ajustado
          borderRadius: 100, // Adicionado o borderRadius
          paddingHorizontal: 10, // Adicionado espaçamento interno
          height: 35, // Aumento da altura da caixa de texto
        }}
      />
      <TextInput
        placeholder="CEP:"
        placeholderTextColor="#000000"
        style={{
          color: '#fff',
          backgroundColor: '#BFB7FD', // Cor de fundo alterada
          marginBottom: 50, // Espaçamento ajustado
          borderRadius: 100, // Adicionado o borderRadius
          paddingHorizontal: 10, // Adicionado espaçamento interno
          height: 35, // Aumento da altura da caixa de texto
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#1e90ff',
          padding: 15,
          borderRadius: 10,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Solicitacao')}
      >
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
