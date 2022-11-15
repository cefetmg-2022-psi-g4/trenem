import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { Feather } from '@expo/vector-icons';
import { getRanking, getRankingDeAmigos, listarAmigos, listarPedidosAmizade } from '../controllers/AppController';
  
export default function Principal({ navigation }) {
  const [loading, setLoading] = useState(true);

  async function gotoAmizades(){
    setLoading(false);
    const response = await listarAmigos();
    navigation.navigate('Amizades', {amigos: response.data});
    setLoading(true);
  }

  async function gotoNotificacao(){
    setLoading(false);
    const response = await listarPedidosAmizade();
    navigation.navigate('Notificacao', {pedidos: response.data});
    setLoading(true);
  }

  async function gotoRanking(){
    setLoading(false);
    const response1 = await getRanking();
    const response2 = await getRankingDeAmigos();
    navigation.navigate('Ranking', {rankGeral: response1.data, rankAmizade: response2.data});
    setLoading(true);
  }


  useFonts({
    K2D_400Regular,
  });

  if(loading){
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../imgs/Trenem.png')} />
        <View style={styles.jogos}>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Jogar', { id: '0' })}>
            <Text style={styles.textoBotao}>Provão</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Jogar', { id: '1' })}>
            <Text style={styles.textoBotao}>Matérias</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Em breve...</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.barraTarefas}>
          <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Principal')}>
            <Feather name="home" size={72} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons} onPress={gotoAmizades}>
            <Feather name="users" size={72} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}  onPress={gotoNotificacao}>
            <Feather name="bell" size={72} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}  onPress={gotoRanking}>
            <Feather name="award" size={72} color="white" />
          </TouchableOpacity>
        </View>
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
    position: 'relative',
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
  jogos: {
    position: 'absolute',
    top: 250
  },
  botao: {
    borderRadius: 20,
    padding: 10,
    borderColor: '#308B9D',
    borderWidth: 2,
    marginBottom: 40,
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
  barraTarefas:{
    position: 'absolute',
    bottom: 0,
    height: 100,
    backgroundColor: '#308B9D',
    width: '100%',
    borderColor: '#308B9D',
    borderWidth: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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