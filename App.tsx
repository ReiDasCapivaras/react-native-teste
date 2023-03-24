import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import React, { Component, useState } from 'react';

const pizzaTranslator = () =>{
  const [text, setText] = useState('');
  return (
    <View style={{ padding: 10, paddingTop: 20 }}>
      <TextInput style = {{ height: 40 }} placeholder="Digite algo para ser traduzido" onChangeText={newText => setText(newText)} defaultValue={text}/>
      <Text style = {{ padding: 10, fontSize: 42 }}>
        {text.split(' ').map(word => word && '🍕').join(' ')}
      </Text>
    </View>
  );
};

export default pizzaTranslator;   