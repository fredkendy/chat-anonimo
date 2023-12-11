import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Mensagem from './components/Mensagem'
import { Button, Input } from '@rneui/base';
import database from '@react-native-firebase/database';

export default function App() {

  const [listaMensagens, setListaMensagens] = React.useState([])

  React.useEffect(() => {
    database()
      .ref('/mensagens')
      .on('value', snapshot => {
        const mensagens = Object.values(snapshot.val());
        console.log('Data: ', mensagens);
        setListaMensagens(mensagens)
      });
  }, [])

  return (
    <View
      style={{padding: 18, display: 'flex', flexDirection: 'column', flex: 1}}>
      <Text style={{fontWeight: 'bold', fontSize: 22}}>Chat Anônimo</Text>

      <ScrollView>
        {/* Importando o componente Mensagem com propriedade right que indica 
      onde deve ser exibida (caso seja a propria pessoa mandando msg) */}
        <View style={{marginTop: 16, display: 'flex', flex: 1, overflow: 'scroll'}}>
          {
            listaMensagens.map(data =>
              <Mensagem />)
          }
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