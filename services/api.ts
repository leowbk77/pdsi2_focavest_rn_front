import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cataas.com'
});

export default api;