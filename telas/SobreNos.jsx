import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Image
          source={require('../assets/titulo.png')}
          style={styles.image}
        />
        <Text style={styles.subHeader}>Conheça nossa história</Text>
        <Image
          source={require('../assets/MicrosoftTeams-image (1).png')}
          style={[styles.image, styles.smallImage]}
        />
        <Text style={styles.text}>
          Visionary-AI, fundada em 12 de março de 2023, emerge como uma empresa inovadora no setor de tecnologia da informação, dedicada a fornecer serviços de previsão de tendências de mercado e geração de insights para empresas de diversos segmentos.
        </Text>
      </View>
      <View style={styles.section}>
        <Image
          source={require('../assets/grafico.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.footer}>Seja bem-vindo à nova era da tecnologia!</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.developersHeader}>Desenvolvedores:</Text>
        <Text style={styles.developers}>
          - ENZO ROSS GALLONE - RM551754{'\n'}
          - GABRIEL DE ANDRADE BALTAZAR - RM550870{'\n'}
          - LEONARDO CORDEIRO SCOTTI - RM550769{'\n'}
          - PEDRO GOMES FERNANDES - RM551480{'\n'}
          - VINICIUS DE ARAUJO CAMARGO - RM99494
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  section: {
    marginBottom: 20,
    alignItems: 'center', // Centraliza os itens na seção
    paddingHorizontal: 20, // Adiciona padding horizontal para as seções
  },
  header: {
    fontSize: 24,
    color: '#D400FF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  image: {
    width: '100%', // Ajusta a largura da imagem
    height: undefined,
    aspectRatio: 1.5, // Mantém a proporção da imagem
    resizeMode: 'contain', // Mantém a proporção da imagem
    marginBottom: 20,
  },
  smallImage: {
    width: '70%', // Diminui o tamanho da primeira imagem
    aspectRatio: 1,
  },
  chartHeader: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  footer: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  developersHeader: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  developers: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default App;
