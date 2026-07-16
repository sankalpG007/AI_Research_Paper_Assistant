function Chat() {
  return (
    <div className="flex-1 p-10">

      <h1 className="text-4xl font-bold mb-8">
        AI Research Paper Assistant
      </h1>

      <div className="bg-white rounded-xl shadow p-6">

        <input
          className="
          w-full
          border
          rounded-lg
          p-4
          mb-5
          "
          placeholder="Ask anything about your papers..."
        />

        <button
          className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          hover:bg-blue-700
          "
        >
          Ask AI
        </button>

      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-bold mb-4">
          Answer
        </h2>

        <p className="text-gray-700">
          Your AI answer will appear here.
        </p>

      </div>

    </div>
  );
}

export default Chat;