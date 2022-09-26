import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import RenderHtml from 'react-native-render-html';


function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}

export default function Prova({ route, navigation }) {
  const { nomeModo, questoes } = route.params;
  const { width } = useWindowDimensions();
  const [loading, setLoading] = useState(true);
  const [respostasCorretas, setRespostasCorretas] = useState([]);
  const [alternativasMarcadas, setAlternativasMarcadas] = useState([]); 

  useEffect(() => {
    if (alternativasMarcadas.length <= 0) {
      for (let i = 0; i < questoes.length; i++) {
        setAlternativasMarcadas(marcadas => [...marcadas, 'A']);
      }
    }
  });

  function marcarAlternativa(value, index) {
    const a = alternativasMarcadas;
    a[index] = value;
    console.log(index);
    console.log(a);
    setAlternativasMarcadas(a);
    console.log(alternativasMarcadas);
    console.log(alternativasMarcadas[index]);
    useForceUpdate();
  }

  if (loading) {
    setLoading(false);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#308B9D',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator size={60} color="#FFF" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nomeModo}</Text>
      <View style={styles.timer}>
        <CountdownCircleTimer
          isPlaying={true}
          duration={3000}
          size={35}
          strokeWidth={0}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => navigation.navigate('Resultado', { nomeModo: nomeModo, resposta: resposta, questao: questao })}
        >
          {({ remainingTime, color }) => (
            <Text style={{ color, fontSize: 15 }}>
              {remainingTime}
            </Text>
          )}
        </CountdownCircleTimer>
      </View>

      <View style={styles.questoes}>
        {questoes.map((item, index) => (
          <View style={styles.questao} key={index}>
            <View style={styles.caixaEnunciado}>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${item.enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${item.alternativas.includes('<math>') ? item.alternativas.trim().replace(/[\r\n]+/gm, ' ') : item.alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
            </View>
            <View style={styles.grupo}>
              <RadioButton.Group onValueChange={novaresposta => marcarAlternativa(novaresposta, index)} value={alternativasMarcadas[index]} >
                <View style={styles.opcoes}>
                  <RadioButton value='A' />
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
          </View>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#308B9D',
    alignItems: 'center',
    height: 'auto'
  },
  nome: {
    color: 'white',
    fontSize: 24,
    marginTop: 15
  },
  questoes: {
    flexDirection: "column",
    backgroundColor: '#308B9D',
    marginBottom: 15,
    height: 'auto',
  },
  questao: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  caixaEnunciado: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
    padding: 5,
    width: '90%',
    height: 'auto',
    marginTop: 20,
  },
  enunciado: {
    color: 'black',
  },
  timer: {
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
  comandos: {
    backgroundColor: '#2B4C52',
    position: 'absolute',
    width: '100%',
    height: '7%',
    bottom: -1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  opcoes: {
    flexDirection: 'row',
    color: 'black',
    borderRadius: 20,
    padding: 3,
    backgroundColor: '#FFFFFF',
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