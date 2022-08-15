import React, {useState, useEffect}  from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function Prova({route, navigation}) {
    const [opcao, setOpcao] = React.useState('F');
    const [questao, setQuestao] = useState([]);
    const [loading, setLoading] = useState(true);
    const [respostasCorretas, setRespostasCorretas] = useState([]);

    const { nomeModo } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.nome}>{nomeModo}</Text>
            <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}></Text>
                <Text style={styles.enunciado}></Text>
            </View>
            <View style={styles.timer}>
                <CountdownCircleTimer
                  isPlaying={true}
                  duration={30}
                  size={35}
                  strokeWidth={0}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[10, 6, 3, 0]}
                  onComplete={() => navigation.navigate('Resultado', {nomeModo: nomeModo, opcao: opcao,questao: questao})}
                >
                  {({ remainingTime, color }) => (
                    <Text style={{ color, fontSize: 15 }}>
                      {remainingTime}
                    </Text>
                  )}
                </CountdownCircleTimer>
            </View>

            <View style={styles.grupo}>
            <RadioButton.Group onValueChange={novaOpcao => setOpcao(novaOpcao)} value={opcao} >
              <View style={styles.opcoes}>
                <RadioButton value='A'/>
                <Text>A</Text>
              </View>
              <View style={styles.opcoes}>
                <RadioButton value='B' />
                <Text>B</Text>
              </View>
              <View style={styles.opcoes}>
                <RadioButton value='C' />
                <Text>C</Text>
              </View>
              <View style={styles.opcoes}>
                <RadioButton value='D' />
                <Text>D</Text>
              </View>
              <View style={styles.opcoes}>
                <RadioButton value='E' />
                <Text>E</Text>
              </View>
                          
            </RadioButton.Group>
            </View>
            <View style={styles.comandos}>
                <TouchableOpacity>
                  {/*<Feather name="chevron-left" size={24} color="white" />*/}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Resultado', {nomeModo: nomeModo, opcao: opcao,questao: questao})}>
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
    paddingHorizontal: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
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
    padding: 3,
    backgroundColor:'#FFFFFF',
    justifyConten: 'center',
    alignItems: 'center',
    marginTop: 5,
    width: 300
  },
  grupo: {
    maxWidth: '90%'
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