import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { TextInput } from 'react-native-paper';
//import { black } from 'react-native-paper/lib/typescript/styles/colors';

export default function TelaInicial({ navigation }) {  

  useFonts({
    K2D_400Regular,
  });

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../imgs/Trenem.png')} />
      <Text style={styles.slogan}>Prepare-se para o Enem {'\n'}     como nunca antes. </Text>
      <TouchableOpacity style={styles.botaoCadastro} onPress={() => navigation.navigate('Cadastro', { id: '0' })}>
        <Text style={styles.textoBotaoCadastro}>CADASTRE-SE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate('Login', { id: '0' })}>
        <Text style={styles.textoBotaoLogin}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    top: -100,
    position: 'relative',
    fontSize: 64,
    fontFamily: 'K2D_400Regular',
  },
  container: {
    paddingVertical: 15,
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoLogin: {
    height: 60,
    flex: 1,
    position: 'absolute',
    bottom: 220,
    backgroundColor: 'black',
    justifyContent: 'center',
    borderRadius: 4,
    alignContent: 'center',
    width: '35%',
    bottom: 300,
  },
  botaoCadastro: {
    height: 60,
    flex: 1,
    position: 'absolute',
    bottom: 220,
    backgroundColor: '#308B9D',
    justifyContent: 'center',
    borderRadius: 4,
    alignContent: 'center',
    width: '55%',
    bottom: 390,
  },
  textoBotaoLogin:{
    color: 'white',
    fontFamily: 'K2D_400Regular',
    fontSize: 28,
    position: 'relative',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textoBotaoCadastro:{
    color: 'black',
    fontFamily: 'K2D_400Regular',
    fontSize: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  logo: {
    width: 230,
    position: 'absolute',
    height: 47,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 560,
  },
  slogan: {
    bottom: 500,
    position: 'absolute',
    fontSize: 15,
    color: '#2B4C52',
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