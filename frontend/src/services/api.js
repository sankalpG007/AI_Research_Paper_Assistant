import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000"
});

export const uploadPDF = (formData) =>
    API.post("/upload", formData);

export const askQuestion = (question) =>
    API.post("/search", {
        question
    });

export default API;