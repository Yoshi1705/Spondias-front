 import axios from 'axios';
const backendURL = "https://spondias-backend-1.onrender.com";

const client = axios.create({
    baseURL: backendURL + "/api"
});

export const imageBaseURL = backendURL + "/images";

export default client;
