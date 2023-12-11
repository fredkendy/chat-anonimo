import { View, Text } from 'react-native'
import React from 'react'

export default function Mensagem(props) {
  return (
    <View style={{width: 180, margin: 12, display: 'flex', alignSelf: props.right ? 'flex-end' : 'flex-start'}}>
      <View style={{backgroundColor: '#cdcdcd', borderRadius: 8}}>
        <Text style={{ padding: 8, color: 'black' }}>Conteúdo da Mensagem</Text>
      </View>
      <Text>Mensagem</Text>
    </View>
  );
}