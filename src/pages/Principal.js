import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { listarAmigos } from '../controllers/AppController';
  
export default function Principal({ navigation }) {
  const [loading, setLoading] = useState(true);

  async function gotoAmizades(){
    setLoading(false);
    const response = await listarAmigos();
    navigation.navigate('Amizades', {amigos: response.data});
  }

  useFonts({
    K2D_400Regular,
  });

  if(loading){
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../imgs/Trenem.png')} />
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Jogar', { id: '0' })}>
          <Text style={styles.textoBotao}>Provão</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Jogar', { id: '1' })}>
          <Text style={styles.textoBotao}>Matérias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={gotoAmizades}>
          <Text style={styles.textoBotao} >Amizades</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Notificacao')}>
          <Text style={styles.textoBotao} >Notificacao</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Ranking')}>
          <Text style={styles.textoBotao} >Ranking</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return(
    <View 
      style={{ 
        flex:1, 
        backgroundColor: '#fcfeff', 
        justifyContent: 'center', 
        alignItems:'center' 
      }}
    >
      <ActivityIndicator size={60} color="#308B9D" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flex: 1,
    backgroundColor: '#fcfeff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 238,
    height: 47,
    resizeMode: 'contain',
    position: 'absolute',
    top: 100,
  },
  botao: {
    borderRadius: 20,
    padding: 10,
    borderColor: '#308B9D',
    borderWidth: 2,
    margin: 20,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    bottom: 220,
    paddingLeft: 320,
  },
  textoBotao: {
    fontFamily: 'K2D_400Regular',
    color: '#2B4C52',
    fontSize: 24,
  },
  

  /*
  CORES:
  branco = "#FFFFFF"
  preto = "#000000"
  background = "#308B9D"
  botoes = "#2B4C52"
  vermelho ="#FF0000"
  verde = "#53E220"
  */

});