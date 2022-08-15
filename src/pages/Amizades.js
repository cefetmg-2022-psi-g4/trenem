import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo'


export default function Principal({ navigation }) {

    useFonts({
        K2D_400Regular,
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={48} color="black" />
            </TouchableOpacity>
            <TextInput style={styles.barraPesquisa} />
            <Text style={styles.textoCriaPedidos}>PEDIDOS</Text>
            <Image style={styles.imagemUsuario} source={require('../imgs/userPhoto.png')} />
            <Text style={styles.textoCriaAmizades}>AMIZADES</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    login: {
        top: -100,
        position: 'relative',
        fontSize: 64,
        fontFamily: 'K2D_400Regular',
    },
    container: {
        paddingVertical: 15,
        flex: 1,
        backgroundColor: '#308B9D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    barraPesquisa: {
        borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        top: -220,
        backgroundColor: '#FFFFFF',
        margin: 0,
        width: '60%',
        height: 40,
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
    textoBotaoSalvar: {
        color: 'Black',
        fontFamily: 'K2D_400Regular',
        fontSize: 28,
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    voltar: {
        position: 'absolute',
        top: 15,
        left: 15,
    },
    imagemUsuario: {
        top: -90,
        position: 'relative',
        height: 100,
        width: '50%',
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