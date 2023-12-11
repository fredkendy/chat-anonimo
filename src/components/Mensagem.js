import { View, Text } from 'react-native'
import React from 'react'

export default function Mensagem(props) {
  return (
    //right é uma props que vem de App.js, serve para informar se a mensagem é do proprio autor
    <View style={{width: 180, margin: 12, display: 'flex', alignSelf: props.right ? 'flex-end' : 'flex-start'}}>
      <View style={{backgroundColor: '#cdcdcd', borderRadius: 8}}>
        <Text style={{ padding: 8, color: 'black' }}>{props.mensagem}</Text>
      </View>
      <Text>{props.right ? 'Você' : 'Pessoa'} - {props.horario}</Text>
    </View>
  );
}