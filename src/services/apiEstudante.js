import axios from "axios";

const apiEstudante = axios.create({
    baseURL:'http://localhost:3001'
});

export default apiEstudante;