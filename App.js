import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HistoriaScreen from './screens/HistoriaScreen';
import PontosTuristicosScreen from './screens/PontosTuristicosScreen';
import InformacoesGeraisScreen from './screens/InformacoesGeraisScreen';
import ContatosUteisScreen from './screens/ContatosUteisScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'História') {
            iconName = 'book';
          } else if (route.name === 'Pontos Turísticos') {
            iconName = 'map';
          } else if (route.name === 'Informações Gerais') {
            iconName = 'information-circle';
          } else if (route.name === 'Contatos Úteis') {
            iconName = 'call';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          display: 'flex'
        }
      })}
    >
      <Tab.Screen name="História" component={HistoriaScreen} />
      <Tab.Screen name="Pontos Turísticos" component={PontosTuristicosScreen} />
      <Tab.Screen name="Informações Gerais" component={InformacoesGeraisScreen} />
      <Tab.Screen name="Contatos Úteis" component={ContatosUteisScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


