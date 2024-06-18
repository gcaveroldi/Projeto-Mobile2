import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function InformacoesGeraisScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Informações Gerais</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>O Município:</Text>
        <Text style={styles.paragraph}>Área do Município : 563,6 Km²</Text>
        <Text style={styles.paragraph}>Latitude: 22° 07´ 04´´</Text>
        <Text style={styles.paragraph}>Longitude: 51° 22´ 57´´</Text>
        <Text style={styles.paragraph}>Altitude: 472 metros acima do nível do mar</Text>
        <Text style={styles.paragraph}>Hidrografia: O Rio do Peixe e o Rio Santo Anastácio são os principais rios do município que demandam o Rio Paraná</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Demografia:</Text>
        <Text style={styles.paragraph}>População total: 206.164</Text>
        <Text style={styles.paragraph}>Densidade demográfica - hab./km²: 367,7</Text>
        <Text style={styles.paragraph}>Taxa de Alfabetização: 98,00%</Text>
        <Text style={styles.paragraph}>Índice de Desenvolvimento Humano: 0,871</Text>
        <Text style={styles.paragraph}>Taxa de Crescimento Anual: 1,61 %</Text>
        <Text style={styles.paragraph}>N° de Eleitores : 122.305</Text>
        <Text style={styles.paragraph}>População Regional : 806.954 hab.</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados Extras:</Text>
        <Text style={styles.paragraph}>Número de Agências Bancárias: 36</Text>
        <Text style={styles.paragraph}>Arrecadação Anual: R$ 143.500.000,00</Text>
        <Text style={styles.paragraph}>Número de Domicílios: 55.178</Text>
        <Text style={styles.paragraph}>Estabelecimentos Municipais de Ensino: 31</Text>
        <Text style={styles.paragraph}>Creches Municipais: 18</Text>
        <Text style={styles.paragraph}>Universidades: 05</Text>
        <Text style={styles.paragraph}>Cursos Universitários: 42</Text>
        <Text style={styles.paragraph}>Hospitais: 15</Text>
        <Text style={styles.paragraph}>Unidades Municipais de Saúde: 20</Text>
        <Text style={styles.paragraph}>Estabelecimentos Comerciais: 16.816</Text>
        <Text style={styles.paragraph}>Estabelecimentos Industriais: 406</Text>
        <Text style={styles.paragraph}>Abastecimento de Água no Município: 97%</Text>
        <Text style={styles.paragraph}>Esgoto no Município: coleta: 99,7%</Text>
        <Text style={styles.paragraph}>Energia Elétrica no Município: 100%</Text>
        <Text style={styles.paragraph}>Coleta de Lixo: 97,5 %</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Universidades e Faculdades:</Text>
        <Text style={styles.paragraph}>A cidade conta com 3 universidades, 2 faculdades e 7 faculdades de Educação a Distância.</Text>
        <Text style={styles.subSectionTitle}>Universidades:</Text>
        <Text style={styles.paragraph}>UNESP</Text>
        <Text style={styles.paragraph}>UNOESTE</Text>
        <Text style={styles.paragraph}>UNIESP</Text>
        <Text style={styles.subSectionTitle}>Faculdades:</Text>
        <Text style={styles.paragraph}>FATEC</Text>
        <Text style={styles.paragraph}>TOLEDO</Text>
        <Text style={styles.subSectionTitle}>Educação a Distância:</Text>
        <Text style={styles.paragraph}>METODISTA - EAD</Text>
        <Text style={styles.paragraph}>UNIP - EAD</Text>
        <Text style={styles.paragraph}>UNINTER - EAD</Text>
        <Text style={styles.paragraph}>CESUMAR - EAD</Text>
        <Text style={styles.paragraph}>EDUCON - EAD</Text>
        <Text style={styles.paragraph}>LFG - EAD</Text>
        <Text style={styles.paragraph}>DAMÁSIO - EAD</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  section: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
    color: '#555',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 8,
    color: '#666',
  },
});


