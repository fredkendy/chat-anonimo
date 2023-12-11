import { View, Text } from 'react-native'
import React from 'react'
import Mensagem from './components/Mensagem'

export default function App() {
  return (
    <View style={{padding: 18}}>
      <Text style={{fontWeight: 'bold', fontSize: 22}}>Chat Anônimo</Text>

      {/* Importando o componente Mensagem com propriedade right que indica 
      onde deve ser exibida (caso seja a propria pessoa mandando msg) */}
      <View style={{ marginTop: 16, display: 'flex' }}>
        <Mensagem />
        <Mensagem right />
      </View>
    </View>
  );
}