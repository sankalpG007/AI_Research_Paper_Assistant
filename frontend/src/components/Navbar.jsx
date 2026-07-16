import { FaRobot } from "react-icons/fa";

function Navbar() {

    return (

        <div className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">

            <div>

                <h1 className="text-white text-2xl font-bold">
                    AI Research Assistant
                </h1>

                <p className="text-gray-400 text-sm">
                    Chat with your uploaded papers
                </p>

            </div>

            <div className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2">

                <FaRobot />

                Gemini 2.5 Flash

            </div>

        </div>

    );

}

export default Navbar;