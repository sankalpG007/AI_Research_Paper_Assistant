import Upload from "./Upload";
import { FaDatabase } from "react-icons/fa";

function Sidebar() {

    return (

        <div className="w-80 bg-slate-900 border-r border-slate-800">

            <div className="p-8">

                <h1 className="text-3xl font-bold text-white">

                    📚 Research AI

                </h1>

                <p className="text-gray-400 mt-2">

                    Your personal AI assistant

                </p>

            </div>

            <div className="px-8">

                <Upload />

            </div>

            <div className="px-8 mt-10">

                <h2 className="text-white font-semibold mb-5 flex gap-2 items-center">

                    <FaDatabase />

                    Uploaded Papers

                </h2>

                <div className="space-y-3">

                    <div className="bg-slate-800 rounded-xl p-4 text-gray-300">
                        Attention Is All You Need
                    </div>

                    <div className="bg-slate-800 rounded-xl p-4 text-gray-300">
                        BERT
                    </div>

                    <div className="bg-slate-800 rounded-xl p-4 text-gray-300">
                        GPT
                    </div>

                </div>

            </div>

        </div>

    );

}

export default Sidebar;