import { FiUploadCloud } from "react-icons/fi";
import { motion } from "framer-motion";
import Upload from "./Upload";

function UploadButton({
  uploadedFiles,
  setUploadedFiles,
  workspaceStats,
  setWorkspaceStats,
  refreshPapers,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className="mb-8"
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">

        <h3 className="flex items-center gap-2 text-sm font-semibold text-white mb-7">
          <FiUploadCloud className="text-blue-400" />
          Upload Research Paper
        </h3>

        <Upload
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
          workspaceStats={workspaceStats}
          setWorkspaceStats={setWorkspaceStats}
          refreshPapers={refreshPapers}
        />
      </div>
    </motion.div>
  );
}

export default UploadButton;