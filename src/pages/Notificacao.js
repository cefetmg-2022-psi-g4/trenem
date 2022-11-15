 import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { ScrollView } from 'react-native-gesture-handler';
import { aceitarAmizade, getRanking, getRankingDeAmigos, listarAmigos, listarPedidosAmizade, recusarAmizade } from '../controllers/AppController';
import { ActivityIndicator } from 'react-native-paper';

export default function Notificacao({ route, navigation }) {
    const { pedidos } = route.params;
    const [loading, setLoading] = React.useState(true);

    async function aceitarAmigo(email){
        const response = await aceitarAmizade(email);
        navigation.navigate('RecarregarTela', {tela: "Notificacao"});
    }

    async function recusarAmigo(email){
        const response = await recusarAmizade(email);
        navigation.navigate('RecarregarTela', {tela: "Notificacao"});
    }

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
                <Text style={styles.textoNotificacao}>NOTIFICAÇÕES</Text>
    
                {pedidos[0] != null ? (
                    <ScrollView style={styles.notificacoes}>
                        {pedidos.map((pedido, index) => (
                            <View key={index} style={styles.notificacao}>
                                <Text style={styles.nomeUser}>{pedido.nome} deseja ser seu amigo.</Text>
                                <View style={styles.comandos}>
                                    <TouchableOpacity style={styles.botaoAceitar} onPress={() => aceitarAmigo(`${pedido.email}`)}>
                                        <Text style={styles.textoAceitar}>Aceitar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.botaoNegar} onPress={() => recusarAmigo(`${pedido.email}`)}>
                                        <Text style={styles.textoAceitar}>Negar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}  
                    </ScrollView>
                ) : (
                    <Text style={styles.textoNenhumaNotificacao}>Sem notificação no momento.</Text>
                )}
    
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
    textoNenhumaNotificacao: {
        color: '#FF0000',
        position: 'fixed',
        top: 150,
        fontSize: 24,
    },
    textoNotificacao: {
        position: 'fixed',
        color: 'black',
        fontFamily: 'K2D_400Regular',
        fontSize: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        top: 18,
        fontWeight: 'bold',
    },
    notificacoes:{
        marginTop: 75,
        width: '100%',  
    },
    notificacao:{
        alignItems: 'center',
    },
    comandos:{
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    textoAceitar : {
        color: 'black',
        fontFamily: 'K2D_400Regular',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',     
        fontWeight: 'bold',
    },
    botaoAceitar: {
        height: 25,
        backgroundColor: '#53E220', 
        justifyContent: 'center',
        borderRadius: 5,
        alignContent: 'center',
        marginRight: 25
    },
    botaoNegar: {
        height: 25,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        borderRadius: 5,
        alignContent: 'center',
        marginLeft: 25
    },
    nomeUser: {
        color: 'black',
        fontFamily: 'K2D_400Regular',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    container: {
        paddingVertical: 15,
        flex: 1,
        backgroundColor: '#fcfeff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
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