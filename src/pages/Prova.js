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
                        colors={["#308b9d", "#309c9c", "#309c81", "#309c66", "#309c4b", "#309c30", "#4b9c30", "#669c30", "#819c30", "#9c9c30", "#9c8130", "#9c6630", "#9c4b30", "#9c3030"]}
                        colorsTime={tempo == 1 ? [3000, 2769, 2538, 2308, 2080, 1846, 1615, 1385, 1154, 923, 692, 461, 231, 0] : [1800, 1661, 1523, 1385, 1246, 1108, 969, 831, 692, 554, 415, 277, 138, 0]}
                        children={({ remainingTime, color }) => {
                            const hours = Math.floor(remainingTime / 3600)
                            const minutes = Math.floor((remainingTime % 3600) / 60)
                            const seconds = remainingTime % 60

                            return <Text style={{ color, fontSize: 15 }}>{hours < 10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</Text>
                        }}
                        onComplete={() => navigation.navigate('Resultado', { nomeModo: nomeModo, q0: q0, q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, q6: q6, q7: q7, q8: q8, q9: q9, questoes: questoes })}
                    />
                </View>
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
                                <RadioButton.Group onValueChange={novaresposta => setQ0(novaresposta)} value={q0} >
                                    <View style={styles.opcoes}>
                                        <RadioButton value='A' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[0].alternativas.includes('<img') ? questoes[0].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='B' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[0].alternativas.includes('<img') ? '<' + questoes[0].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='C' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[0].alternativas.includes('<img') ? '<' + questoes[0].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='D' />
                                        <Text>
                                            {questoes[0].alternativas.trim().split('><')[4] != undefined ? (
                                                <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[0].alternativas.includes('<img') ? '<' + questoes[0].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                                : (
                                                    <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[0].alternativas.includes('<img') ? '<' + questoes[0].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                            }
                                        </Text>
                                    </View>
                                    {questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[0].alternativas.trim().split('><')[4] != undefined ? (
                                        <View style={styles.opcoes}>
                                            <RadioButton value='E' />
                                            <Text><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[0].alternativas.includes('<img') ? '<' + questoes[0].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[0].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                                        </View>
                                    ) : (null)}
                                </RadioButton.Group>
                            </View>
                        </View>
                    ) : (null)
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
                                <RadioButton.Group onValueChange={novaresposta => setQ1(novaresposta)} value={q1} >
                                    <View style={styles.opcoes}>
                                        <RadioButton value='A' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[1].alternativas.includes('<img') ? questoes[1].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='B' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[1].alternativas.includes('<img') ? '<' + questoes[1].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='C' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[1].alternativas.includes('<img') ? '<' + questoes[1].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='D' />
                                        <Text>
                                            {questoes[1].alternativas.trim().split('><')[4] != undefined ? (
                                                <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[1].alternativas.includes('<img') ? '<' + questoes[1].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                                : (
                                                    <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[1].alternativas.includes('<img') ? '<' + questoes[1].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                            }
                                        </Text>
                                    </View>
                                    {questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[1].alternativas.trim().split('><')[4] != undefined ? (
                                        <View style={styles.opcoes}>
                                            <RadioButton value='E' />
                                            <Text><RenderHtml contentWidth={width} source={{ html: `${questoes[1].alternativas.includes('<img') ? '<' + questoes[1].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[1].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                                        </View>
                                    ) : (null)}
                                </RadioButton.Group>
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
                                <RadioButton.Group onValueChange={novaresposta => setQ2(novaresposta)} value={q2} >
                                    <View style={styles.opcoes}>
                                        <RadioButton value='A' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[2].alternativas.includes('<img') ? questoes[2].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='B' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[2].alternativas.includes('<img') ? '<' + questoes[2].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='C' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[2].alternativas.includes('<img') ? '<' + questoes[2].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='D' />
                                        <Text>
                                            {questoes[2].alternativas.trim().split('><')[4] != undefined ? (
                                                <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[2].alternativas.includes('<img') ? '<' + questoes[2].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                                : (
                                                    <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[2].alternativas.includes('<img') ? '<' + questoes[2].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                            }
                                        </Text>
                                    </View>
                                    {questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[2].alternativas.trim().split('><')[4] != undefined ? (
                                        <View style={styles.opcoes}>
                                            <RadioButton value='E' />
                                            <Text><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[2].alternativas.includes('<img') ? '<' + questoes[2].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[2].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                                        </View>
                                    ) : (null)}
                                </RadioButton.Group>
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
                                <RadioButton.Group onValueChange={novaresposta => setQ3(novaresposta)} value={q3} >
                                    <View style={styles.opcoes}>
                                        <RadioButton value='A' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[3].alternativas.includes('<img') ? questoes[3].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='B' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[3].alternativas.includes('<img') ? '<' + questoes[3].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='C' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[3].alternativas.includes('<img') ? '<' + questoes[3].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='D' />
                                        <Text>
                                            {questoes[3].alternativas.trim().split('><')[4] != undefined ? (
                                                <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[3].alternativas.includes('<img') ? '<' + questoes[3].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                                : (
                                                    <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[3].alternativas.includes('<img') ? '<' + questoes[3].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                            }
                                        </Text>
                                    </View>
                                    {questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[3].alternativas.trim().split('><')[4] != undefined ? (
                                        <View style={styles.opcoes}>
                                            <RadioButton value='E' />
                                            <Text><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[3].alternativas.includes('<img') ? '<' + questoes[3].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[3].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                                        </View>
                                    ) : (null)}
                                </RadioButton.Group>
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
                                <RadioButton.Group onValueChange={novaresposta => setQ4(novaresposta)} value={q4} >
                                    <View style={styles.opcoes}>
                                        <RadioButton value='A' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[4].alternativas.includes('<img') ? questoes[4].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='B' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[4].alternativas.includes('<img') ? '<' + questoes[4].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='C' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[4].alternativas.includes('<img') ? '<' + questoes[4].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='D' />
                                        <Text>
                                            {questoes[4].alternativas.trim().split('><')[4] != undefined ? (
                                                <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[4].alternativas.includes('<img') ? '<' + questoes[4].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                                : (
                                                    <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[4].alternativas.includes('<img') ? '<' + questoes[4].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                            }
                                        </Text>
                                    </View>
                                    {questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[4].alternativas.trim().split('><')[4] != undefined ? (
                                        <View style={styles.opcoes}>
                                            <RadioButton value='E' />
                                            <Text><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[4].alternativas.includes('<img') ? '<' + questoes[4].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[4].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                                        </View>
                                    ) : (null)}
                                </RadioButton.Group>
                            </View>

                        </View>) : (null)
                    }
                    {questoes[5] != null ? (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginLeft: '15%' }} />
                            <View>
                                <Text style={{ width: 20, textAlign: 'center', color: '#308B9D', fontSize: 24 }}>6</Text>
                            </View>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#308B9D', marginRight: '15%' }} />
                        </View>) : (null)
                    }
                    {questoes[5] != null ? (
                        <View style={styles.questao}>
                            <View style={styles.caixaEnunciado}>
                                <Text style={styles.enunciado}><RenderHtml contentWidth={width} source={{ html: `${questoes[5].enunciado.includes('<img') ? questoes[5].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=') : questoes[5].enunciado.trim().replaceAll(/[\r\n]+/gm, '<br>')}` }} /></Text>
                            </View>
                            <View style={styles.grupo}>
                                <RadioButton.Group onValueChange={novaresposta => setQ5(novaresposta)} value={q5} >
                                    <View style={styles.opcoes}>
                                        <RadioButton value='A' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[5].alternativas.includes('<img') ? questoes[5].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='B' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[5].alternativas.includes('<img') ? '<' + questoes[5].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='C' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[5].alternativas.includes('<img') ? '<' + questoes[5].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='D' />
                                        <Text>
                                            {questoes[5].alternativas.trim().split('><')[4] != undefined ? (
                                                <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[5].alternativas.includes('<img') ? '<' + questoes[5].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                                : (
                                                    <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[5].alternativas.includes('<img') ? '<' + questoes[5].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                            }
                                        </Text>
                                    </View>
                                    {questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[5].alternativas.trim().split('><')[4] != undefined ? (
                                        <View style={styles.opcoes}>
                                            <RadioButton value='E' />
                                            <Text><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[5].alternativas.includes('<img') ? '<' + questoes[5].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[5].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                                        </View>
                                    ) : (null)}
                                </RadioButton.Group>
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
                                <RadioButton.Group onValueChange={novaresposta => setQ6(novaresposta)} value={q6} >
                                    <View style={styles.opcoes}>
                                        <RadioButton value='A' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[6].alternativas.includes('<img') ? questoes[6].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='B' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[6].alternativas.includes('<img') ? '<' + questoes[6].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='C' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[6].alternativas.includes('<img') ? '<' + questoes[6].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='D' />
                                        <Text>
                                            {questoes[6].alternativas.trim().split('><')[4] != undefined ? (
                                                <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[6].alternativas.includes('<img') ? '<' + questoes[6].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                                : (
                                                    <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[6].alternativas.includes('<img') ? '<' + questoes[6].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                            }
                                        </Text>
                                    </View>
                                    {questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[6].alternativas.trim().split('><')[4] != undefined ? (
                                        <View style={styles.opcoes}>
                                            <RadioButton value='E' />
                                            <Text><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[6].alternativas.includes('<img') ? '<' + questoes[6].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[6].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                                        </View>
                                    ) : (null)}
                                </RadioButton.Group>
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
                                <RadioButton.Group onValueChange={novaresposta => setQ7(novaresposta)} value={q7} >
                                    <View style={styles.opcoes}>
                                        <RadioButton value='A' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[7].alternativas.includes('<img') ? questoes[7].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='B' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[7].alternativas.includes('<img') ? '<' + questoes[7].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='C' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[7].alternativas.includes('<img') ? '<' + questoes[7].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='D' />
                                        <Text>
                                            {questoes[7].alternativas.trim().split('><')[4] != undefined ? (
                                                <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[7].alternativas.includes('<img') ? '<' + questoes[7].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                                : (
                                                    <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[7].alternativas.includes('<img') ? '<' + questoes[7].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                            }
                                        </Text>
                                    </View>
                                    {questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[7].alternativas.trim().split('><')[4] != undefined ? (
                                        <View style={styles.opcoes}>
                                            <RadioButton value='E' />
                                            <Text><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[7].alternativas.includes('<img') ? '<' + questoes[7].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[7].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                                        </View>
                                    ) : (null)}
                                </RadioButton.Group>
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
                                <RadioButton.Group onValueChange={novaresposta => setQ8(novaresposta)} value={q8} >
                                    <View style={styles.opcoes}>
                                        <RadioButton value='A' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[8].alternativas.includes('<img') ? questoes[8].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='B' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[8].alternativas.includes('<img') ? '<' + questoes[8].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='C' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[8].alternativas.includes('<img') ? '<' + questoes[8].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='D' />
                                        <Text>
                                            {questoes[8].alternativas.trim().split('><')[4] != undefined ? (
                                                <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[8].alternativas.includes('<img') ? '<' + questoes[8].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                                : (
                                                    <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[8].alternativas.includes('<img') ? '<' + questoes[8].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                            }
                                        </Text>
                                    </View>
                                    {questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[8].alternativas.trim().split('><')[4] != undefined ? (
                                        <View style={styles.opcoes}>
                                            <RadioButton value='E' />
                                            <Text><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[8].alternativas.includes('<img') ? '<' + questoes[8].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[8].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                                        </View>
                                    ) : (null)}
                                </RadioButton.Group>
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
                                <RadioButton.Group onValueChange={novaresposta => setQ9(novaresposta)} value={q9} >
                                    <View style={styles.opcoes}>
                                        <RadioButton value='A' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `A) ${questoes[9].alternativas.includes('<img') ? questoes[9].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[0] + '>' : questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[1]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='B' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `B) ${questoes[9].alternativas.includes('<img') ? '<' + questoes[9].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[1] + '>' : questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[3]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='C' />
                                        <Text><RenderHtml contentWidth={width} source={{ html: `C) ${questoes[9].alternativas.includes('<img') ? '<' + questoes[9].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[2] + '>' : questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[5]}` }} /></Text>
                                    </View>
                                    <View style={styles.opcoes}>
                                        <RadioButton value='D' />
                                        <Text>
                                            {questoes[9].alternativas.trim().split('><')[4] != undefined ? (
                                                <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[9].alternativas.includes('<img') ? '<' + questoes[9].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] + '>' : questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                                : (
                                                    <RenderHtml contentWidth={width} source={{ html: `D) ${questoes[9].alternativas.includes('<img') ? '<' + questoes[9].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[3] : questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[7]}` }} />)
                                            }
                                        </Text>
                                    </View>
                                    {questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9] != undefined || questoes[9].alternativas.trim().split('><')[4] != undefined ? (
                                        <View style={styles.opcoes}>
                                            <RadioButton value='E' />
                                            <Text><RenderHtml contentWidth={width} source={{ html: `E) ${questoes[9].alternativas.includes('<img') ? '<' + questoes[9].alternativas.trim().replaceAll('data-src=', 'src=').replaceAll('src=', 'style="max-width: 90%" src=').split('><')[4] : questoes[9].alternativas.trim().replaceAll(/[\r\n]+/gm, '<br>').replaceAll('</li>', '<li>').split('<li>')[9]}` }} /></Text>
                                        </View>
                                    ) : (null)}
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
                    <Feather name="check-circle" size={24} color="#308B9D" />
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
        width: 100,
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
        padding: 3,
        backgroundColor: '#f2f2f2',
        justifyConten: 'center',
        alignItems: 'center',
        marginTop: 5,
        width: 300
    },
    grupo: {
        maxWidth: '90%',
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