import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import RenderHtml from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';

export default function Prova({ route, navigation }) {
  const { nomeModo, tempo, questoes } = route.params;
  const { width } = useWindowDimensions();
  const [loading, setLoading] = useState(true);
  const [respostasCorretas, setRespostasCorretas] = useState([]);
  const [q0, setQ0] = useState('X');
  const [q1, setQ1] = useState('X');
  const [q2, setQ2] = useState('X');
  const [q3, setQ3] = useState('X');
  const [q4, setQ4] = useState('X');
  const [q5, setQ5] = useState('X');
  const [q6, setQ6] = useState('X');
  const [q7, setQ7] = useState('X');
  const [q8, setQ8] = useState('X');
  const [q9, setQ9] = useState('X');

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
  
    return `${minutes}:${seconds}`
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
      <View style={styles.cabecalho}>
        <Text style={styles.nome}>{nomeModo}</Text>
        <View style={styles.timer}>
          <CountdownCircleTimer
            isPlaying={true}
            duration={tempo == 1 ? 3000 : 1800}
            size={35}
            strokeWidth={0}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            children={children}
            onComplete={() => navigation.navigate('Resultado', { nomeModo: nomeModo, q0: q0, q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, q6: q6, q7: q7, q8: q8, q9: q9, questoes: questoes })}
          >
            {({ remainingTime, color }) => (
              <Text style={{ color, fontSize: 15 }}>
                {remainingTime}
              </Text>
            )}
          </CountdownCircleTimer>
        </View>
      </View>

      <ScrollView>
        <View style={styles.questoes}>
          {questoes[0] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[0].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[0].alternativas.includes('<math>') ? questoes[0].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[0].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <RadioButton.Group onValueChange={novaresposta => setQ0(novaresposta)} value={q0} >
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
            </View>) : (null)
          }
          {questoes[1] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[1].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[1].alternativas.includes('<math>') ? questoes[1].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[1].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <RadioButton.Group onValueChange={novaresposta => setQ1(novaresposta)} value={q1} >
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
            </View>) : (null)
          }
          {questoes[2] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[2].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[2].alternativas.includes('<math>') ? questoes[2].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[2].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <RadioButton.Group onValueChange={novaresposta => setQ2(novaresposta)} value={q2} >
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
            </View>) : (null)
          }
          {questoes[3] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[3].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[3].alternativas.includes('<math>') ? questoes[3].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[3].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <RadioButton.Group onValueChange={novaresposta => setQ3(novaresposta)} value={q3} >
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
            </View>) : (null)
          }
          {questoes[4] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[4].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[4].alternativas.includes('<math>') ? questoes[4].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[4].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <RadioButton.Group onValueChange={novaresposta => setQ4(novaresposta)} value={q4} >
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
            </View>) : (null)
          }
          {questoes[5] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[5].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[5].alternativas.includes('<math>') ? questoes[5].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[5].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <RadioButton.Group onValueChange={novaresposta => setQ5(novaresposta)} value={q5} >
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
            </View>) : (null)
          }
          {questoes[6] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[6].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[6].alternativas.includes('<math>') ? questoes[6].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[6].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <RadioButton.Group onValueChange={novaresposta => setQ6(novaresposta)} value={q6} >
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
            </View>) : (null)
          }
          {questoes[7] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[7].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[7].alternativas.includes('<math>') ? questoes[7].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[7].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <RadioButton.Group onValueChange={novaresposta => setQ7(novaresposta)} value={q7} >
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
            </View>) : (null)
          }
          {questoes[8] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[8].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[8].alternativas.includes('<math>') ? questoes[8].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[8].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <RadioButton.Group onValueChange={novaresposta => setQ8(novaresposta)} value={q8} >
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
            </View>) : (null)
          }
          {questoes[9] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[9].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[9].alternativas.includes('<math>') ? questoes[9].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[9].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <RadioButton.Group onValueChange={novaresposta => setQ9(novaresposta)} value={q9} >
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
            </View>) : (null)
          }
        </View>
      </ScrollView>

      <View style={styles.comandos}>
        <TouchableOpacity>
          {/*<Feather name="chevron-left" size={24} color="white" />*/}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Resultado', { nomeModo: nomeModo, q0: q0, q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, q6: q6, q7: q7, q8: q8, q9: q9, questoes: questoes })}>
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
    height: 'auto'
  },
  cabecalho: {
    paddingBottom: 15,
  },
  nome: {
    color: 'white',
    fontSize: 24,
    marginTop: 15
  },
  questoes: {
    flexDirection: "column",
    backgroundColor: '#308B9D',
    marginBottom: 120,
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