function ChatMessage({

    sender,

    message,

    citations = []

}) {

    const isUser = sender === "user";

    return (

        <div
            className={`flex mb-6 ${
                isUser
                    ? "justify-end"
                    : "justify-start"
            }`}
        >

            <div
                className={`max-w-3xl rounded-2xl p-5 shadow-lg ${
                    isUser
                        ? "bg-blue-600 text-white"
                        : "bg-slate-800 text-gray-200"
                }`}
            >

                {/* Message */}

                <p className="leading-7 whitespace-pre-wrap">

                    {message}

                </p>

                {/* Sources */}

                {

                    !isUser &&

                    citations.length > 0 && (

                        <div className="mt-6">

    <h3 className="text-sm font-semibold text-gray-400 mb-4">

        📚 Sources

    </h3>

    {

        citations.map((item,index)=>(

            <div

                key={index}

                className="

                bg-slate-900

                border

                border-slate-700

                rounded-2xl

                p-5

                mb-4

                hover:border-blue-500

                transition

                "

            >

                <div className="flex justify-between">

                    <div>

                        <h4 className="text-blue-400 font-semibold">

                            📄 {item.source}

                        </h4>

                        <p className="text-sm text-gray-400">

                            Chunk #{item.chunk}

                        </p>

                    </div>

                    <div className="text-green-400 font-semibold">

                        {item.score}%

                    </div>

                </div>

                {/* Progress Bar */}

                <div className="w-full bg-slate-700 rounded-full h-2 mt-4">

                    <div

                        className="bg-green-500 h-2 rounded-full"

                        style={{

                            width:`${item.score}%`

                        }}

                    />

                </div>

                {/* Preview */}

                <div className="mt-4">

                    <p className="text-gray-300 text-sm leading-6">

                        {item.text}...

                    </p>

                </div>

            </div>

        ))

    }

</div>

                    )

                }

            </div>

        </div>

    );

}

export default ChatMessage;