import axios from 'axios';

const api = axios.create({
    baseURL: 'https://focavest-backend.onrender.com'
});

export default api;