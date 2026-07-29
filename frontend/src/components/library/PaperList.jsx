import { FiBookOpen } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import PaperCard from "./PaperCard";

function PaperList({
  uploadedFiles,
  workspaceStats,
  selectedPaper,
  setSelectedPaper,
  handleDelete,
}) {
  return (
    <div className="flex-1 overflow-y-auto">

      <div className="flex items-center justify-between mb-7 px-1">

        <div className="flex items-center gap-2">

          <FiBookOpen className="text-blue-400" />

          <span className="font-semibold">
            Library
          </span>

        </div>

        <span className="text-xs text-slate-500">
          {workspaceStats.papers}
        </span>

      </div>

      {uploadedFiles.length === 0 ? (

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">

          <p className="text-white font-medium">
            No Papers Uploaded
          </p>

          <p className="text-slate-500 text-sm mt-2">
            Upload a PDF to start chatting.
          </p>

        </div>

      ) : (

        <AnimatePresence>

          {uploadedFiles.map((file) => (

            <PaperCard
              key={file.filename}
              file={file}
              active={selectedPaper?.filename === file.filename}
              onSelect={() => setSelectedPaper(file)}
              onDelete={() => handleDelete(file)}
            />

          ))}

        </AnimatePresence>

      )}

    </div>
  );
}

export default PaperList;