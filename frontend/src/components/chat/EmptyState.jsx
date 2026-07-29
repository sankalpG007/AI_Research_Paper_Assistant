import {
  FiFileText,
  FiLayers,
  FiSearch,
  FiZap,
} from "react-icons/fi";
import { motion } from "framer-motion";

const prompts = [
  {
    icon: <FiFileText />,
    title: "Summarize this paper",
    prompt: "Summarize this research paper in simple language.",
  },
  {
    icon: <FiLayers />,
    title: "Explain methodology",
    prompt: "Explain the methodology used in this paper.",
  },
  {
    icon: <FiSearch />,
    title: "Key findings",
    prompt: "What are the key findings of this paper?",
  },
  {
    icon: <FiZap />,
    title: "Future work",
    prompt: "What future work is suggested by the authors?",
  },
];

function EmptyState({ onPromptClick }) {
  return (
    <div className="flex h-full flex-col items-center justify-start pt-24">

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl text-center"
      >

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600/10 border border-blue-500/20">

          <FiSearch className="text-3xl text-blue-400" />

        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white">

          AI Research Assistant

        </h1>

        <p className="mt-5 max-w-3xl mx-auto text-xl leading-8 text-slate-400">

          Upload papers, ask questions, compare findings and explore research using AI.

        </p>

      </motion.div>

      <div className="mt-14 grid w-full max-w-6xl grid-cols-2 gap-7">

        {prompts.map((item) => (

          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: .98 }}
            key={item.title}
            onClick={() => onPromptClick(item.prompt)}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-7 text-left transition hover:border-blue-500 hover:bg-slate-800"
          >

            <div className="mb-4 text-2xl text-blue-400">

              {item.icon}

            </div>

            <h3 className="text-lg font-semibold text-white leading-tight">

              {item.title}

            </h3>

            <p className="mt-3 text-[15px] leading-7 text-slate-400">

              {item.prompt}

            </p>

          </motion.button>

        ))}

      </div>

    </div>
  );
}

export default EmptyState;