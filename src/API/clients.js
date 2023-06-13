 import axios from 'axios';
const backendURL = "https://spondiasbackend-igw3.vercel.app";

const client = axios.create({
    baseURL: backendURL + "/api"
});

export const imageBaseURL = backendURL + "/images";

export default client;
