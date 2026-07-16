import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ChatWindow from "./components/ChatWindow";
import DashboardCards from "./components/DashboardCards";

function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [workspaceStats, setWorkspaceStats] = useState({

    papers:0,

    chunks:0,

    embedding:"384D",

    model:"Gemini 2.5 Flash"

});
  return (
    <div className="flex h-screen bg-slate-950">

      <Sidebar

      uploadedFiles={uploadedFiles}

      setUploadedFiles={setUploadedFiles}

      workspaceStats={workspaceStats}

      setWorkspaceStats={setWorkspaceStats}

      />

      <div className="flex flex-col flex-1">

    <Navbar />

    <div className="p-6 flex-1 overflow-hidden">

        <DashboardCards

        stats={workspaceStats}

        />

        <div className="h-[calc(100%-130px)]">

            <ChatWindow />

        </div>

    </div>

</div>

    </div>
  );
}

export default App;