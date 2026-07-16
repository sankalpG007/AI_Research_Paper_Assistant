function ChatMessage({

    sender,
    message

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
                className={`max-w-3xl rounded-2xl p-5 shadow-lg

                ${
                    isUser
                        ? "bg-blue-600 text-white"
                        : "bg-slate-800 text-gray-200"
                }`}
            >

                <p>

                    {message}

                </p>

            </div>

        </div>

    );

}

export default ChatMessage;