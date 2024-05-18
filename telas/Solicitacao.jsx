import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation

const App = () => {
  const navigation = useNavigation(); // Use o hook useNavigation para obter a navegação

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Image source={require('../assets/MicrosoftTeams-image (1).png')} style={{  height: 200, width: 200,marginBottom: 30 }} />
       
        <View style={{ marginVertical: 30 }}>
        
          <Text style={{ color: '#00FFFF', fontSize: 48, fontWeight: 'bold' }}>Visionary AI</Text>
        </View>
        <Text style={{ color: '#fff', fontSize: 28, marginBottom: 40 }}>Solicitação Concluída!</Text>
        <TouchableOpacity 
          style={{ backgroundColor: '#BFB7FD', padding: 15, borderRadius: 100, width: '100%', alignItems: 'center' }}
          onPress={() => navigation.navigate('BemVindo')} // Navegação de volta à página BemVindo ao pressionar o botão
        >
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Voltar ao início</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
