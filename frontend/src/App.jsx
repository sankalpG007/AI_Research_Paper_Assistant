import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ChatWindow from "./components/ChatWindow";
import DashboardCards from "./components/DashboardCards";
import { getPapers } from "./services/api";
function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [workspaceStats, setWorkspaceStats] = useState({
  
    papers:0,

    chunks:0,

    embedding:"384D",

    model:"Gemini 2.5 Flash"

});

useEffect(() => {

    async function loadPapers() {

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

                    model: metadata[0].model

                });

            }

        }

        catch(err){

            console.log(err);

        }

    }

    loadPapers();

}, []);

  return (
    <div className="flex h-screen bg-slate-950">

      <Sidebar

        uploadedFiles={uploadedFiles}

        setUploadedFiles={setUploadedFiles}

        workspaceStats={workspaceStats}

        setWorkspaceStats={setWorkspaceStats}

        selectedPaper={selectedPaper}

        setSelectedPaper={setSelectedPaper}

        />

      <div className="flex flex-col flex-1">

    <Navbar />

    <div className="p-6 flex-1 overflow-hidden">

        <DashboardCards

        stats={workspaceStats}

        />

        

        <div className="h-[calc(100%-130px)]">

            <ChatWindow

            selectedPaper={selectedPaper}

            />

        </div>

    </div>

</div>

    </div>
  );
}

export default App;