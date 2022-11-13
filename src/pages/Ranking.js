import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { ScrollView } from 'react-native-gesture-handler';


export default function Ranking({ route, navigation }) {
  const { rankGeral, rankAmizade } = route.params;
  const [tipo, onChangeTipo] = React.useState('geral');

  useFonts({
    K2D_400Regular,
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={48} color="black" />
      </TouchableOpacity>

      {tipo == 'amizade' ? (
        <TouchableOpacity style={styles.botaoAmigos} onPress={() => onChangeTipo('amizade')} >
          <Text style={styles.textoBotaoAmigos}>Amigos</Text>
        </TouchableOpacity>)
        : (
          <TouchableOpacity style={styles.botaoAmigos} onPress={() => onChangeTipo('amizade')} >
            <Text style={styles.textoBotaoAmigos}>Amigos</Text>
          </TouchableOpacity>)
      }

      {tipo == 'geral' ? (
        <TouchableOpacity style={styles.botaoGlobal} onPress={() => onChangeTipo('geral')} >
          <Text style={styles.textoBotaoGlobal}>Global</Text>
        </TouchableOpacity>)
        : (
          <TouchableOpacity style={styles.botaoGlobal} onPress={() => onChangeTipo('geral')} >
            <Text style={styles.textoBotaoGlobal}>Global</Text>
          </TouchableOpacity>)
      }

      {tipo == 'geral' ? (
        <ScrollView>
          {rankGeral.map((rank, index) => (
            <View index={index} style={styles.view} >
              <Text style={styles.rankingTexto}>{index}</Text>
              <Text style={styles.rankingTexto}>{rank.nome}</Text>
            </View>
          ))}
        </ScrollView>)
        : (
          <ScrollView>
            {rankAmizade.map((rank, index) => (
              <View index={index} style={styles.view} >
                <Text style={styles.rankingTexto}>{index}</Text>
                <Text style={styles.rankingTexto}>{rank.nome}</Text>
              </View>
            ))}
          </ScrollView>)
      }

    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'green',
  },
  rankingTexto: {
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