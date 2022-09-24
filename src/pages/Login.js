import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { TextInput } from 'react-native-paper';
import { acessarConta } from '../controllers/AppController';
import { getToken } from '../controllers/AuthController';
import { apiEstudante } from '../services/api';

export default function Login({ navigation }) {

  const textoInicial = '';
  const [email, onChangeEmail] = React.useState(textoInicial);
  const [senha, onChangeSenha] = React.useState(textoInicial);

  async function handleLogin(){
    if(email === '' || senha === ''){
      return;
    }

    await acessarConta(email,senha);
    navigation.navigate("TelaInicial");
  }

  useFonts({
    K2D_400Regular,
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={ () => navigation.goBack()}>
        <Feather name="arrow-left" size={48} color="black" />
      </TouchableOpacity>
        <Text style={styles.login}>LOGIN</Text>
        <Text style={styles.textoCampos}>E-mail:</Text>
        <TextInput style={styles.camposDeLogin} value={email} onChangeText={onChangeEmail}/>
        <Text style={styles.textoCampos}>Senha: </Text>
        <TextInput secureTextEntry={true} style={styles.camposDeLogin} value={senha} onChangeText={onChangeSenha}/>
      <TouchableOpacity style={styles.botaoEntrar} onPress={handleLogin}>
        <Text style={styles.textoBotaoEntrar}>ENTRAR</Text>
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
  camposDeLogin: {
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    top: -50,
    backgroundColor: '#FFFFFF',
    margin: 0,
    width: '60%',
    height: 40,
  },
  textoCampos: {
    textAlign: 'left',
    top: -50,
    position: 'relative',
    margin: 20,
    width: '60%',
    height: 10,
  },
  botaoEntrar: {
    height: 50,
    flex: 1,
    position: 'absolute',
    bottom: 220,
    backgroundColor: 'black',
    justifyContent: 'center',
    borderRadius: 5,
    alignContent: 'center',
    width: '35%',
  },
  textoBotaoEntrar:{
    color: 'white',
    fontFamily: 'K2D_400Regular',
    fontSize: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
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