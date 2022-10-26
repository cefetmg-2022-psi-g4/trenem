import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo'

export default function Amizades({ navigation }) {

    useFonts({
        K2D_400Regular,
    });

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={48} color="black" />
            </TouchableOpacity>
             {/*div para barra de pesquisa */}
                <TextInput placeholder="Pedir Amizade" style={styles.textoBarraPesquisa} />
                <TouchableOpacity style={styles.adicionar}>
                    <Feather name="plus" size={30} color="black" />
                </TouchableOpacity>
            <Text style={styles.textoCriaPedidos}></Text>
            <Text style={styles.textoAmizades}>AMIZADES</Text>
            <Text style={styles.nomeUser}>Nome do Usuário</Text>
            <Image style={styles.imagemAmizades} source={require('../imgs/userPhoto.png')} />
            <Image style={styles.imagemGerenciarAmizades} source={require('../imgs/userPhoto.png')} />
        </View>
    );
}

    const styles = StyleSheet.create({
        textoAceitar : {
            position: 'relative',
            color: 'black',
            fontFamily: 'K2D_400Regular',
            fontSize: 15,
            textAlign: 'center',
            textAlignVertical: 'center',     
            fontWeight: 'bold',
        },
        
        textoAmizades: {
            position: 'fixed',
            color: 'black',
            fontFamily: 'K2D_400Regular',
            fontSize: 35,
            textAlign: 'center',
            textAlignVertical: 'center',
            top: 70,
            fontWeight: 'bold',
        },
        nomeUser: {
            position: 'fixed',
            color: 'white',
            fontFamily: 'K2D_400Regular',
            fontSize: 20,
            textAlign: 'center',
            textAlignVertical: 'center',
            top: 150,
            right: 100,
        },

        container: {
            paddingVertical: 15,
            flex: 1,
            backgroundColor: '#308B9D',
            justifyContent: 'center',
            alignItems: 'center',
        },

        textoBarraPesquisa: {
            top: 20,
            position: 'fixed',
            borderRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            alignItems: 'left',
            backgroundColor: '#FFFFFF',
            margin: 0,
            width: '60%',
            height: 40,
            fontFamily: 'K2D_400Regular',
        },

        botaoSalvar: {
            height: 45,
            flex: 1,
            position: 'absolute',
            bottom: 180,
            backgroundColor: 'white',
            justifyContent: 'center',
            borderRadius: 5,
            alignContent: 'center',
            width: '35%',
        },

        voltar: {
            position: 'absolute',
            top: 15,
            left: 15,
        },
    
        adicionar: {
            position: 'fixed',
            top: 25,
            right: 85,
            zIndex: 2,
        },
    
        imagemGerenciarAmizades: {
            top: 120,
            position: 'fixed',
            left: 50,
            height: 100,
            width: '20%',
            resizeMode: 'contain',
        },
    
        textoCriaPedidos: {
            position: 'relative',
            color: 'black',
            fontFamily: 'K2D_400Regular',
            fontSize: 35,
            textAlign: 'center',
            textAlignVertical: 'center',
            bottom: 200,
        },
        
        textoCriaAmizades: {
            position: 'relative',
            color: 'black',
            fontFamily: 'K2D_400Regular',
            fontSize: 35,
            textAlign: 'center',
            textAlignVertical: 'center',
            bottom: 70,
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