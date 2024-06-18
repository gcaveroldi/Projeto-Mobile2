import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function ContatosUteisScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contatos Úteis</Text>
      
      <View style={styles.table}>
        {[
          ["Emergência de trânsito", "1188"],
          ["Emergência de saúde", "192"],
          ["Polícia Civil", "147"],
          ["Polícia Militar", "190"],
          ["Bombeiros", "193"],
          ["Aeroporto", "3222 80 99"],
          ["Água e Esgoto – Sabesp", "0800 550 195"],
          ["Caiuá", "0800 160 196"],
          ["Cartório Eleitoral", "3916-1171 / 3916-1172 / 3916-1173"],
          ["Palácio da Saúde", "3221 11 67"],
          ["Correio Central", "0800-5700100"],
          ["Delegacia Civil Plantão", "3221 96 00"],
          ["Delegacia Invest. Sobre Entorpecentes DISE", "3221 98 99"],
          ["Delegacia Investigações Gerais DIG", "3221 97 00"],
          ["Delegacia de Defesa da Mulher DDM", "3221 92 22 / 180"],
          ["Delegacia Seccional de Pres. Prudente", "3221 93 00"],
          ["Departamento de Estrada e Rodagem DR–12", "3222 94 00"],
          ["Detran / Ciretran", "3908 80 55"],
          ["Disque Denúncias Anônimas", "181"],
          ["Fórum", "3221 31 44"],
          ["Horários de Voos", "3221 57 33"],
          ["Hospital Regional", "3229 15 10 / 3229 15 00"],
          ["IPEM – Instituto de Pesos e Medidas", "3223 31 93 / 3223 30 11"],
          ["Juizado de Menores ramal 235", "3221 31 44"],
          ["Ministério Público", "3221 71 56"],
          ["Polícia Ambiental", "3222 10 88"],
          ["Polícia Federal", "3223 61 44"],
          ["Polícia Rodoviária", "3222 95 00"],
          ["Prefeitura", "156"],
          ["Procon", "3221 27 10"],
          ["Pruden Express", "3909 99 00"],
          ["Prudenco", "3222 00 55"],
          ["Rodoviária", "3903 50 51"],
          ["Santa Casa", "2101 80 00"],
          ["SUCEN Superintendência Controle de Endemias", "3221 23 54"],
          ["TCPP – Transporte Coletivo de Pres. Prudente", "3906 30 55"],
        ].map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item[0]}</Text>
            <Text style={styles.cell}>{item[1]}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  table: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
  },
});

