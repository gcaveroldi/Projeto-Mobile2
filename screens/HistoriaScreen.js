import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function HistoriaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>História de Presidente Prudente</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/FotoScreenHistoria.jpg')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          O Município de Presidente Prudente foi fundado em 14 de setembro de 1917, pelo Coronel Francisco de Paula Goulart. 
          Depois de locada a estação foi marcada uma divisa com separação entre a fazenda e a cidade. Este traçado (hoje a 
          Avenida Washington Luiz) ficou como base do arruamento futuro da nova Vila. Depois disto o Coronel Goulart deu ordem 
          a seus homens para que, no dia seguinte iniciasse a derrubada da mata e fizesse uma roça de milho.
        </Text>
        <Text style={styles.text}>
          Enquanto o Coronel Goulart colonizava a área localizada à esquerda da Estrada de Ferro, no sentido de quem vem de São Paulo, 
          o Coronel José Soares Marcondes cuidava da colonização da área à direita desta estrada. Estes dois homens foram os responsáveis 
          pelo desenvolvimento da região e pelo crescimento do que é atualmente Presidente Prudente.
        </Text>
        <Text style={styles.text}>
          Os trilhos da Estrada de Ferro Sorocabana, hoje FEPASA, chegaram a 19 de janeiro de 1919. Com eles, grande número de pessoas para 
          as colonizações e o problema de escolas para as crianças.
        </Text>
        <Text style={styles.text}>
          O município de Presidente Prudente foi criado pela Lei Estadual n.º 1.798/21 de 28 de novembro de 1.921, sendo instalado em 27 de 
          agosto de 1.923. A comarca foi criada em 8 de dezembro de 1922 pela lei n.º 1.887/22, desmembrando-se de Assis e sendo instalada em 
          13 de março de 1.923.
        </Text>
        <Text style={styles.text}>
          Na ocasião da criação do município, este tomou o nome da estação ferroviária, já batizada com o nome de Presidente Prudente, visto a 
          importância relevante da estrada de ferro para o desenvolvimento do município e região.
        </Text>
        <Text style={styles.text}>
          A colonização da região foi feita inicialmente por migrantes vindos do sul de Minas Gerais, comandados por José Teodoro de Souza, 
          mineiro de Pouso Alegre, atraídos pelas terras férteis do sudoeste Paulista e também porque o café era uma boa opção de trabalho no 
          estado de São Paulo.
        </Text>
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
    color: '#333',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#666',
    marginBottom: 12,
  },
});
