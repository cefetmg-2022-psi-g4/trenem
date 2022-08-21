import React, {Component} from 'react';
import { Text } from 'react-native';

class Estudante extends Component {
    constructor(cod, nome, email, percentualDeAcertos, tempoMedio, foto){
        super();
        this.setState({
            cod: cod,
            nome: nome,
            email: email,
            percentualDeAcertos: percentualDeAcertos,
            tempoMedio: tempoMedio,
            foto: foto
        });
    }

    set setNome(nome){
        this.setState({
            nome: nome
        });
    }
    set setEmail(email){
        this.setState({
            email: email
        });
    }
    set setPercentualDeAcertos(percentualDeAcertos){
        this.setState({
            percentualDeAcertos: percentualDeAcertos
        });
    }
    set setTempoMedio(tempoMedio){
        this.setState({
            tempoMedio: tempoMedio
        });
    }
    set setFoto(foto){
        this.setState({
            foto: foto
        });
    }

    get getNome(){
        return this.state.nome;
    }
    get getEmail(){
        return this.state.email;
    }
    get getPercentualDeAcertos(){
        return this.state.percentualDeAcertos;
    }
    get getTempoMedio(){
        return this.state.tempoMedio;
    }
    get getFoto(){
        return this.state.foto;
    }

    render() {
        return (
        <Text>Olá, eu sou um estudante!</Text>
        );
    }
}

export default Estudante;