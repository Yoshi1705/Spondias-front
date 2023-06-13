import axios from 'axios';

const client = axios.create({
    baseURL: "http://localhost:5000/api/"
});

export const imageBaseURL = "http://localhost:5000/images"

export default client;