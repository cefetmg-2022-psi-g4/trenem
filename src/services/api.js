import axios from "axios";

export const apiQuestoes = axios.create({
    baseURL:'http://localhost:3000'
});

export const apiEstudante = axios.create({
    baseURL:'http://localhost:3001'
});

export const apiAmizades = axios.create({
    baseURL:'http://localhost:3002'
});

export const apiRanking = axios.create({
    baseURL:'http://localhost:3003'
});