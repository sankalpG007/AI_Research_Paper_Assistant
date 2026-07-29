import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "http://127.0.0.1:8000",
});

export const uploadPDF = (formData) =>
  API.post("/upload", formData);

export const askQuestion = (question, paper = null) =>
  API.post("/search", {
    question,
    paper,
  });

export const getPapers = () =>
  API.get("/papers");

export const deletePaper = (filename) =>
  API.delete("/paper", {
    data: { filename },
  });

export default API;