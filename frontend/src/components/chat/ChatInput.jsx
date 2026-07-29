import { useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

function ChatInput({ onSend }) {

  const [text, setText] = useState("");

  const textareaRef = useRef(null);

  function submit() {

    if (!text.trim()) return;

    onSend(text);

    setText("");

    if (textareaRef.current) {
  textareaRef.current.style.height = "28px";
}

  }

  function handleChange(e){

    setText(e.target.value);

    e.target.style.height="auto";

    e.target.style.height=Math.min(e.target.scrollHeight,180)+"px";

  }

  return(

    <div className="px-8 py-6">

      <motion.div
      whileTap={{ scale: 0.995 }}
      className="flex items-end gap-4 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 shadow-soft">

        <textarea

        ref={textareaRef}

        rows={1}

        value={text}

        onChange={handleChange}

        onKeyDown={(e)=>{

          if(e.key==="Enter" && !e.shiftKey){

            e.preventDefault();

            submit();

          }

        }}

        placeholder="Ask anything about your papers..."

        className="
flex-1
bg-transparent
resize-none
outline-none
text-[16px]
leading-7
placeholder:text-slate-500
"

        />

        <button

        disabled={!text.trim()}

        onClick={submit}

        className={`

        flex h-12 w-12 items-center justify-center rounded-2xl transition

        ${text.trim()

        ? "bg-blue-600 hover:bg-blue-500 text-white"

        :"bg-slate-800 text-slate-600"}

        `}

        >

          <FiArrowUp size={18}/>

        </button>

      </motion.div>

      <p className="mt-5 text-center text-sm text-slate-500">

        AI can make mistakes. Verify important research findings.

      </p>

    </div>

  )

}

export default ChatInput;