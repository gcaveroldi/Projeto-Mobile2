import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function PontosTuristicosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pontos Turísticos</Text>
      
      <View style={styles.pointContainer}>
        <Image source={require('../assets/FotoScreenPTCatedral.jpg')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.pointTitle}>CATEDRAL DE SÃO SEBASTIÃO</Text>
          <Text style={styles.text}>
            A Catedral de São Sebastião era um antigo sonho do vigário perpétuo de Presidente Prudente, 
            Padre José Maria Martinez Sarrion. Por isso, em 1927, ele decidiu criar uma comissão para sair
            a campo na tentativa de arrecadar fundos, formada por membros das famílias de destaque na época: 
            Armelin, Tenório de Barros, Peretti, Toledo, Franco de Godoy e outras. A planta da Igreja foi 
            feita por Francisco Oroz, a construção dirigida e executada por Francisco Grotto e idealizada por 
            Luiz Mesquita. O curioso se dá no desenho da planta, em forma de cruz. As obras iniciaram dois anos
            depois de formada a comissão. Concluída em 1949, a Igreja tornou-se orgulho da cidade e ponto referencial.
            A obra também tinha o objetivo de se tornar sede de Diocese, o que ocorreu em 1961.
            Rua Ribeiro de Barros, 1771 – Jd. Aviação - Presidente Prudente/SP Partindo do centro. 
          </Text>
        </View>
      </View>
      
      <View style={styles.pointContainer}>
        <Image source={require('../assets/FotoScreenPTCidadeCrianca.jpg')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.pointTitle}>PARQUE CIDADE DA CRIANÇA</Text>
          <Text style={styles.text}>
            Um dos principais atrativos do município, conta com uma área de 172 hectares, distribuídos com equipamentos
            de lazer, praça de alimentação, parque infantil, lagos, área de piquenique e zoológico com centenas de animais
            de diversas espécies. O atrativo é localizado na região da Mata Atlântica.
            Rodovia Raposo Tavares sn – Jd. Satélite - Presidente Prudente/SP Telefone 18 3902-9333
          </Text>
        </View>
      </View>
      
      <View style={styles.pointContainer}>
        <Image source={require('../assets/FotoScreenPTMuseu.jpg')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.pointTitle}>MUSEU HISTÓRICO MUNICIPAL</Text>
          <Text style={styles.text}>
            O Museu Histórico Municipal de Presidente Prudente surgiu por iniciativa do então Prefeito Domingos Leonardo Cerávolo
            Dr. em 1944 - através do Decreto-Lei nº 52 de dezembro do mesmo ano. Mas a criação oficial coube ao Prefeito da época, 
            Antonio Sandoval Netto pela Lei Municipal nº 420 de 12 de setembro de 1957. Em 1974, pela Lei Municipal nº. 1740 o Museu
            foi transformado em Fundação. Em 2001, houve intervenção e o acervo e instalações da Fundação passaram a fazer parte do 
            patrimônio da Prefeitura Municipal de Presidente Prudente.
            v. Dr. João Gonçalves Foz, 2179 – Jd das Rosas - Presidente Prudente/SP Telefone: 18 3229-5840
          </Text>
        </View>
      </View>
      
      {/* Adicione mais pontos turísticos aqui */}
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
  pointContainer: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 16,
  },
  pointTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#666',
  },
});
