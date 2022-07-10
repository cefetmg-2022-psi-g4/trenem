import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';

export default function Principal({ navigation }) {
  
  useFonts({
    K2D_400Regular,
  });

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../imgs/Trenem.png')} />
      {/*<TouchableOpacity style={styles.menu} onPress={() => navigation.toggleDrawer()}>
        <Feather name="menu" size={48} color="black" />
      </TouchableOpacity>*/}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Jogar', { id: '0' })}>
        <Text style={styles.textoBotao}> Corrida Contra o Tempo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Jogar', { id: '1' })}>
        <Text style={styles.textoBotao}>Provão</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Jogar', { id: '2' })}>
        <Text style={styles.textoBotao}>Matérias</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Jogar', { id: '3' })}>
        <Text style={styles.textoBotao} >Versus</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flex: 1,
    backgroundColor: '#308B9D',
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
    backgroundColor: '#FFFFFF',
    margin: 20,
    width: '70%',
    justifyConten: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    fontFamily: 'K2D_400Regular',
    fontSize: 20,
  },
  menu: {
    position: 'absolute',
    right: 15,
    top: 15
  }


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