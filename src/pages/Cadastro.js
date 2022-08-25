import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { TextInput } from 'react-native-paper';
import { criarConta } from '../controllers/AppController';

export default function Cadastro({ navigation }) {
    const textoInicial = '';
    const [nome, onChangeNome] = React.useState(textoInicial);
    const [email, onChangeEmail] = React.useState(textoInicial);
    const [senha, onChangeSenha] = React.useState(textoInicial);

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
            <Text style={styles.textoCampos}>E-mail:</Text>
            <TextInput style={styles.campoDeEmail} value={email} onChangeText={onChangeEmail}/>
            <Text style={styles.textoCampos}>Nome de usuário:</Text>
            <TextInput style={styles.campoDeUsuario} value={nome} onChangeText={onChangeNome}/>
            <Text style={styles.textoCampos}>Senha: </Text>
            <TextInput secureTextEntry={true} style={styles.campoDeSenha} value={senha} onChangeText={onChangeSenha}/>
            <TouchableOpacity style={styles.botaoCriar} onPress={() => {criarConta(nome,email,senha)
                                                                        navigation.navigate('Principal')}}>
                <Text style={styles.textoBotaoCriar}>Criar</Text>
            </TouchableOpacity>
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
    textoCriaPerfil: {
        position: 'relative',
        color: 'black',
        fontFamily: 'K2D_400Regular',
        fontSize: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        bottom: 130,
    },
    campoDeUsuario: {
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
    campoDeSenha: {
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
    campoDeEmail: {
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
    botaoCriar: {
        height: 45,
        flex: 1,
        position: 'absolute',
        bottom: 180,
        backgroundColor: 'black',
        justifyContent: 'center',
        borderRadius: 5,
        alignContent: 'center',
        width: '35%',
    },
    textoBotaoCriar: {
        color: 'white',
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