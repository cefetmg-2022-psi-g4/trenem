import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import RenderHtml from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';


export default function Resultado({ route, navigation }) {
  const { nomeModo, q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, questoes } = route.params;
  const [percentual, setPercentual] = useState("");
  const { width } = useWindowDimensions();

  useFonts({
    K2D_400Regular,
  });

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.nome}>{nomeModo}</Text>
      </View>

      <ScrollView>
        <View style={styles.questoes}>

          <View style={styles.questao}>
            <View style={styles.caixaEnunciado}>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[0].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[0].alternativas.includes('<math>') ? questoes[0].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[0].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
            </View>
            <View style={styles.grupo}>
              <View style={[styles.opcoes, ("A" == questoes[0].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[0].gabarito.trim()) && ("A" == q0) ? styles.errou : null]}>
                <Text style={("A" == questoes[0].gabarito.trim()) || ("A" == q0) ? styles.branco : null}> A</Text>
              </View>
              <View style={[styles.opcoes, ("B" == questoes[0].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[0].gabarito.trim()) && ("B" == q0) ? styles.errou : null]}>
                <Text style={("B" == questoes[0].gabarito.trim()) || ("B" == q0) ? styles.branco : null}> B</Text>
              </View>
              <View style={[styles.opcoes, ("C" == questoes[0].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[0].gabarito.trim()) && ("C" == q0) ? styles.errou : null]}>
                <Text style={("C" == questoes[0].gabarito.trim()) || ("C" == q0) ? styles.branco : null}> C</Text>
              </View>
              <View style={[styles.opcoes, ("D" == questoes[0].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[0].gabarito.trim()) && ("D" == q0) ? styles.errou : null]}>
                <Text style={("D" == questoes[0].gabarito.trim()) || ("D" == q0) ? styles.branco : null}> D</Text>
              </View>
              <View style={[styles.opcoes, ("E" == questoes[0].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[0].gabarito.trim()) && ("E" == q0) ? styles.errou : null]}>
                <Text style={("E" == questoes[0].gabarito.trim()) || ("E" == q0) ? styles.branco : null}> E</Text>
              </View>
              {"X" == q0 ?
                <View style={[styles.opcoes, styles.errou]}>
                  <Text style={styles.branco}> Não respondeu</Text>
                </View> : null
              }
            </View>
          </View>

          <View style={styles.questao}>
            <View style={styles.caixaEnunciado}>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[1].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[1].alternativas.includes('<math>') ? questoes[1].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[1].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
            </View>
            <View style={styles.grupo}>
              <View style={[styles.opcoes, ("A" == questoes[1].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[1].gabarito.trim()) && ("A" == q1) ? styles.errou : null]}>
                <Text style={("A" == questoes[1].gabarito.trim()) || ("A" == q1) ? styles.branco : null}> A</Text>
              </View>
              <View style={[styles.opcoes, ("B" == questoes[1].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[1].gabarito.trim()) && ("B" == q1) ? styles.errou : null]}>
                <Text style={("B" == questoes[1].gabarito.trim()) || ("B" == q1) ? styles.branco : null}> B</Text>
              </View>
              <View style={[styles.opcoes, ("C" == questoes[1].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[1].gabarito.trim()) && ("C" == q1) ? styles.errou : null]}>
                <Text style={("C" == questoes[1].gabarito.trim()) || ("C" == q1) ? styles.branco : null}> C</Text>
              </View>
              <View style={[styles.opcoes, ("D" == questoes[1].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[1].gabarito.trim()) && ("D" == q1) ? styles.errou : null]}>
                <Text style={("D" == questoes[1].gabarito.trim()) || ("D" == q1) ? styles.branco : null}> D</Text>
              </View>
              <View style={[styles.opcoes, ("E" == questoes[1].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[1].gabarito.trim()) && ("E" == q1) ? styles.errou : null]}>
                <Text style={("E" == questoes[1].gabarito.trim()) || ("E" == q1) ? styles.branco : null}> E</Text>
              </View>
              {"X" == q1 ?
                <View style={[styles.opcoes, styles.errou]}>
                  <Text style={styles.branco}> Não respondeu</Text>
                </View> : null
              }
            </View>
          </View>

          <View style={styles.questao}>
            <View style={styles.caixaEnunciado}>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[2].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[2].alternativas.includes('<math>') ? questoes[2].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[2].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
            </View>
            <View style={styles.grupo}>
              <View style={[styles.opcoes, ("A" == questoes[2].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[2].gabarito.trim()) && ("A" == q2) ? styles.errou : null]}>
                <Text style={("A" == questoes[2].gabarito.trim()) || ("A" == q2) ? styles.branco : null}> A</Text>
              </View>
              <View style={[styles.opcoes, ("B" == questoes[2].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[2].gabarito.trim()) && ("B" == q2) ? styles.errou : null]}>
                <Text style={("B" == questoes[2].gabarito.trim()) || ("B" == q2) ? styles.branco : null}> B</Text>
              </View>
              <View style={[styles.opcoes, ("C" == questoes[2].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[2].gabarito.trim()) && ("C" == q2) ? styles.errou : null]}>
                <Text style={("C" == questoes[2].gabarito.trim()) || ("C" == q2) ? styles.branco : null}> C</Text>
              </View>
              <View style={[styles.opcoes, ("D" == questoes[2].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[2].gabarito.trim()) && ("D" == q2) ? styles.errou : null]}>
                <Text style={("D" == questoes[2].gabarito.trim()) || ("D" == q2) ? styles.branco : null}> D</Text>
              </View>
              <View style={[styles.opcoes, ("E" == questoes[2].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[2].gabarito.trim()) && ("E" == q2) ? styles.errou : null]}>
                <Text style={("E" == questoes[2].gabarito.trim()) || ("E" == q2) ? styles.branco : null}> E</Text>
              </View>
              {"X" == q2 ?
                <View style={[styles.opcoes, styles.errou]}>
                  <Text style={styles.branco}> Não respondeu</Text>
                </View> : null
              }
            </View>
          </View>

          <View style={styles.questao}>
            <View style={styles.caixaEnunciado}>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[3].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[3].alternativas.includes('<math>') ? questoes[3].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[3].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
            </View>
            <View style={styles.grupo}>
              <View style={[styles.opcoes, ("A" == questoes[3].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[3].gabarito.trim()) && ("A" == q3) ? styles.errou : null]}>
                <Text style={("A" == questoes[3].gabarito.trim()) || ("A" == q3) ? styles.branco : null}> A</Text>
              </View>
              <View style={[styles.opcoes, ("B" == questoes[3].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[3].gabarito.trim()) && ("B" == q3) ? styles.errou : null]}>
                <Text style={("B" == questoes[3].gabarito.trim()) || ("B" == q3) ? styles.branco : null}> B</Text>
              </View>
              <View style={[styles.opcoes, ("C" == questoes[3].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[3].gabarito.trim()) && ("C" == q3) ? styles.errou : null]}>
                <Text style={("C" == questoes[3].gabarito.trim()) || ("C" == q3) ? styles.branco : null}> C</Text>
              </View>
              <View style={[styles.opcoes, ("D" == questoes[3].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[3].gabarito.trim()) && ("D" == q3) ? styles.errou : null]}>
                <Text style={("D" == questoes[3].gabarito.trim()) || ("D" == q3) ? styles.branco : null}> D</Text>
              </View>
              <View style={[styles.opcoes, ("E" == questoes[3].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[3].gabarito.trim()) && ("E" == q3) ? styles.errou : null]}>
                <Text style={("E" == questoes[3].gabarito.trim()) || ("E" == q3) ? styles.branco : null}> E</Text>
              </View>
              {"X" == q3 ?
                <View style={[styles.opcoes, styles.errou]}>
                  <Text style={styles.branco}> Não respondeu</Text>
                </View> : null
              }
            </View>
          </View>

          <View style={styles.questao}>
            <View style={styles.caixaEnunciado}>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[4].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[4].alternativas.includes('<math>') ? questoes[4].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[4].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
            </View>
            <View style={styles.grupo}>
              <View style={[styles.opcoes, ("A" == questoes[4].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[4].gabarito.trim()) && ("A" == q4) ? styles.errou : null]}>
                <Text style={("A" == questoes[4].gabarito.trim()) || ("A" == q4) ? styles.branco : null}> A</Text>
              </View>
              <View style={[styles.opcoes, ("B" == questoes[4].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[4].gabarito.trim()) && ("B" == q4) ? styles.errou : null]}>
                <Text style={("B" == questoes[4].gabarito.trim()) || ("B" == q4) ? styles.branco : null}> B</Text>
              </View>
              <View style={[styles.opcoes, ("C" == questoes[4].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[4].gabarito.trim()) && ("C" == q4) ? styles.errou : null]}>
                <Text style={("C" == questoes[4].gabarito.trim()) || ("C" == q4) ? styles.branco : null}> C</Text>
              </View>
              <View style={[styles.opcoes, ("D" == questoes[4].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[4].gabarito.trim()) && ("D" == q4) ? styles.errou : null]}>
                <Text style={("D" == questoes[4].gabarito.trim()) || ("D" == q4) ? styles.branco : null}> D</Text>
              </View>
              <View style={[styles.opcoes, ("E" == questoes[4].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[4].gabarito.trim()) && ("E" == q4) ? styles.errou : null]}>
                <Text style={("E" == questoes[4].gabarito.trim()) || ("E" == q4) ? styles.branco : null}> E</Text>
              </View>
              {"X" == q4 ?
                <View style={[styles.opcoes, styles.errou]}>
                  <Text style={styles.branco}> Não respondeu</Text>
                </View> : null
              }
            </View>
          </View>

          <View style={styles.questao}>
            <View style={styles.caixaEnunciado}>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[5].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[5].alternativas.includes('<math>') ? questoes[5].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[5].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
            </View>
            <View style={styles.grupo}>
              <View style={[styles.opcoes, ("A" == questoes[5].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[5].gabarito.trim()) && ("A" == q5) ? styles.errou : null]}>
                <Text style={("A" == questoes[5].gabarito.trim()) || ("A" == q5) ? styles.branco : null}> A</Text>
              </View>
              <View style={[styles.opcoes, ("B" == questoes[5].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[5].gabarito.trim()) && ("B" == q5) ? styles.errou : null]}>
                <Text style={("B" == questoes[5].gabarito.trim()) || ("B" == q5) ? styles.branco : null}> B</Text>
              </View>
              <View style={[styles.opcoes, ("C" == questoes[5].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[5].gabarito.trim()) && ("C" == q5) ? styles.errou : null]}>
                <Text style={("C" == questoes[5].gabarito.trim()) || ("C" == q5) ? styles.branco : null}> C</Text>
              </View>
              <View style={[styles.opcoes, ("D" == questoes[5].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[5].gabarito.trim()) && ("D" == q5) ? styles.errou : null]}>
                <Text style={("D" == questoes[5].gabarito.trim()) || ("D" == q5) ? styles.branco : null}> D</Text>
              </View>
              <View style={[styles.opcoes, ("E" == questoes[5].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[5].gabarito.trim()) && ("E" == q5) ? styles.errou : null]}>
                <Text style={("E" == questoes[5].gabarito.trim()) || ("E" == q5) ? styles.branco : null}> E</Text>
              </View>
              {"X" == q5 ?
                <View style={[styles.opcoes, styles.errou]}>
                  <Text style={styles.branco}> Não respondeu</Text>
                </View> : null
              }
            </View>
          </View>

          <View style={styles.questao}>
            <View style={styles.caixaEnunciado}>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[6].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[6].alternativas.includes('<math>') ? questoes[6].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[6].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
            </View>
            <View style={styles.grupo}>
              <View style={[styles.opcoes, ("A" == questoes[6].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[6].gabarito.trim()) && ("A" == q6) ? styles.errou : null]}>
                <Text style={("A" == questoes[6].gabarito.trim()) || ("A" == q6) ? styles.branco : null}> A</Text>
              </View>
              <View style={[styles.opcoes, ("B" == questoes[6].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[6].gabarito.trim()) && ("B" == q6) ? styles.errou : null]}>
                <Text style={("B" == questoes[6].gabarito.trim()) || ("B" == q6) ? styles.branco : null}> B</Text>
              </View>
              <View style={[styles.opcoes, ("C" == questoes[6].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[6].gabarito.trim()) && ("C" == q6) ? styles.errou : null]}>
                <Text style={("C" == questoes[6].gabarito.trim()) || ("C" == q6) ? styles.branco : null}> C</Text>
              </View>
              <View style={[styles.opcoes, ("D" == questoes[6].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[6].gabarito.trim()) && ("D" == q6) ? styles.errou : null]}>
                <Text style={("D" == questoes[6].gabarito.trim()) || ("D" == q6) ? styles.branco : null}> D</Text>
              </View>
              <View style={[styles.opcoes, ("E" == questoes[6].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[6].gabarito.trim()) && ("E" == q6) ? styles.errou : null]}>
                <Text style={("E" == questoes[6].gabarito.trim()) || ("E" == q6) ? styles.branco : null}> E</Text>
              </View>
              {"X" == q6 ?
                <View style={[styles.opcoes, styles.errou]}>
                  <Text style={styles.branco}> Não respondeu</Text>
                </View> : null
              }
            </View>
          </View>

          <View style={styles.questao}>
            <View style={styles.caixaEnunciado}>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[7].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[7].alternativas.includes('<math>') ? questoes[7].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[7].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
            </View>
            <View style={styles.grupo}>
              <View style={[styles.opcoes, ("A" == questoes[7].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[7].gabarito.trim()) && ("A" == q7) ? styles.errou : null]}>
                <Text style={("A" == questoes[7].gabarito.trim()) || ("A" == q7) ? styles.branco : null}> A</Text>
              </View>
              <View style={[styles.opcoes, ("B" == questoes[7].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[7].gabarito.trim()) && ("B" == q7) ? styles.errou : null]}>
                <Text style={("B" == questoes[7].gabarito.trim()) || ("B" == q7) ? styles.branco : null}> B</Text>
              </View>
              <View style={[styles.opcoes, ("C" == questoes[7].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[7].gabarito.trim()) && ("C" == q7) ? styles.errou : null]}>
                <Text style={("C" == questoes[7].gabarito.trim()) || ("C" == q7) ? styles.branco : null}> C</Text>
              </View>
              <View style={[styles.opcoes, ("D" == questoes[7].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[7].gabarito.trim()) && ("D" == q7) ? styles.errou : null]}>
                <Text style={("D" == questoes[7].gabarito.trim()) || ("D" == q7) ? styles.branco : null}> D</Text>
              </View>
              <View style={[styles.opcoes, ("E" == questoes[7].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[7].gabarito.trim()) && ("E" == q7) ? styles.errou : null]}>
                <Text style={("E" == questoes[7].gabarito.trim()) || ("E" == q7) ? styles.branco : null}> E</Text>
              </View>
              {"X" == q7 ?
                <View style={[styles.opcoes, styles.errou]}>
                  <Text style={styles.branco}> Não respondeu</Text>
                </View> : null
              }
            </View>
          </View>

          <View style={styles.questao}>
            <View style={styles.caixaEnunciado}>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[8].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[8].alternativas.includes('<math>') ? questoes[8].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[8].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
            </View>
            <View style={styles.grupo}>
              <View style={[styles.opcoes, ("A" == questoes[8].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[8].gabarito.trim()) && ("A" == q8) ? styles.errou : null]}>
                <Text style={("A" == questoes[8].gabarito.trim()) || ("A" == q8) ? styles.branco : null}> A</Text>
              </View>
              <View style={[styles.opcoes, ("B" == questoes[8].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[8].gabarito.trim()) && ("B" == q8) ? styles.errou : null]}>
                <Text style={("B" == questoes[8].gabarito.trim()) || ("B" == q8) ? styles.branco : null}> B</Text>
              </View>
              <View style={[styles.opcoes, ("C" == questoes[8].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[8].gabarito.trim()) && ("C" == q8) ? styles.errou : null]}>
                <Text style={("C" == questoes[8].gabarito.trim()) || ("C" == q8) ? styles.branco : null}> C</Text>
              </View>
              <View style={[styles.opcoes, ("D" == questoes[8].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[8].gabarito.trim()) && ("D" == q8) ? styles.errou : null]}>
                <Text style={("D" == questoes[8].gabarito.trim()) || ("D" == q8) ? styles.branco : null}> D</Text>
              </View>
              <View style={[styles.opcoes, ("E" == questoes[8].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[8].gabarito.trim()) && ("E" == q8) ? styles.errou : null]}>
                <Text style={("E" == questoes[8].gabarito.trim()) || ("E" == q8) ? styles.branco : null}> E</Text>
              </View>
              {"X" == q9 ?
                <View style={[styles.opcoes, styles.errou]}>
                  <Text style={styles.branco}> Não respondeu</Text>
                </View> : null
              }
            </View>
          </View>

          <View style={styles.questao}>
            <View style={styles.caixaEnunciado}>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[9].enunciado.trim().replace(/[\r\n]+/gm, '<br>')}` }} /></Text>
              <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `<ol type="A"> ${questoes[9].alternativas.includes('<math>') ? questoes[9].alternativas.trim().replace(/[\r\n]+/gm, ' ') : questoes[9].alternativas.trim().replace(/[\r\n]+/gm, '<br>')}</ol>` }} /></Text>
            </View>
            <View style={styles.grupo}>
              <View style={[styles.opcoes, ("A" == questoes[9].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[9].gabarito.trim()) && ("A" == q9) ? styles.errou : null]}>
                <Text style={("A" == questoes[9].gabarito.trim()) || ("A" == q9) ? styles.branco : null}> A</Text>
              </View>
              <View style={[styles.opcoes, ("B" == questoes[9].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[9].gabarito.trim()) && ("B" == q9) ? styles.errou : null]}>
                <Text style={("B" == questoes[9].gabarito.trim()) || ("B" == q9) ? styles.branco : null}> B</Text>
              </View>
              <View style={[styles.opcoes, ("C" == questoes[9].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[9].gabarito.trim()) && ("C" == q9) ? styles.errou : null]}>
                <Text style={("C" == questoes[9].gabarito.trim()) || ("C" == q9) ? styles.branco : null}> C</Text>
              </View>
              <View style={[styles.opcoes, ("D" == questoes[9].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[9].gabarito.trim()) && ("D" == q9) ? styles.errou : null]}>
                <Text style={("D" == questoes[9].gabarito.trim()) || ("D" == q9) ? styles.branco : null}> D</Text>
              </View>
              <View style={[styles.opcoes, ("E" == questoes[9].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[9].gabarito.trim()) && ("E" == q9) ? styles.errou : null]}>
                <Text style={("E" == questoes[9].gabarito.trim()) || ("E" == q9) ? styles.branco : null}> E</Text>
              </View>
              {"X" == q9 ?
                <View style={[styles.opcoes, styles.errou]}>
                  <Text style={styles.branco}> Não respondeu</Text>
                </View> : null
              }
            </View>
          </View>
        </View>
      </ScrollView>


      <View style={styles.comandos}>
        <TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
          <Feather name="check-circle" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
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
  },
  opcaoCerta: {
    backgroundColor: '#2B4C52',
    borderColor: '#53E220',
    borderStyle: 'solid',
    borderWidth: 2,
    color: '#FFFFFF'
  },
  errou: {
    backgroundColor: '#2B4C52',
    borderColor: '#FF0000',
    borderStyle: 'solid',
    borderWidth: 2,
    color: '#FFFFFF'
  },
  branco: {
    color: '#FFFFFF'
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