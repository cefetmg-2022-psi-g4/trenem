import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';

export default function Resultado({route, navigation}) {
    const { modo, opcao, questao } = route.params;
    const [percentual, setPercentual] = useState("");

  useFonts({
    K2D_400Regular,
  });

  useEffect(()=>{

    if(opcao == questao.gabarito){
        setPercentual("100%");
    } else {
        setPercentual("0%");
    }
  }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.nome}>{modo}</Text>
        <View style={styles.caixaEnunciado}>
            <Text><span dangerouslySetInnerHTML={{ __html: questao.enunciado }}></span></Text>
            <Text><ol type='A'><span dangerouslySetInnerHTML={{ __html: questao.alternativas }}></span></ol></Text>
        </View>

        <View style={styles.grupo}>
            <div>
                <View style={[styles.opcoes, ("A" == questao.gabarito) ? styles.opcaoCerta : null, ("A" != questao.gabarito) && ("A" == opcao) ? styles.errou : null ]}>
                    <Text style={("A" == questao.gabarito) || ("A" == opcao) ? styles.branco : null}> A</Text>
                </View>
                <View style={[styles.opcoes, ("B" == questao.gabarito) ? styles.opcaoCert : null, ("B" != questao.gabarito) && ("B" == opcao) ? styles.errou : null ]}>
                    <Text style={("B" == questao.gabarito) || ("B" == opcao) ? styles.branco : null}> B</Text>
                </View>
                <View style={[styles.opcoes, ("C" == questao.gabarito) ? styles.opcaoCerta : null, ("C" != questao.gabarito) && ("C" == opcao) ? styles.errou : null ]}>
                    <Text style={("C" == questao.gabarito) || ("C" == opcao) ? styles.branco : null}> C</Text>
                </View>
                <View style={[styles.opcoes, ("D" == questao.gabarito) ? styles.opcaoCerta : null, ("D" != questao.gabarito) && ("D" == opcao) ? styles.errou : null ]}>
                    <Text style={("D" == questao.gabarito) || ("D" == opcao) ? styles.branco : null}> D</Text>
                </View>
                <View style={[styles.opcoes, ("E" == questao.gabarito) ? styles.opcaoCerta : null, ("E" != questao.gabarito) && ("E" == opcao) ? styles.errou : null ]}>
                    <Text style={("E" == questao.gabarito) || ("E" == opcao) ? styles.branco : null}> E</Text>
                </View>
                {"F" == opcao ?
                    <View style={[styles.opcoes, styles.errou ]}>
                        <Text style={styles.branco}> Não respondeu</Text>
                    </View> : null
                }
            </div>
        </View>
        

        <View style={styles.comandos}>
            <TouchableOpacity>
                {/*<Feather name="chevron-left" size={24} color="white" />*/}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                <Feather name="check-circle" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                {/*<Feather name="chevron-right" size={24} color="white" />*/}
            </TouchableOpacity>
        </View>
    </View> 
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#308B9D',
      alignItems: 'center',
      
    },
    nome: {
      color: 'white',
      fontSize: 24,
      marginTop: 15
    },
    caixaEnunciado: {
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 5,
      width: '90%',
      height: '40%',
      marginTop: 20,
    },
    timer:{
      backgroundColor: 'white',
      marginTop: 5,
      borderRadius: 50,
      flexDirection: 'row',
      paddingVertical: 2,
      paddingHorizontal: 5
    },
    botao:{
      borderRadius: 20,
      padding: 10,
      backgroundColor:'#FFFFFF',
      margin: 15,
      width: '70%',
      justifyConten: 'center',
      alignItems: 'center',
    },
    comandos:{
      backgroundColor: '#2B4C52',
      position: 'absolute',
      width: '100%',
      height: '7%',
      bottom: -1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    opcoes:{
      flexDirection: 'row',
      borderRadius: 20,
      padding: 5,
      backgroundColor:'#FFFFFF',
      justifyConten: 'center',
      alignItems: 'center',
      marginTop: 5,
      width: 300
    },
    grupo: {
      maxWidth: '90%'
    },
    opcaoCerta: {
        backgroundColor:'#2B4C52',
        borderColor: '#53E220',
        borderStyle:'solid',
        borderWidth: 2,
        color: '#FFFFFF'
    },
    errou: {
        backgroundColor:'#2B4C52',
        borderColor: '#FF0000',
        borderStyle:'solid',
        borderWidth: 2,
        color: '#FFFFFF'
    },
    branco: {
        color: '#FFFFFF'
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