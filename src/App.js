import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Mensagem from './components/Mensagem'
import { Button, Input } from '@rneui/base';
import database from '@react-native-firebase/database';
import { getUniqueId } from 'react-native-device-info';

export default function App() {

  //listaMensagens vai monitorar as mensagens enviadas (é um array)
  //textoMensagem vai monitorar (guradar o valor) do input da msg (é uma string)
  //id vai guardar o id atual do usuario
  const [listaMensagens, setListaMensagens] = React.useState([])
  const [textoMensagem, setTextoMensagem] = React.useState('');
  const [id, setId] = React.useState('');

  React.useEffect(() => {
    getUniqueId().then(value => {
      setId(value)
    })
    database()
      .ref('/mensagens')
      .on('value', snapshot => {
        const mensagens = Object.values(snapshot.val());
        console.log('Data: ', mensagens);
        setListaMensagens(mensagens)
      });
  }, [])

  const handleEnviarMensagem = () => {
    const data = new Date()
    database()
      .ref('/mensagens')
      .push({
        id: id, //vindo do useState
        mensagem: textoMensagem,
        horario: `${data.getHours()}:${data.getMinutes()}`
      })
  }

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
              data.id == id ?  
                <Mensagem right horario={data.horario} mensagem={data.mensagem} /> 
                : <Mensagem horario={data.horario} mensagem={data.mensagem} />
              )
          }
        </View>
      </ScrollView>

      {/* flexdirection row para ambos estarem na mesma linha */}
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Input
          onChangeText={text => { setTextoMensagem(text) }}
          placeholder="Digite sua mensagem"
          containerStyle={{display: 'flex', flex: 1}}
        />
        <Button onPress={() => {handleEnviarMensagem()}} title={'Enviar'} />
      </View>
    </View>
  );
}