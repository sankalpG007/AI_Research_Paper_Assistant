import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function ChatInput({ onSend }) {

    const [question, setQuestion] = useState("");

    const send = () => {

        if (!question.trim()) return;

        onSend(question);

        setQuestion("");
    };

    return (

        <div className="border-t border-slate-800 p-6">

            <div className="flex gap-4">

                <input

                    value={question}

                    onChange={(e) =>
                        setQuestion(e.target.value)
                    }

                    onKeyDown={(e)=>{
                        if(e.key==="Enter"){
                            send();
                        }
                    }}

                    className="flex-1 bg-slate-800 rounded-xl p-4 text-white outline-none"

                    placeholder="Ask your paper..."

                />

                <button

                    onClick={send}

                    className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl"

                >

                    <FaPaperPlane color="white"/>

                </button>

            </div>

        </div>

    );

}

export default ChatInput;