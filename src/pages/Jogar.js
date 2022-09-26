
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { useEffect, useState } from 'react';
import { loadModoJogo } from '../controllers/AppController';
import Dropdown from '../components/Dropdown';
import { criarProva } from '../controllers/AppController';

export default function Jogar({ route, navigation }) {
  const [modo, setModo] = useState({});
  const [loading, setLoading] = useState(true);
  const [tempo, setTempo] = useState(null);
  const [opcao, setOpcao] = useState(null);

  useFonts({
    K2D_400Regular,
  });

  const { id } = route.params;

  useEffect(() => {
    if(loading){
      setModo(loadModoJogo(id));
      setLoading(false);
    }
  });

  async function handleJogar(){
    if(id == 0){
      if(tempo == null) return;
      const response = await criarProva();
      navigation.navigate('Prova', {nomeModo: modo.nome, questoes: response.data});
    } else if (id == 1) {
      if(tempo == null || opcao == null) return;
      navigation.navigate('Prova', {nomeModo: modo.nome, id: id, tempo: tempo, opcao: opcao});
    } else if (id == 2) {
      navigation.navigate('Prova', {nomeModo: modo.nome, id: id, tempo: tempo, opcao: opcao});
    }
  }

  if(loading){
    return(
      <View 
        style={{ 
          flex:1, 
          backgroundColor: '#308B9D', 
          justifyContent: 'center', 
          alignItems:'center' 
        }}
      >
        <ActivityIndicator size={60} color="#FFF" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={48} color="black" />
      </TouchableOpacity>
      <Text style={styles.nome}>{modo.nome}</Text>
      <View style={styles.descricaoCaixa}>
        <Text style={styles.descricaoTitulo}>Descrição</Text>
        <Text style={styles.descricao}>{modo.descricao}</Text>
      </View>
      {modo.tempo != null ? (
        <Text style={styles.descricaoTitulo}>Tempo</Text> ) : (null)
      }
      {modo.tempo != null ? (
        <Dropdown label="Select Item" data={modo.tempo} onSelect={setTempo} /> ) : (null)
      }
      {modo.opcoes != null ? (
        <Text style={styles.descricaoTitulo}>Opção</Text> ) : (null)
      }
      {modo.opcoes != null ? (
        <Dropdown label="Select Item" data={modo.opcoes} onSelect={setOpcao} /> ) : (null)
      }
      <TouchableOpacity style={styles.botaoJogar} onPress={handleJogar}>
        <Text style={styles.textoBotaoJogar}>JOGAR</Text>
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
  botaoJogar: {
    flex: 1,
    color: 'black',
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: '55%',
  },
  textoBotaoJogar: {
    fontFamily: 'K2D_400Regular',
    fontSize: 48,
  },
  voltar: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  nome: {
    position: 'absolute',
    top: 75,
    fontSize: 40,
    fontFamily: 'K2D_400Regular'
  },
  descricaoCaixa: {
    backgroundColor: 'white',
    width: '65%',
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
    textAlign: 'justify',
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