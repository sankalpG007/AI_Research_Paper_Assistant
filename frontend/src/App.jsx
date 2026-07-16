import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  return (
    <div className="flex h-screen bg-slate-950">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <ChatWindow />

      </div>

    </div>
  );
}

export default App;