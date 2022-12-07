import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { ScrollView } from 'react-native-gesture-handler';
import { getRanking, getRankingDeAmigos, listarAmigos, listarPedidosAmizade } from '../controllers/AppController';
import { ActivityIndicator } from 'react-native-paper';

export default function Creditos({ navigation }) {
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
                <Text style={styles.textoCredito}>CRÉDITOS</Text>

                <ScrollView style={styles.criadores}>
                    <View style={styles.criador}>
                        <Text style={styles.nomeCriador}>Enzo de Souza Braz</Text>
                    </View>
                    <View style={styles.criador}>
                        <Text style={styles.nomeCriador}>Gabriel Guimarães dos Santos Ricardo</Text>
                    </View>
                    <View style={styles.criador}>
                        <Text style={styles.nomeCriador}>Gabriel Lucas Costa Martins</Text>
                    </View> 
                    <View style={styles.criador}>
                        <Text style={styles.nomeCriador}>Helio André Mendes Moreira Antunes</Text>
                    </View>
                    <View style={styles.criador}>
                        <Text style={styles.nomeCriador}>João Vitor Lopes Fagundes</Text>
                    </View>
                    <View style={styles.criador}>
                        <Text style={styles.nomeCriador}>Matheus Gaston Viana Silveira</Text>
                    </View>
                </ScrollView>
    
                <View style={styles.barraTarefas}>
                    <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                        <Feather name="home" size={64} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={gotoAmizades}>
                        <Feather name="users" size={64} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={gotoNotificacao}>
                        <Feather name="bell" size={64} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={gotoRanking}>
                        <Feather name="bar-chart-2" size={64} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Creditos')}>
                        <Feather name="award" size={64} color="#2B4C52" />
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
    textoCredito: {
        position: 'fixed',
        color: 'black',
        fontFamily: 'K2D_400Regular',
        fontSize: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        top: 18,
        fontWeight: 'bold',
    },
    criadores:{
        marginTop: 75,
        width: '100%', 
        paddingBottom: 200, 
    },
    criador:{
        alignItems: 'center',
    },
    nomeCriador: {
        color: 'black',
        fontFamily: 'K2D_400Regular',
        fontSize: 32,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 64
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