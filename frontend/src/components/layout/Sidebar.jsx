import { FiBookOpen } from "react-icons/fi";
import UploadButton from "../library/UploadButton";
import PaperList from "../library/PaperList";
import { deletePaper } from "../../services/api";

function Sidebar({
  uploadedFiles,
  setUploadedFiles,
  workspaceStats,
  setWorkspaceStats,
  selectedPaper,
  setSelectedPaper,
  refreshPapers,
}) {

  async function handleDelete(file) {

    if (!window.confirm(`Delete "${file.filename}" ?`)) return;

    try {

      await deletePaper(file.filename);

      refreshPapers();

      if (selectedPaper?.filename === file.filename) {
        setSelectedPaper(null);
      }

    } catch {

      alert("Unable to delete paper");

    }

  }

  return (

    <aside className="w-[340px] bg-slate-950 border-r border-slate-800 flex flex-col">

      <div className="px-7 py-6 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">

            <FiBookOpen className="text-xl" />

          </div>

          <div>

            <h1 className="font-bold text-lg">
              Research AI
            </h1>

            <p className="text-xs text-slate-500">
              AI Research Assistant
            </p>

          </div>

        </div>

      </div>

      <div className="flex flex-col flex-1 px-6 py-7 gap-7 overflow-hidden">

        <UploadButton
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
          workspaceStats={workspaceStats}
          setWorkspaceStats={setWorkspaceStats}
          refreshPapers={refreshPapers}
        />

        <PaperList
          uploadedFiles={uploadedFiles}
          workspaceStats={workspaceStats}
          selectedPaper={selectedPaper}
          setSelectedPaper={setSelectedPaper}
          handleDelete={handleDelete}
        />

      </div>

    </aside>

  );
}

export default Sidebar;