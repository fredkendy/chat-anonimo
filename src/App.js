import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Mensagem from './components/Mensagem'
import { Button, Input } from '@rneui/base';

export default function App() {
  return (
    <View
      style={{padding: 18, display: 'flex', flexDirection: 'column', flex: 1}}>
      <Text style={{fontWeight: 'bold', fontSize: 22}}>Chat Anônimo</Text>

      <ScrollView>
        {/* Importando o componente Mensagem com propriedade right que indica 
      onde deve ser exibida (caso seja a propria pessoa mandando msg) */}
        <View
          style={{marginTop: 16, display: 'flex', flex: 1, overflow: 'scroll'}}>
          <Mensagem />
          <Mensagem right />
          <Mensagem />
        </View>
      </ScrollView>

      {/* flexdirection row para ambos estarem na mesma linha */}
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Input
          placeholder="Digite sua mensagem"
          containerStyle={{display: 'flex', flex: 1}}
        />
        <Button title={'Enviar'} />
      </View>
    </View>
  );
}