import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { TextInput } from 'react-native-paper';

export default function Principal({ navigation }) {


    useFonts({
        K2D_400Regular,
    });


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={48} color="black" />
            </TouchableOpacity>

            <Image style={styles.imagemUsuario} source={require('../imgs/userPhoto.png')} />
            <Text style={styles.textoCampos}>E-mail:</Text>
            <TextInput style={styles.camposDeEmail} />
            <Text style={styles.textoCampos}>Nome de usuário:</Text>
            <TextInput style={styles.camposDeUsuario} />
            <Text style={styles.textoCampos}>Senha: </Text>
            <TextInput secureTextEntry={true} style={styles.camposDeSenha} />
            <TouchableOpacity style={styles.botaoSalvar} onPress={() => navigation.navigate('Principal', { id: '0' })}>
                <Text style={styles.textoBotaoSalvar}>Salvar</Text>
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
    camposDeUsuario: {
        borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        top: -70,
        backgroundColor: '#FFFFFF',
        margin: 0,
        width: '60%',
        height: 40,
    },
    camposDeSenha: {
        borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        top: -70,
        backgroundColor: '#FFFFFF',
        margin: 0,
        width: '60%',
        height: 40,
    },
    camposDeEmail: {
        borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        top: -70,
        backgroundColor: '#FFFFFF',
        margin: 0,
        width: '60%',
        height: 40,
    },
    textoCampos: {
        textAlign: 'left',
        top: -70,
        position: 'relative',
        margin: 20,
        width: '60%',
        height: 10,
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