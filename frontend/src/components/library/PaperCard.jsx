import { motion } from "framer-motion";
import {
  FiFileText,
  FiTrash2,
  FiCheckCircle,
} from "react-icons/fi";

function PaperCard({
  file,
  active,
  onSelect,
  onDelete,
}) {
  return (
    <motion.div
      layout
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      onClick={onSelect}
      className={`
      rounded-xl
      border
      px-5 py-5
      cursor-pointer
      transition-all
      mb-3

      ${
        active
          ? "border-blue-500 bg-blue-500/10"
          : "border-slate-800 bg-slate-900 hover:border-slate-700"
      }
      `}
    >
      <div className="flex justify-between">

        <div className="flex gap-3">

          <div className="mt-1">

            <FiFileText className="text-blue-400 text-lg" />

          </div>

          <div className="min-w-0">

            <h4 className="text-sm font-medium text-white truncate">
              {file.filename}
            </h4>

            <p className="text-sm mt-2 text-slate-500">
              {file.chunks} Chunks
            </p>

          </div>

        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="text-slate-500 hover:text-red-400 transition"
        >
          <FiTrash2 />
        </button>

      </div>

      {active && (
        <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400">

          <FiCheckCircle />

          Active Paper

        </div>
      )}
    </motion.div>
  );
}

export default PaperCard;