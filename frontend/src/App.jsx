import { useState, useEffect } from "react";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import ChatWindow from "./components/chat/ChatWindow";
import { getPapers } from "./services/api";

function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState(null);

  const [workspaceStats, setWorkspaceStats] = useState({
    papers: 0,
    chunks: 0,
    embedding: "384D",
    model: "Gemini 2.5 Flash",
  });

  useEffect(() => {
    loadPapers();
  }, []);

  const loadPapers = async () => {
    try {
      const res = await getPapers();
      const metadata = res.data.metadatas || [];

      setUploadedFiles(metadata);

      if (metadata.length > 0) {
        const totalChunks = metadata.reduce(
          (sum, item) => sum + item.chunks,
          0
        );

        setWorkspaceStats({
          papers: metadata.length,
          chunks: totalChunks,
          embedding: `${metadata[0].embedding_dimension}D`,
          model: metadata[0].model,
        });

        if (!selectedPaper) {
          setSelectedPaper(metadata[0].paper_name);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-white overflow-hidden">

      {/* Sidebar */}

      <Sidebar
        uploadedFiles={uploadedFiles}
        setUploadedFiles={setUploadedFiles}
        selectedPaper={selectedPaper}
        setSelectedPaper={setSelectedPaper}
        workspaceStats={workspaceStats}
        setWorkspaceStats={setWorkspaceStats}
        refreshPapers={loadPapers}
      />

      {/* Main */}

      <div className="flex flex-col flex-1 overflow-hidden">

        <Navbar />

        <div className="flex-1 overflow-hidden">

          <ChatWindow
            selectedPaper={selectedPaper}
          />

        </div>

      </div>

    </div>
  );
}

export default App;