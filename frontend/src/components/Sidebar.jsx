import Upload from "./Upload";
import { FaDatabase, FaFilePdf } from "react-icons/fa";

function Sidebar({

    uploadedFiles = [],

    setUploadedFiles,

    workspaceStats,

    setWorkspaceStats

}) {

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

                <Upload

                uploadedFiles={uploadedFiles}

                setUploadedFiles={setUploadedFiles}

                workspaceStats={workspaceStats}

                setWorkspaceStats={setWorkspaceStats}

                />

            </div>

            <div className="px-8 mt-10">

                <h2 className="text-white font-semibold mb-5 flex gap-2 items-center">

                    <FaDatabase />

                    Uploaded Papers

                </h2>

               {

                    uploadedFiles.length===0

                    ?

                    <p className="text-gray-400 text-sm">

                    No PDFs Uploaded

                    </p>

                    :

                    uploadedFiles.map((file,index)=>(

                    <div

                    key={index}

                    className="

                    flex

                    items-center

                    gap-2

                    bg-slate-800

                    p-2

                    rounded-lg

                    "

                    >

                    <FaFilePdf

                    className="text-red-500"

                    />

                    <p

                    className="truncate"

                    >

                    {file}

                    </p>

                    </div>

                    ))

                    }

            </div>

        </div>

    );

}

export default Sidebar;