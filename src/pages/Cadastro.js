import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { TextInput } from 'react-native-paper';
import { criarConta } from '../controllers/AppController';
import { getToken } from '../controllers/AuthController';
import { apiEstudante } from '../services/api';
import { StretchInY } from 'react-native-reanimated';


export default function Cadastro({ navigation }) {
    const textoInicial = '';
    const [nome, onChangeNome] = React.useState(textoInicial);
    const [email, onChangeEmail] = React.useState(textoInicial);
    const [senha, onChangeSenha] = React.useState(textoInicial);


    async function handleLogin(){
        console.log(`${nome} / ${email} / ${senha}`);
        await criarConta(nome,email,senha);
        navigation.navigate("auth");
    }

    useFonts({
        K2D_400Regular,
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={48} color="black" />
            </TouchableOpacity>
            <Text style={styles.textoCriaPerfil}>CRIE SEU PERFIL</Text>
            <Image style={styles.imagemUsuario} source={require('../imgs/userPhoto.png')} />
            <View style={styles.inputs} >
                <Feather style={styles.iconEmail} name="mail" size={24} color="black" />
                <TextInput style={styles.campoCadastro} value={email} onChangeText={onChangeEmail} placeholder={'Email'} theme={{colors: {text: 'black', primary: '#308B9D'}}} />
            </View>
            <View style={styles.inputs} >
                <Feather style={styles.iconNome} name="user" size={24} color="black" />
                <TextInput style={styles.campoCadastro} value={nome} onChangeText={onChangeNome} placeholder={'Nome'} theme={{colors: {text: 'black', primary: '#308B9D'}}} />
            </View>
            <View style={styles.inputs} >
                <Feather style={styles.iconSenha} name="lock" size={24} color="black" />
                <TextInput style={styles.campoCadastro} value={senha} onChangeText={onChangeSenha} placeholder={'Senha'} theme={{colors: {text: 'black', primary: '#308B9D'}}} secureTextEntry={true}  />
            </View>
            <TouchableOpacity style={styles.botaoCriar} onPress={handleLogin}>
                <Text style={styles.textoBotaoCriar}>Criar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        flex: 1,
        backgroundColor: '#fcfeff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs:{
        position: 'relative',
        width: '60%',
    },
    iconEmail: {
        position: 'absolute',
        zIndex:2,
        left: 5,
        top: -63
    },
    iconNome: {
        position: 'absolute',
        zIndex: 2,
        left: 5,
        top: -65
    },
    iconSenha: {
        position: 'absolute',
        zIndex: 2,
        left: 5,
        top: -65
    },
    textoCriaPerfil: {
        position: 'relative',
        color: 'black',
        fontFamily: 'K2D_400Regular',
        fontSize: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        bottom: 130,
    },
    campoCadastro: {
        borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        top: -70,
        backgroundColor: '#FFFFFF',
        margin: 0,
        width: '100%',
        height: 40,
        paddingLeft: 24,
        marginBottom: 25,
    },
    botaoCriar: {
        height: 45,
        flex: 1,
        position: 'absolute',
        bottom: 180,
        backgroundColor: '#308B9D',
        justifyContent: 'center',
        borderRadius: 5,
        alignContent: 'center',
        width: '35%',
    },
    textoBotaoCriar: {
        color: 'black',
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