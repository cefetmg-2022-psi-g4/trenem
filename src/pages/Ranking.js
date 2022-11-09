import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo'


export default function Ranking({ navigation }) {

    useFonts({
        K2D_400Regular,
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={48} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botaoAmigos}>
                <Text style={styles.textoBotaoAmigos}>Amigos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoGlobal}>
                <Text style={styles.textoBotaoGlobal}>Global</Text>
            </TouchableOpacity>
            <View style={styles.view}>
              <Text style={styles.rankingTexto}>1</Text>
              <Image style={styles.rankingTexto} source={require('../imgs/userPhoto.png')} />
              <Text style={styles.rankingTexto}>Nome do Usuário</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'green',
  },
  rankingTexto:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemGerenciarAmizades: {
    position: 'fixed',
    height: 100,
    width: '10%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingVertical: 15,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fcfeff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoJogar: {
    flex: 1,
    color: 'black',
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#308B9D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: '55%',
  },
  botaoAmigos: {
    flex: 1,
    color: 'black',
    position: 'absolute',
    bottom: 700,
    left: 480,
    backgroundColor: '#308B9D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '20%',
    height: '4%'
  },
  botaoGlobal: {
    flex: 1,
    color: 'black',
    position: 'absolute',
    bottom: 700,
    right: 480,
    backgroundColor: '#308B9D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '20%',
    height: '4%'
  },
  textoBotaoJogar: {
    fontFamily: 'K2D_400Regular',
    fontSize: 48,
  },
  textoBotaoAmigos: {
    fontFamily: 'K2D_400Regular',
    fontSize: 28,
  },
  textoBotaoGlobal: {
    fontFamily: 'K2D_400Regular',
    fontSize: 28,
  },
  voltar: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  nome: {
    position: 'absolute',
    top: 75,
    fontSize: 52,
    fontFamily: 'K2D_400Regular'
  },
  descricaoCaixa: {
    backgroundColor: '#fcfeff',
    width: '100%',
    padding: 5,
    position: 'absolute',
    top: 150,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 5,
    minHeight: '25%'
  },
  descricaoTitulo: {
    fontSize: 30,
    fontFamily: 'K2D_400Regular',
  },
  descricao: {
    fontSize: 20,
    maxWidth: '65%',
    textAlign: 'justify',
  },
  opcoes:{
    width: '100%',
    position: 'absolute',
    top: 350,
    alignItems: 'center',
    backgroundColor: '#fcfeff',
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