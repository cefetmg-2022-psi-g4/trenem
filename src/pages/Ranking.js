import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { ScrollView } from 'react-native-gesture-handler';
import { getRanking, getRankingDeAmigos, listarAmigos, listarPedidosAmizade } from '../controllers/AppController';
import { ActivityIndicator } from 'react-native-paper';


export default function Ranking({ route, navigation }) {
  const { rankGeral, rankAmizade } = route.params;
  const [tipo, onChangeTipo] = React.useState('amizade');
  const [loading, setLoading] = React.useState(true);

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
        <Text style={styles.textoRanking}>RANKING</Text>
  
        <View style={styles.comandos}>
          {tipo == 'amizade' ? (
            <TouchableOpacity style={styles.botaoAmigosSelecionado} onPress={() => onChangeTipo('amizade')} >
              <Text style={styles.textoBotaoAmigos}>Amigos</Text>
            </TouchableOpacity>)
            : (
              <TouchableOpacity style={styles.botaoAmigos} onPress={() => onChangeTipo('amizade')} >
                <Text style={styles.textoBotaoAmigos}>Amigos</Text>
              </TouchableOpacity>)
          }
  
          {tipo == 'geral' ? (
            <TouchableOpacity style={styles.botaoGlobalSelecionado} onPress={() => onChangeTipo('geral')} >
              <Text style={styles.textoBotaoGlobal}>Global</Text>
            </TouchableOpacity>)
            : (
              <TouchableOpacity style={styles.botaoGlobal} onPress={() => onChangeTipo('geral')} >
                <Text style={styles.textoBotaoGlobal}>Global</Text>
              </TouchableOpacity>)
          }
        </View>
  
        {tipo == 'geral' ? (
          <ScrollView style={styles.rank}>
            {rankGeral.map((rank, index) => (
              <View key={index} style={styles.colocacao}>
                <Text style={styles.colocacaoTexto}>{index+1} - {rank.nome}</Text>
              </View>
            ))}
          </ScrollView>)
          : (
            <ScrollView style={styles.rank}>
              {rankAmizade[0] != null ? ( 
                <>
                  {rankAmizade.map((rank, index) => (
                    <View key={index} style={styles.colocacao}>
                      <Text style={styles.colocacaoTexto}>{index+1} - {rank.nome}</Text>
                    </View>
                  ))}
                </>
              ) : (
                <View style={styles.colocacao}>
                  <Text style={styles.colocacaoTextoSemAmigo}>Você não tem amigos. ;-;</Text>
                </View>
              )}
              
            </ScrollView>)
        }
  
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
    );
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
  textoRanking: {
    position: 'fixed',
    color: 'black',
    fontFamily: 'K2D_400Regular',
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
    top: 18,
    fontWeight: 'bold',
  },
  comandos:{
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 75
  },
  botaoAmigos: {
    color: 'black',
    borderBottomWidth: 2,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 25,
    padding: 5,
  },
  botaoGlobal: {
    color: 'black',
    borderBottomWidth: 2,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 25,
    padding: 5,
  },
  botaoAmigosSelecionado: {
    color: 'black',
    borderBottomColor: '#308B9D',
    borderBottomWidth: 2,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 25,
    padding: 5,
  },
  botaoGlobalSelecionado: {
    color: 'black',
    borderBottomColor: '#308B9D',
    borderBottomWidth: 2,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 25,
    padding: 5,
  },
  textoBotaoAmigos: {
    fontFamily: 'K2D_400Regular',
    fontSize: 28,
  },
  textoBotaoGlobal: {
    fontFamily: 'K2D_400Regular',
    fontSize: 28,
  },
  rank:{
    marginTop: 25,
  },
  colocacao:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  colocacaoTexto: {
    fontFamily: 'K2D_400Regular',
    fontSize: 24,
  },
  colocacaoTextoSemAmigo:{
    color: '#FF0000',
    fontFamily: 'K2D_400Regular',
    fontSize: 24,
  },
  container: {
    paddingVertical: 15,
    flex: 1,
    position: 'relative',
    backgroundColor: '#fcfeff',
    justifyContent: 'center',
    alignItems: 'center',
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