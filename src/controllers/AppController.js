import * as React from 'react';
import Estudante from '../models/Estudante';
import api from '../services/api';

export async function criarConta(nome, email, senha){
    await api.post('conta/criarConta', {
        nome: nome,
        email: email,
        senha: senha
    }).then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.error(error);
    });

    navigation.navigate('Principal');
}

export function definirEstudante(cod, nome, email, percentualDeAcertos, tempoMedio, foto){
    
}