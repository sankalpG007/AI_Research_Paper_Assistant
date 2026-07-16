import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import EmptyState from "./EmptyState";
import { askQuestion } from "../services/api";

function ChatWindow() {

    const [messages, setMessages] = useState([]);
    
    const [loading, setLoading] = useState(false);

    async function sendQuestion(question){

        setMessages(prev=>[
            ...prev,
            {
                sender:"user",
                message:question
            }
        ]);
        setLoading(true);
        try{

            const res = await askQuestion(question);

            setMessages(prev=>[
                ...prev,
                {
                    sender:"assistant",
                    message:res.data.answer
                }
            ]);
            
            setLoading(false);
        }

        catch(err){

            setMessages(prev=>[
                ...prev,
                {
                    sender:"assistant",
                    message:"Something went wrong."
                }
            ]);

            setLoading(false);
        }

    }

    return(

        <div className="flex flex-col h-full">

            <div className="flex-1 overflow-auto p-8">

                {

    messages.length===0

    ?

    <EmptyState/>

    :

    <>

        {

            messages.map((msg,index)=>(

                <ChatMessage

                    key={index}

                    sender={msg.sender}

                    message={msg.message}

                />

            ))

        }

        {

            loading && (

                <div className="flex justify-start mt-4">

                    <div className="bg-slate-800 rounded-2xl px-6 py-4 shadow-lg">

                        <p className="text-gray-300">

                            🤖 Thinking...

                        </p>

                    </div>

                </div>

            )

        }

    </>

}

            </div>

            <ChatInput

                onSend={sendQuestion}

            />

        </div>

    );



}

export default ChatWindow;