import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFileText, FiGlobe, FiCpu } from "react-icons/fi";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import EmptyState from "./EmptyState";

import { askQuestion } from "../../services/api";

function ChatWindow({ selectedPaper }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendQuestion(question) {
    if (!question.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: question,
      },
    ]);

    setLoading(true);

    try {
      const res = await askQuestion(
        question,
        selectedPaper
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message: res.data.answer,
          citations: res.data.citations || [],
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message:
            "Sorry, something went wrong while generating the answer.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-full flex-col">

      {/* Top Bar */}

      

      {/* Conversation */}

      <div className="flex-1 overflow-y-auto">

        <div className="chat-container px-6 py-8">

          {messages.length === 0 ? (

            <EmptyState onPromptClick={sendQuestion} />

          ) : (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8 pb-8"
            >

              <AnimatePresence>

                {messages.map((msg, index) => (

                  <ChatMessage
                    key={index}
                    sender={msg.sender}
                    message={msg.message}
                    citations={msg.citations}
                  />

                ))}

              </AnimatePresence>

              {loading && (

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-4"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800">

                    <FiCpu className="text-blue-400" />

                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">

                    <div className="flex gap-2">

                      <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500"></span>

                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-blue-500"
                        style={{ animationDelay: ".15s" }}
                      ></span>

                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-blue-500"
                        style={{ animationDelay: ".3s" }}
                      ></span>

                    </div>

                    <p className="mt-3 text-sm text-slate-400">
                      Thinking...
                    </p>

                  </div>

                </motion.div>

              )}

              <div ref={bottomRef} />

            </motion.div>

          )}

        </div>

      </div>

      {/* Bottom Input */}

      <div className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-xl">

        <div className="chat-container">

          <ChatInput
            onSend={sendQuestion}
          />

        </div>

      </div>

    </div>
  );
}

export default ChatWindow;