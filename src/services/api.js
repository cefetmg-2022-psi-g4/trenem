import axios from "axios";

const apiQuestoes = axios.create({
    baseURL:'http://localhost:3000'
});

const apiEstudante = axios.create({
    baseURL:'http://localhost:3001'
});

export default apiQuestoes;