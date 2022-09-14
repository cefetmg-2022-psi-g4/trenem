import * as React from 'react';
import Estudante from '../models/Estudante';
import {apiEstudante} from '../services/api';
import { setToken } from './AuthController';

export async function criarConta(nome, email, senha){
    await apiEstudante.post('conta/criarConta', {
        nome: nome,
        email: email,
        senha: senha
    }).then(function (response) {
        console.log(response);
        setToken(response);
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
        console.log(response);
        setToken(response);
    })
    .catch(function (error) {
        console.error(error);
    });
}

export function definirEstudante(cod, nome, email, percentualDeAcertos, tempoMedio, foto){
    
}