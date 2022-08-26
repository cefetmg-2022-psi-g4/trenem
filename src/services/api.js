import axios from "axios";

export const apiQuestoes = axios.create({
    baseURL:'http://localhost:3000'
});

export const apiEstudante = axios.create({
    baseURL:'http://localhost:3001'
});