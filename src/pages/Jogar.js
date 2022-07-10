
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Jogar({route, navigation}) {
  const [modo, setModo] = useState({});
  const [loading, setLoading] = useState(true);

  useFonts({
    K2D_400Regular,
  });

  const { id } = route.params;

  useEffect(()=>{

    async function loadModo(){
        
        const response = await api.get('modoDeJogo/' + id);

        const result = response.data;

        setModo(result);
        setLoading(false);
    }

    loadModo();
  }, [])

  if(loading){
    return(
        <div className="loading">
          <h2>Carregando...</h2>
        </div>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={ () => navigation.goBack()}>
        <Feather name="arrow-left" size={48} color="black" />
      </TouchableOpacity>
      <Text style={styles.nome}>{modo.nome}</Text>
      <View style={styles.descricaoCaixa}>
        <Text style={styles.descricaoTitulo}>Descrição</Text>
        <Text style={styles.descricao}>{modo.descricao}</Text>
      </View>
      <TouchableOpacity style={styles.botaoJogar} onPress={ () => navigation.navigate('Prova', {nomeModo: modo.nome})}>
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
    justifyConten: 'center',
    borderRadius: 5,
    width: '55%',
  },
  textoBotaoJogar:{
    fontFamily: 'K2D_400Regular',
    fontSize: 48,
  },
  voltar:{
    position:'absolute',
    top:15,
    left:15,
  },
  configuracoes: {
      
  },
  nome:{
    position:'absolute',
    top:75,
    fontSize: 50,
    fontFamily: 'K2D_400Regular'
  },
  descricaoCaixa:{
    backgroundColor: 'white',
    width: '55%',
    padding: 5,
    position: 'absolute',
    top: 150,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 5,
    minHeight: '25%'
  },
  descricaoTitulo:{
    fontSize: 40,
    fontFamily: 'K2D_400Regular',
  },
  descricao: {
    fontSize: 30,
    textAlign: 'auto'
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