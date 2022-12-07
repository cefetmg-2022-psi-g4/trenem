import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d';
import RenderHtml from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';
import { finalizarProva } from '../controllers/AppController';


export default function Resultado({ route, navigation }) {
  const { nomeModo, q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, questoes } = route.params;
  const [percentual, setPercentual] = useState("");
  const { width } = useWindowDimensions();

  async function handleResultado(){
    let alternativasTodas = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9];

    let alternativas = [];

    for (let i = 0; i < questoes.length; i++) {
      alternativas.push(alternativasTodas[i]);
    }

    console.log(alternativas);
    const response = await finalizarProva(questoes, alternativas);
    navigation.navigate('Principal');
  }


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
          {questoes[0] != null ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginLeft: '15%' }} />
              <View>
                <Text style={{ width: 20, textAlign: 'center', color: '#308B9D', fontSize: 24 }}>1</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginRight: '15%' }} />
            </View>) : (null)
          }
          {questoes[0] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[0].enunciado.includes('<img') ? questoes[0].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=') : questoes[0].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>')}` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <View style={[styles.opcoes, ("A" == questoes[0].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[0].gabarito.trim()) && ("A" == q0) ? styles.errou : null]}>
                  <Text style={("A" == questoes[0].gabarito.trim()) || ("A" == q0) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[0].alternativas.includes('<img') ? questoes[0].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("B" == questoes[0].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[0].gabarito.trim()) && ("B" == q0) ? styles.errou : null]}>
                  <Text style={("B" == questoes[0].gabarito.trim()) || ("B" == q0) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[0].alternativas.includes('<img') ? '<' + questoes[0].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("C" == questoes[0].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[0].gabarito.trim()) && ("C" == q0) ? styles.errou : null]}>
                  <Text style={("C" == questoes[0].gabarito.trim()) || ("C" == q0) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[0].alternativas.includes('<img') ? '<' + questoes[0].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("D" == questoes[0].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[0].gabarito.trim()) && ("D" == q0) ? styles.errou : null]}>
                  <Text style={("D" == questoes[0].gabarito.trim()) || ("D" == q0) ? styles.branco : null}>
                    {questoes[0].alternativas.trim().split('><')[4] != undefined ? (
                      <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[0].alternativas.includes('<img') ? '<' + questoes[0].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                      : (
                        <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[0].alternativas.includes('<img') ? '<' + questoes[0].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                    }
                  </Text>
                </View>
                {questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[0].alternativas.trim().split('><')[4] != undefined ? (
                  <View style={[styles.opcoes, ("E" == questoes[0].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[0].gabarito.trim()) && ("E" == q0) ? styles.errou : null]}>
                    <Text style={("E" == questoes[0].gabarito.trim()) || ("E" == q0) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[0].alternativas.includes('<img') ? '<' + questoes[0].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                  </View>
                ) : (null)}

                {null == q0 ?
                  <View style={[styles.opcoes, styles.errou]}>
                    <Text style={styles.branco}> Não respondeu</Text>
                  </View> : null
                }
              </View>
            </View>) : (null)
          }
          {questoes[1] != null ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginLeft: '15%' }} />
              <View>
                <Text style={{ width: 20, textAlign: 'center', color: '#308B9D', fontSize: 24 }}>2</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginRight: '15%' }} />
            </View>) : (null)
          }
          {questoes[1] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[1].enunciado.includes('<img') ? questoes[1].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=') : questoes[1].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>')}` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <View style={[styles.opcoes, ("A" == questoes[1].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[1].gabarito.trim()) && ("A" == q1) ? styles.errou : null]}>
                  <Text style={("A" == questoes[1].gabarito.trim()) || ("A" == q1) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[1].alternativas.includes('<img') ? questoes[1].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("B" == questoes[1].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[1].gabarito.trim()) && ("B" == q1) ? styles.errou : null]}>
                  <Text style={("B" == questoes[1].gabarito.trim()) || ("B" == q1) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[1].alternativas.includes('<img') ? '<' + questoes[1].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("C" == questoes[1].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[1].gabarito.trim()) && ("C" == q1) ? styles.errou : null]}>
                  <Text style={("C" == questoes[1].gabarito.trim()) || ("C" == q1) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[1].alternativas.includes('<img') ? '<' + questoes[1].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("D" == questoes[1].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[1].gabarito.trim()) && ("D" == q1) ? styles.errou : null]}>
                  <Text style={("D" == questoes[1].gabarito.trim()) || ("D" == q1) ? styles.branco : null}>
                    {questoes[1].alternativas.trim().split('><')[4] != undefined ? (
                      <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[1].alternativas.includes('<img') ? '<' + questoes[1].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                      : (
                        <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[1].alternativas.includes('<img') ? '<' + questoes[1].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                    }
                  </Text>
                </View>
                {questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[1].alternativas.trim().split('><')[4] != undefined ? (
                  <View style={[styles.opcoes, ("E" == questoes[1].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[1].gabarito.trim()) && ("E" == q1) ? styles.errou : null]}>
                    <Text style={("E" == questoes[1].gabarito.trim()) || ("E" == q1) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[1].alternativas.includes('<img') ? '<' + questoes[1].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                  </View>
                ) : (null)}
                {null == q1 ?
                  <View style={[styles.opcoes, styles.errou]}>
                    <Text style={styles.branco}> Não respondeu</Text>
                  </View> : null
                }
              </View>
            </View>) : (null)
          }
          {questoes[2] != null ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginLeft: '15%' }} />
              <View>
                <Text style={{ width: 20, textAlign: 'center', color: '#308B9D', fontSize: 24 }}>3</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginRight: '15%' }} />
            </View>) : (null)
          }
          {questoes[2] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[2].enunciado.includes('<img') ? questoes[2].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=') : questoes[2].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>')}` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <View style={[styles.opcoes, ("A" == questoes[2].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[2].gabarito.trim()) && ("A" == q2) ? styles.errou : null]}>
                  <Text style={("A" == questoes[2].gabarito.trim()) || ("A" == q2) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[2].alternativas.includes('<img') ? questoes[2].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("B" == questoes[2].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[2].gabarito.trim()) && ("B" == q2) ? styles.errou : null]}>
                  <Text style={("B" == questoes[2].gabarito.trim()) || ("B" == q2) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[2].alternativas.includes('<img') ? '<' + questoes[2].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("C" == questoes[2].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[2].gabarito.trim()) && ("C" == q2) ? styles.errou : null]}>
                  <Text style={("C" == questoes[2].gabarito.trim()) || ("C" == q2) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[2].alternativas.includes('<img') ? '<' + questoes[2].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("D" == questoes[2].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[2].gabarito.trim()) && ("D" == q2) ? styles.errou : null]}>
                  <Text style={("D" == questoes[2].gabarito.trim()) || ("D" == q2) ? styles.branco : null}>
                    {questoes[2].alternativas.trim().split('><')[4] != undefined ? (
                      <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[2].alternativas.includes('<img') ? '<' + questoes[2].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                      : (
                        <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[2].alternativas.includes('<img') ? '<' + questoes[2].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                    }
                  </Text>
                </View>
                {questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[2].alternativas.trim().split('><')[4] != undefined ? (
                  <View style={[styles.opcoes, ("E" == questoes[2].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[2].gabarito.trim()) && ("E" == q2) ? styles.errou : null]}>
                    <Text style={("E" == questoes[2].gabarito.trim()) || ("E" == q2) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[2].alternativas.includes('<img') ? '<' + questoes[2].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                  </View>
                ) : (null)}
                {null == q2 ?
                  <View style={[styles.opcoes, styles.errou]}>
                    <Text style={styles.branco}> Não respondeu</Text>
                  </View> : null
                }
              </View>
            </View>) : (null)
          }
          {questoes[3] != null ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginLeft: '15%' }} />
              <View>
                <Text style={{ width: 20, textAlign: 'center', color: '#308B9D', fontSize: 24 }}>4</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginRight: '15%' }} />
            </View>) : (null)
          }
          {questoes[3] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[3].enunciado.includes('<img') ? questoes[3].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=') : questoes[3].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>')}` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <View style={[styles.opcoes, ("A" == questoes[3].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[3].gabarito.trim()) && ("A" == q3) ? styles.errou : null]}>
                  <Text style={("A" == questoes[3].gabarito.trim()) || ("A" == q3) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[3].alternativas.includes('<img') ? questoes[3].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("B" == questoes[3].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[3].gabarito.trim()) && ("B" == q3) ? styles.errou : null]}>
                  <Text style={("B" == questoes[3].gabarito.trim()) || ("B" == q3) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[3].alternativas.includes('<img') ? '<' + questoes[3].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("C" == questoes[3].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[3].gabarito.trim()) && ("C" == q3) ? styles.errou : null]}>
                  <Text style={("C" == questoes[3].gabarito.trim()) || ("C" == q3) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[3].alternativas.includes('<img') ? '<' + questoes[3].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("D" == questoes[3].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[3].gabarito.trim()) && ("D" == q3) ? styles.errou : null]}>
                  <Text style={("D" == questoes[3].gabarito.trim()) || ("D" == q3) ? styles.branco : null}>
                    {questoes[3].alternativas.trim().split('><')[4] != undefined ? (
                      <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[3].alternativas.includes('<img') ? '<' + questoes[3].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                      : (
                        <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[3].alternativas.includes('<img') ? '<' + questoes[3].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                    }
                  </Text>
                </View>
                {questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[3].alternativas.trim().split('><')[4] != undefined ? (
                  <View style={[styles.opcoes, ("E" == questoes[3].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[3].gabarito.trim()) && ("E" == q3) ? styles.errou : null]}>
                    <Text style={("E" == questoes[3].gabarito.trim()) || ("E" == q3) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[3].alternativas.includes('<img') ? '<' + questoes[3].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                  </View>
                ) : (null)}
                {null == q3 ?
                  <View style={[styles.opcoes, styles.errou]}>
                    <Text style={styles.branco}> Não respondeu</Text>
                  </View> : null
                }
              </View>
            </View>) : (null)
          }
          {questoes[4] != null ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginLeft: '15%' }} />
              <View>
                <Text style={{ width: 20, textAlign: 'center', color: '#308B9D', fontSize: 24 }}>5</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginRight: '15%' }} />
            </View>) : (null)
          }
          {questoes[4] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[4].enunciado.includes('<img') ? questoes[4].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=') : questoes[4].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>')}` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <View style={[styles.opcoes, ("A" == questoes[4].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[4].gabarito.trim()) && ("A" == q4) ? styles.errou : null]}>
                  <Text style={("A" == questoes[4].gabarito.trim()) || ("A" == q4) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[4].alternativas.includes('<img') ? questoes[4].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("B" == questoes[4].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[4].gabarito.trim()) && ("B" == q4) ? styles.errou : null]}>
                  <Text style={("B" == questoes[4].gabarito.trim()) || ("B" == q4) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[4].alternativas.includes('<img') ? '<' + questoes[4].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("C" == questoes[4].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[4].gabarito.trim()) && ("C" == q4) ? styles.errou : null]}>
                  <Text style={("C" == questoes[4].gabarito.trim()) || ("C" == q4) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[4].alternativas.includes('<img') ? '<' + questoes[4].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("D" == questoes[4].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[4].gabarito.trim()) && ("D" == q4) ? styles.errou : null]}>
                  <Text style={("D" == questoes[4].gabarito.trim()) || ("D" == q4) ? styles.branco : null}>
                    {questoes[4].alternativas.trim().split('><')[4] != undefined ? (
                      <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[4].alternativas.includes('<img') ? '<' + questoes[4].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                      : (
                        <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[4].alternativas.includes('<img') ? '<' + questoes[4].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                    }
                  </Text>
                </View>
                {questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[4].alternativas.trim().split('><')[4] != undefined ? (
                  <View style={[styles.opcoes, ("E" == questoes[4].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[4].gabarito.trim()) && ("E" == q4) ? styles.errou : null]}>
                    <Text style={("E" == questoes[4].gabarito.trim()) || ("E" == q4) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[4].alternativas.includes('<img') ? '<' + questoes[4].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                  </View>
                ) : (null)}
                {null == q4 ?
                  <View style={[styles.opcoes, styles.errou]}>
                    <Text style={styles.branco}> Não respondeu</Text>
                  </View> : null
                }
              </View>
            </View>) : (null)
          }
          {questoes[5] != null ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginLeft: 25 }} />
              <View>
                <Text style={{ width: 20, textAlign: 'center', color: '#308B9D', fontSize: 24 }}>6</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginRight: 25 }} />
            </View>) : (null)
          }
          {questoes[5] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[5].enunciado.includes('<img') ? questoes[5].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=') : questoes[5].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>')}` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <View style={[styles.opcoes, ("A" == questoes[5].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[5].gabarito.trim()) && ("A" == q5) ? styles.errou : null]}>
                  <Text style={("A" == questoes[5].gabarito.trim()) || ("A" == q5) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[5].alternativas.includes('<img') ? questoes[5].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("B" == questoes[5].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[5].gabarito.trim()) && ("B" == q5) ? styles.errou : null]}>
                  <Text style={("B" == questoes[5].gabarito.trim()) || ("B" == q5) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[5].alternativas.includes('<img') ? '<' + questoes[5].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("C" == questoes[5].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[5].gabarito.trim()) && ("C" == q5) ? styles.errou : null]}>
                  <Text style={("C" == questoes[5].gabarito.trim()) || ("C" == q5) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[5].alternativas.includes('<img') ? '<' + questoes[5].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("D" == questoes[5].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[5].gabarito.trim()) && ("D" == q5) ? styles.errou : null]}>
                  <Text style={("D" == questoes[5].gabarito.trim()) || ("D" == q5) ? styles.branco : null}>
                    {questoes[5].alternativas.trim().split('><')[4] != undefined ? (
                      <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[5].alternativas.includes('<img') ? '<' + questoes[5].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                      : (
                        <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[5].alternativas.includes('<img') ? '<' + questoes[5].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                    }
                  </Text>
                </View>
                {questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[5].alternativas.trim().split('><')[4] != undefined ? (
                  <View style={[styles.opcoes, ("E" == questoes[5].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[5].gabarito.trim()) && ("E" == q5) ? styles.errou : null]}>
                    <Text style={("E" == questoes[5].gabarito.trim()) || ("E" == q5) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[5].alternativas.includes('<img') ? '<' + questoes[5].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                  </View>
                ) : (null)}
                {null == q5 ?
                  <View style={[styles.opcoes, styles.errou]}>
                    <Text style={styles.branco}> Não respondeu</Text>
                  </View> : null
                }
              </View>
            </View>) : (null)
          }
          {questoes[6] != null ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginLeft: '15%' }} />
              <View>
                <Text style={{ width: 20, textAlign: 'center', color: '#308B9D', fontSize: 24 }}>7</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginRight: '15%' }} />
            </View>) : (null)
          }
          {questoes[6] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[6].enunciado.includes('<img') ? questoes[6].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=') : questoes[6].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>')}` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <View style={[styles.opcoes, ("A" == questoes[6].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[6].gabarito.trim()) && ("A" == q6) ? styles.errou : null]}>
                  <Text style={("A" == questoes[6].gabarito.trim()) || ("A" == q6) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[6].alternativas.includes('<img') ? questoes[6].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("B" == questoes[6].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[6].gabarito.trim()) && ("B" == q6) ? styles.errou : null]}>
                  <Text style={("B" == questoes[6].gabarito.trim()) || ("B" == q6) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[6].alternativas.includes('<img') ? '<' + questoes[6].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("C" == questoes[6].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[6].gabarito.trim()) && ("C" == q6) ? styles.errou : null]}>
                  <Text style={("C" == questoes[6].gabarito.trim()) || ("C" == q6) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[6].alternativas.includes('<img') ? '<' + questoes[6].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("D" == questoes[6].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[6].gabarito.trim()) && ("D" == q6) ? styles.errou : null]}>
                  <Text style={("D" == questoes[6].gabarito.trim()) || ("D" == q6) ? styles.branco : null}>
                    {questoes[6].alternativas.trim().split('><')[4] != undefined ? (
                      <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[6].alternativas.includes('<img') ? '<' + questoes[6].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                      : (
                        <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[6].alternativas.includes('<img') ? '<' + questoes[6].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                    }
                  </Text>
                </View>
                {questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[6].alternativas.trim().split('><')[4] != undefined ? (
                  <View style={[styles.opcoes, ("E" == questoes[6].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[6].gabarito.trim()) && ("E" == q6) ? styles.errou : null]}>
                    <Text style={("E" == questoes[6].gabarito.trim()) || ("E" == q6) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[6].alternativas.includes('<img') ? '<' + questoes[6].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                  </View>
                ) : (null)}
                {null == q6 ?
                  <View style={[styles.opcoes, styles.errou]}>
                    <Text style={styles.branco}> Não respondeu</Text>
                  </View> : null
                }
              </View>
            </View>) : (null)
          }
          {questoes[7] != null ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginLeft: '15%' }} />
              <View>
                <Text style={{ width: 20, textAlign: 'center', color: '#308B9D', fontSize: 24 }}>8</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginRight: '15%' }} />
            </View>) : (null)
          }
          {questoes[7] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[7].enunciado.includes('<img') ? questoes[7].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=') : questoes[7].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>')}` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <View style={[styles.opcoes, ("A" == questoes[7].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[7].gabarito.trim()) && ("A" == q7) ? styles.errou : null]}>
                  <Text style={("A" == questoes[7].gabarito.trim()) || ("A" == q7) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[7].alternativas.includes('<img') ? questoes[7].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("B" == questoes[7].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[7].gabarito.trim()) && ("B" == q7) ? styles.errou : null]}>
                  <Text style={("B" == questoes[7].gabarito.trim()) || ("B" == q7) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[7].alternativas.includes('<img') ? '<' + questoes[7].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("C" == questoes[7].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[7].gabarito.trim()) && ("C" == q7) ? styles.errou : null]}>
                  <Text style={("C" == questoes[7].gabarito.trim()) || ("C" == q7) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[7].alternativas.includes('<img') ? '<' + questoes[7].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("D" == questoes[7].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[7].gabarito.trim()) && ("D" == q7) ? styles.errou : null]}>
                  <Text style={("D" == questoes[7].gabarito.trim()) || ("D" == q7) ? styles.branco : null}>
                    {questoes[7].alternativas.trim().split('><')[4] != undefined ? (
                      <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[7].alternativas.includes('<img') ? '<' + questoes[7].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                      : (
                        <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[7].alternativas.includes('<img') ? '<' + questoes[7].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                    }
                  </Text>
                </View>
                {questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[7].alternativas.trim().split('><')[4] != undefined ? (
                  <View style={[styles.opcoes, ("E" == questoes[7].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[7].gabarito.trim()) && ("E" == q7) ? styles.errou : null]}>
                    <Text style={("E" == questoes[7].gabarito.trim()) || ("E" == q7) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[7].alternativas.includes('<img') ? '<' + questoes[7].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                  </View>
                ) : (null)}
                {null == q7 ?
                  <View style={[styles.opcoes, styles.errou]}>
                    <Text style={styles.branco}> Não respondeu</Text>
                  </View> : null
                }
              </View>
            </View>) : (null)
          }
          {questoes[8] != null ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginLeft: '15%' }} />
              <View>
                <Text style={{ width: 20, textAlign: 'center', color: '#308B9D', fontSize: 24 }}>9</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginRight: '15%' }} />
            </View>) : (null)
          }
          {questoes[8] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[8].enunciado.includes('<img') ? questoes[8].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=') : questoes[8].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>')}` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <View style={[styles.opcoes, ("A" == questoes[8].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[8].gabarito.trim()) && ("A" == q8) ? styles.errou : null]}>
                  <Text style={("A" == questoes[8].gabarito.trim()) || ("A" == q8) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[8].alternativas.includes('<img') ? questoes[8].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("B" == questoes[8].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[8].gabarito.trim()) && ("B" == q8) ? styles.errou : null]}>
                  <Text style={("B" == questoes[8].gabarito.trim()) || ("B" == q8) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[8].alternativas.includes('<img') ? '<' + questoes[8].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("C" == questoes[8].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[8].gabarito.trim()) && ("C" == q8) ? styles.errou : null]}>
                  <Text style={("C" == questoes[8].gabarito.trim()) || ("C" == q8) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[8].alternativas.includes('<img') ? '<' + questoes[8].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("D" == questoes[8].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[8].gabarito.trim()) && ("D" == q8) ? styles.errou : null]}>
                  <Text style={("D" == questoes[8].gabarito.trim()) || ("D" == q8) ? styles.branco : null}>
                    {questoes[8].alternativas.trim().split('><')[4] != undefined ? (
                      <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[8].alternativas.includes('<img') ? '<' + questoes[8].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                      : (
                        <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[8].alternativas.includes('<img') ? '<' + questoes[8].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                    }
                  </Text>
                </View>
                {questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[8].alternativas.trim().split('><')[4] != undefined ? (
                  <View style={[styles.opcoes, ("E" == questoes[8].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[8].gabarito.trim()) && ("E" == q8) ? styles.errou : null]}>
                    <Text style={("E" == questoes[8].gabarito.trim()) || ("E" == q8) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[8].alternativas.includes('<img') ? '<' + questoes[8].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                  </View>
                ) : (null)}
                {null == q9 ?
                  <View style={[styles.opcoes, styles.errou]}>
                    <Text style={styles.branco}> Não respondeu</Text>
                  </View> : null
                }
              </View>
            </View>) : (null)
          }
          {questoes[9] != null ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginLeft: '15%' }} />
              <View>
                <Text style={{ width: 20, textAlign: 'center', color: '#308B9D', fontSize: 24 }}>10</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginRight: '15%' }} />
            </View>) : (null)
          }
          {questoes[9] != null ? (
            <View style={styles.questao}>
              <View style={styles.caixaEnunciado}>
                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[9].enunciado.includes('<img') ? questoes[9].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=') : questoes[9].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>')}` }} /></Text>
              </View>
              <View style={styles.grupo}>
                <View style={[styles.opcoes, ("A" == questoes[9].gabarito.trim()) ? styles.opcaoCerta : null, ("A" != questoes[9].gabarito.trim()) && ("A" == q9) ? styles.errou : null]}>
                  <Text style={("A" == questoes[9].gabarito.trim()) || ("A" == q9) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[9].alternativas.includes('<img') ? questoes[9].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("B" == questoes[9].gabarito.trim()) ? styles.opcaoCerta : null, ("B" != questoes[9].gabarito.trim()) && ("B" == q9) ? styles.errou : null]}>
                  <Text style={("B" == questoes[9].gabarito.trim()) || ("B" == q9) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[9].alternativas.includes('<img') ? '<' + questoes[9].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("C" == questoes[9].gabarito.trim()) ? styles.opcaoCerta : null, ("C" != questoes[9].gabarito.trim()) && ("C" == q9) ? styles.errou : null]}>
                  <Text style={("C" == questoes[9].gabarito.trim()) || ("C" == q9) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[9].alternativas.includes('<img') ? '<' + questoes[9].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                </View>
                <View style={[styles.opcoes, ("D" == questoes[9].gabarito.trim()) ? styles.opcaoCerta : null, ("D" != questoes[9].gabarito.trim()) && ("D" == q9) ? styles.errou : null]}>
                  <Text style={("D" == questoes[9].gabarito.trim()) || ("D" == q9) ? styles.branco : null}>
                    {questoes[9].alternativas.trim().split('><')[4] != undefined ? (
                      <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[9].alternativas.includes('<img') ? '<' + questoes[9].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                      : (
                        <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[9].alternativas.includes('<img') ? '<' + questoes[9].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                    }
                  </Text>
                </View>
                {questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[9].alternativas.trim().split('><')[4] != undefined ? (
                  <View style={[styles.opcoes, ("E" == questoes[9].gabarito.trim()) ? styles.opcaoCerta : null, ("E" != questoes[9].gabarito.trim()) && ("E" == q9) ? styles.errou : null]}>
                    <Text style={("E" == questoes[9].gabarito.trim()) || ("E" == q9) ? styles.branco : null}><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[9].alternativas.includes('<img') ? '<' + questoes[9].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                  </View>
                ) : (null)}
                {null == q9 ?
                  <View style={[styles.opcoes, styles.errou]}>
                    <Text style={styles.branco}> Não respondeu</Text>
                  </View> : null
                }
              </View>
            </View>) : (null)
          }

        </View>
      </ScrollView>


      <View style={styles.comandos}>
        <TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleResultado}>
          <Feather name="check-circle" size={24} color="#308b9d" />
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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cabecalho: {
    paddingBottom: 15,
    backgroundColor: '#f2f2f2',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nome: {
    color: '#308b9d',
    fontSize: 24,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 11,
    width: 120,
  },
  questoes: {
    flexDirection: "column",
    backgroundColor: '#FFFFFF',
    marginBottom: 120,
    height: 'auto',
  },
  questao: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  caixaEnunciado: {
    backgroundColor: '#FFFFFF',
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
  linha: {
    borderBottomColor: '#308b9d',
    borderBottomWidth: 3,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 20,
    borderStyle: 'dashed'
  },
  timer: {
    backgroundColor: '#f2f2f2',
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
    backgroundColor: '#f2f2f2',
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
    padding: 5,
    backgroundColor: '#f2f2f2',
    justifyConten: 'center',
    alignItems: 'center',
    marginTop: 5,
    width: 300
  },
  grupo: {
    maxWidth: '90%',
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