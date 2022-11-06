import {apiEstudante, apiQuestoes} from '../services/api';
import { setToken, getToken } from './AuthController';

export async function criarConta(nome, email, senha){
    await apiEstudante.post('conta/criarConta', {
        nome: nome,
        email: email,
        senha: senha
    }).then(function (response) {
        setToken(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });   
}

export async function acessarConta(email, senha){
    await apiEstudante.post('conta/acessarConta', {
        email: email,
        senha: senha
    }).then(function (response) {
        setToken(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
}

export function loadModoJogo(id){
    let modos = [
        {
            "nome": "Provão",
            "descricao" : "Prova de 10 questões aleatórias, sendo 3 de matemática, 2 de linguagens e 1 das outras matérias.",
            "tempo" : [{label: "Normal", value: 1},{label: "Corrida Contra o Tempo", value:2}],
        },
        {
            "nome": "Matérias",
            "descricao" : "Modo de jogo onde você (o jogador) escolhe qual matéria deseja fazer as questões, quantas questões e em quanto tempo.",
            "tempo" : [{label: "Normal", value: 1},{label: "Corrida Contra o Tempo", value:2}],
            "opcoes" : [{label: "Matemática", value: "matematica"},{label: "Linguagens", value: "linguagens"},{label: "História", value: "historia"},{label: "Geografia, Sociologia e Filosofia", value: "geografia-sociologia-e-filosofia"}, {label: "Biologia", value: "biologia"}, {label: "Quimica", value: "quimica"}, {label: "Física",value:"fisica"}],
        },
        {
            "nome": "Versus",
            "descricao": "Em contrução!"
        }
    ]

    return modos[id];
}

export async function criarProva(tipo, opts){
    const token = await getToken();

    let res = null;
    await apiEstudante.post('getCod', { }, {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
    }).then(async function (response) {
        if(tipo == 0){
            await apiQuestoes.post('questoes/provao', {
                cod: response.data,
            }).then(function(response){
                res = response;
            }).catch(function(error){
                console.error(error);
            });
        } else if(tipo == 1){
            console.log(1);
            await apiQuestoes.post('questoes/materias', {
                cod: response.data,
                qtd: opts['qtd'],
                materia: opts['materia'],
            }).then(function(response){
                res = response;
            }).catch(function(error){
                console.error(error);
            });
        }
    })
    .catch(function (error) {
        console.error(error);
    });

    return res;
}


export async function finalizarProva(questoes, alternativas){
    const token = await getToken();

    let res = null;
    await apiEstudante.post('processarProva', { 
        questoes: questoes,
        alternativas: alternativas,
    }, {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
    }).then(async function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.error(error);
    });

    return res;
}