import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:19006'
});

export default api;