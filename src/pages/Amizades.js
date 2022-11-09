import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { pedirAmizade } from '../controllers/AppController';

export default function Amizades({ route, navigation }) {
    const { amigos } = route.params;
    const [email, onChangeEmail] = React.useState('');

    useFonts({
        K2D_400Regular,
    });

    async function handleAmizades(){
        const response = await pedirAmizade(email);
        onChangeEmail('');
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={48} color="black" />
            </TouchableOpacity>
            <TextInput style={styles.textoBarraPesquisa} value={email} onChangeText={onChangeEmail} placeholder="Insira o email do sua amigo" theme={{colors: {text: 'black', primary: '#308B9D'}}} />
            <TouchableOpacity style={styles.adicionar} onPress={handleAmizades}>
                <Feather name="plus" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.textoAmizades}>AMIZADES</Text>

            {amigos[0] != null ? (
                <ScrollView>
                    {amigos.map((amigo, index) => (  
                        <View index={index}>
                            <Text style={styles.nomeUser}>{amigo.nome}</Text>
                        <Image style={styles.imagemAmizades} source={require('../imgs/userPhoto.png')} /> 
                        </View>
                    ))}  
                </ScrollView>
            ) : (
                <Text style={styles.textoNenhumAmigo}>Você não tem amigos. ;-;</Text>
            )}
        </View>
    );
}

    const styles = StyleSheet.create({
        
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
        textoBarraPesquisa: {
            top: 20,
            position: 'absolute',
            borderRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: '#fcfeff',
            margin: 0,
            paddingRight: 25,
            width: '60%',
            height: 40,
            fontFamily: 'K2D_400Regular',
        },
        adicionar: {
            position: 'absolute',
            top: 25,
            right: 140,
            zIndex: 2,
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