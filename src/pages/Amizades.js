import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { getRanking, getRankingDeAmigos, listarAmigos, listarPedidosAmizade, pedirAmizade } from '../controllers/AppController';

export default function Amizades({ route, navigation }) {
    const { amigos } = route.params;
    const [email, onChangeEmail] = React.useState('');
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

    async function handleAmizades(){
        const response = await pedirAmizade(email);
        onChangeEmail('');
    }

    if(loading){
        return(
            <View style={styles.container}>
                <View style={styles.barraPesquisa}>
                <TextInput style={styles.textoBarraPesquisa} value={email} onChangeText={onChangeEmail} placeholder="Insira o email do sua amigo" theme={{colors: {text: 'black', primary: '#308B9D'}}} />
                <TouchableOpacity style={styles.adicionar} onPress={handleAmizades}>
                    <Feather name="plus" size={30} color="black" />
                </TouchableOpacity>
                </View>
                <Text style={styles.textoAmizades}>AMIZADES</Text>
    
                {amigos[0] != null ? (
                    <ScrollView style={styles.amizades}>
                        {amigos.map((amigo, index) => (  
                            <View key={index} style={styles.amizade}>
                                <Text style={styles.nomeUser}>{amigo.nome}</Text>
                            </View>
                        ))}  
                    </ScrollView>
                ) : (
                    <Text style={styles.textoNenhumAmigo}>Você não tem amigos. ;-;</Text>
                )}
    
                <View style={styles.barraTarefas}>
                    <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                        <Feather name="home" size={72} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={gotoAmizades}>
                        <Feather name="users" size={72} color="#2B4C52" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={gotoNotificacao}>
                        <Feather name="bell" size={72} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={gotoRanking}>
                        <Feather name="bar-chart-2" size={72} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Creditos')}>
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
        amizades:{
            marginTop: 150,
            width: '100%',  
        },
        amizade:{
            alignItems: 'center',
            borderBottomWidth: 2,
            borderBottomColor: "#308B9D",
            marginLeft: 100,
            marginRight: 100,
            borderStyle: 'dashed',
        },
        nomeUser:{
            color: 'black',
            fontFamily: 'K2D_400Regular',
            fontSize: 20,
            textAlign: 'center',
            textAlignVertical: 'center',
            marginBottom: 10,
            marginTop: 10,
        },
        barraPesquisa: {
            position: 'relative',
            width: '60%',
            alignItems: 'center',
        },
        textoBarraPesquisa: {
            top: 20,
            position: 'absolute',
            borderRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: '#fcfeff',
            margin: 0,
            paddingRight: 25,
            width: '100%',
            height: 40,
            fontFamily: 'K2D_400Regular',
        },
        adicionar: {
            position: 'absolute',
            top: 25,
            right: 5,
            zIndex: 2,
        },
        textoNenhumAmigo: {
            color: '#FF0000',
            position: 'fixed',
            top: 150,
            fontSize: 24,
        },
        textoAmizades: {
            position: 'fixed',
            color: 'black',
            fontFamily: 'K2D_400Regular',
            fontSize: 35,
            textAlign: 'center',
            textAlignVertical: 'center',
            top: 100,
            fontWeight: 'bold',
        },
        container: {
            paddingVertical: 15,
            flex: 1,
            position:'relative',
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