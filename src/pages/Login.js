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
    navigation.navigate("auth");
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
        <View style={styles.inputs}>
          <Feather style={styles.iconEmail} name="mail" size={24} color="black" />
          <TextInput style={styles.camposDeLogin} value={email} onChangeText={onChangeEmail} placeholder={'Email'} theme={{colors: {text: 'black', primary: '#308B9D'}}} />
        </View>
        <View style={styles.inputs}>
          <Feather style={styles.iconSenha} name="lock" size={24} color="black" />
          <TextInput style={styles.camposDeLogin} value={senha} onChangeText={onChangeSenha} placeholder={'Senha'} theme={{colors: {text: 'black', primary: '#308B9D'}}} secureTextEntry={true} />
        </View>
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
    backgroundColor: '#fff',
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
    top: -45
},
iconSenha: {
    position: 'absolute',
    zIndex: 2,
    left: 5,
    top: -45
},
  camposDeLogin: {
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    top: -50,
    backgroundColor: '#FFFFFF',
    margin: 0,
    width: '100%',
    height: 40,
    paddingLeft: 24,
    marginBottom: 25,
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