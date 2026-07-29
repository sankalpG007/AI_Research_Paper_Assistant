# 🤖 AI Research Paper Assistant

An AI-powered research assistant that enables users to upload research papers, build a searchable knowledge base, and ask natural language questions about their documents. The application combines semantic search, vector embeddings, Retrieval-Augmented Generation (RAG), and Google's Gemini AI to deliver context-aware answers with high relevance.

---

## 📸 Demo

> **Live Demo:** *(Add your Vercel link here)*

> **Backend API:** *(Add your Render link here)*

---

## ✨ Features

- 📄 Upload one or multiple PDF research papers
- 🔍 Semantic search using vector embeddings
- 🤖 AI-powered question answering using Gemini
- 📚 Maintain a research paper library
- 📊 Automatic PDF text extraction
- 🧩 Intelligent document chunking
- 🧠 Vector database powered by ChromaDB
- ⚡ FastAPI backend with REST APIs
- 🎨 Modern React + Tailwind CSS frontend
- 💬 Chat-style interface inspired by ChatGPT
- 🗑 Delete uploaded papers from the knowledge base

---

# 📷 Screenshots

> Add screenshots here after deployment.

Example:

```
Home Screen

Research Library

Chat Interface

Upload Paper
```

---

# 🚀 Problem Statement

Researchers, students, and professionals often spend significant time reading lengthy research papers to locate specific information such as methodologies, findings, limitations, or future work.

This project solves that problem by allowing users to simply upload papers and ask questions in natural language.

Instead of manually searching through hundreds of pages, the AI retrieves only the relevant sections and generates accurate, context-aware responses.

---

# 💡 Solution

The application follows the Retrieval-Augmented Generation (RAG) approach.

Workflow:

```
PDF Upload
      │
      ▼
Text Extraction
      │
      ▼
Document Chunking
      │
      ▼
Sentence Embeddings
      │
      ▼
Vector Database (ChromaDB)
      │
      ▼
Semantic Search
      │
      ▼
Prompt Construction
      │
      ▼
Gemini AI
      │
      ▼
Final Answer
```

---

# 🏗 Architecture

```
React + Tailwind Frontend
           │
           ▼
      FastAPI Backend
           │
 ┌─────────┼──────────┐
 │         │          │
 ▼         ▼          ▼
PyMuPDF  ChromaDB   Gemini API
 │
 ▼
Sentence Transformers
```

---

# ⚙️ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS v4
- Axios
- Framer Motion
- React Markdown
- React Icons

---

## Backend

- FastAPI
- Python
- Uvicorn

---

## AI & Machine Learning

- Google Gemini 2.5 Flash
- Sentence Transformers
- all-MiniLM-L6-v2
- Retrieval-Augmented Generation (RAG)

---

## Database

- ChromaDB
- Local Vector Database

---

## PDF Processing

- PyMuPDF

---

## Development Tools

- Git
- GitHub
- VS Code
- Postman

---

# 📂 Project Structure

```
AI_Research_Paper_Assistant/

│
├── backend/
│   ├── app.py
│   ├── chunker.py
│   ├── embedding.py
│   ├── generator.py
│   ├── loader.py
│   ├── prompt_builder.py
│   ├── retriever.py
│   ├── vector_db.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚡ How It Works

## Step 1

Upload one or more research papers.

---

## Step 2

The backend extracts text using PyMuPDF.

---

## Step 3

The extracted text is divided into smaller chunks.

---

## Step 4

Each chunk is converted into a vector embedding using:

```
all-MiniLM-L6-v2
```

---

## Step 5

Embeddings are stored inside ChromaDB.

---

## Step 6

When a question is asked:

- Question is embedded
- Similar chunks are retrieved
- Relevant context is created

---

## Step 7

Gemini receives:

- User question
- Retrieved context

and generates the final response.

---

# 📡 API Endpoints

## Upload PDF

```
POST /upload
```

---

## Ask Question

```
POST /search
```

---

## Get Uploaded Papers

```
GET /papers
```

---

## Delete Paper

```
DELETE /paper
```

---

# 🔧 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/AI_Research_Paper_Assistant.git

cd AI_Research_Paper_Assistant
```

---

## Backend Setup

Navigate to backend:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

Windows

```bash
venv\Scripts\activate
```

Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
```

Run backend:

```bash
uvicorn app:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🌐 Deployment

## Frontend

- Vercel

## Backend

- Render

Environment Variables:

```
GOOGLE_API_KEY=YOUR_API_KEY
```

---

# 🧠 AI Concepts Used

- Retrieval-Augmented Generation (RAG)
- Semantic Search
- Vector Embeddings
- Cosine Similarity
- Prompt Engineering
- Context Retrieval
- Large Language Models

---

# 📈 Future Improvements

- User authentication
- Cloud vector database
- Persistent storage
- Multi-user support
- Citation highlighting
- OCR for scanned PDFs
- Research paper summarization
- Research comparison mode
- Export chat history
- Conversation memory
- PDF annotations
- Voice input

---

# ⚠ Limitations

- Local ChromaDB storage
- Uploaded files are not persistent on free cloud hosting
- Optimized primarily for text-based PDFs
- Gemini API usage depends on quota limits

---

# 👨‍💻 Author

**Sankalp Singh**

📧 Email: sankalpwork880@gmail.com

💼 LinkedIn: *(Add your LinkedIn URL)*

💻 GitHub: https://github.com/sankalpG007

---

# ⭐ If you like this project

Please consider giving this repository a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---

# 📄 License

This project is released under the MIT License.

Feel free to use, modify, and contribute.