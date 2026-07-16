import { FaRobot } from "react-icons/fa";

function EmptyState() {

    return (

        <div className="flex flex-col items-center justify-center h-full text-center">

            <div className="bg-blue-600 rounded-full p-6 mb-6">

                <FaRobot
                    size={40}
                    color="white"
                />

            </div>

            <h1 className="text-4xl font-bold text-white">

                AI Research Assistant

            </h1>

            <p className="text-gray-400 mt-4">

                Upload research papers and ask
                questions naturally.

            </p>

        </div>

    );

}

export default EmptyState;