import { FiCpu, FiCircle } from "react-icons/fi";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        h-[72px]
        px-10
        border-b
        border-slate-800/70
        bg-slate-950/80
        backdrop-blur-xl
        flex
        items-center
        justify-between
        shrink-0
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center">

          <FiCpu className="text-blue-400 text-lg" />

        </div>

        <div>

          <h1 className="text-lg font-semibold tracking-tight text-white">
            AI Research Assistant
          </h1>

          <p className="text-sm text-slate-400">
            Chat with your research papers using Gemini 2.5 Flash
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <div className="hidden lg:flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2">

          <FiCircle
            className="text-emerald-400"
            size={10}
            fill="currentColor"
          />

          <span className="text-sm text-slate-300">
            System Online
          </span>

        </div>

      </div>

    </motion.header>
  );
}

export default Navbar;