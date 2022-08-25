import axios from "axios";

const apiQuestoes = axios.create({
    baseURL:'http://localhost:3000'
});

export default apiQuestoes;