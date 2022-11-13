 import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { ScrollView } from 'react-native-gesture-handler';

export default function Notificacao({ route, navigation }) {
    const { pedidos } = route.params;

    async function aceitarAmizade(email){
        const response = await pedirAmizade(email);
        navigation.navigate('RecarregarTela', {tela: "Notificacao"});
    }

    async function recusarAmizade(email){
        const response = await pedirAmizade(email);
        navigation.navigate('RecarregarTela', {tela: "Notificacao"});
    }

    useFonts({
        K2D_400Regular,
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={48} color="black" />
            </TouchableOpacity>
            <Text style={styles.textoNotificacao}>NOTIFICAÇÕES</Text>

            {pedidos[0] != null ? (
                <ScrollView style={styles.notificacoes}>
                    {pedidos.map((pedido, index) => (
                        <View key={index} style={styles.notificacao}>
                            <Text style={styles.nomeUser}>{pedido.nome} deseja ser seu amigo.</Text>
                            <View style={styles.comandos}>
                                <TouchableOpacity style={styles.botaoAceitar} onPress={() => aceitarAmizade(`${pedido.email}`)}>
                                    <Text style={styles.textoAceitar}>Aceitar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.botaoNegar} onPress={() => aceitarAmizade(`${pedido.email}`)}>
                                    <Text style={styles.textoAceitar}>Negar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}  
                </ScrollView>
            ) : (
                <Text style={styles.textoNenhumaNotificacao}>Sem notificação no momento.</Text>
            )}
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