import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import {
  FiUser,
  FiCpu,
  FiFileText,
} from "react-icons/fi";

import { motion } from "framer-motion";

function ChatMessage({
  sender,
  message,
  citations=[]
}) {

  const isUser=sender==="user";

  return (

    <motion.div

    initial={{opacity:0,y:15}}

    animate={{opacity:1,y:0}}

    className={`flex gap-5 ${isUser?"justify-end":"justify-start"}`}

    >

      {!isUser && (

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800">

          <FiCpu className="text-blue-400"/>

        </div>

      )}

      <div className="message-width">

        <div

        className={`

        rounded-2xl px-6 py-5 leading-7

        ${isUser

        ?"bg-blue-600 text-white"

        :"border border-slate-800 bg-slate-900 text-slate-200"}

        `}

        >

          {isUser ? (

            <p className="whitespace-pre-wrap">

              {message}

            </p>

          ) : (

            <div className="prose prose-invert max-w-none">

              <ReactMarkdown

              remarkPlugins={[remarkGfm]}

              rehypePlugins={[rehypeHighlight]}

              >

                {message}

              </ReactMarkdown>

            </div>

          )}

        </div>

        {!isUser && citations.length>0 &&(

          <div className="mt-5 space-y-3">

            <p className="text-xs uppercase tracking-wider text-slate-500">

              Sources

            </p>

            {citations.map((c,index)=>(

              <div

              key={index}

              className="rounded-xl border border-slate-800 bg-slate-900 p-4"

              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <FiFileText className="text-blue-400"/>

                    <span className="font-medium text-white">

                      {c.source}

                    </span>

                  </div>

                  <span className="text-xs text-slate-500">

                    Score {c.score}%

                  </span>

                </div>

                <p className="mt-3 text-sm leading-6 text-slate-400">

                  {c.text}

                </p>

                <p className="mt-3 text-xs text-slate-500">

                  Chunk #{c.chunk}

                </p>

              </div>

            ))}

          </div>

        )}

      </div>

      {isUser &&(

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600">

          <FiUser/>

        </div>

      )}

    </motion.div>

  )

}

export default ChatMessage;