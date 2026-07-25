import Upload from "./Upload";
import { FaDatabase, FaFilePdf, FaTrash } from "react-icons/fa";
import { deletePaper } from "../services/api";

function Sidebar({
    uploadedFiles,
    setUploadedFiles,
    workspaceStats,
    setWorkspaceStats,
    selectedPaper,
    setSelectedPaper
}) {

    async function handleDelete(file) {

        const ok = window.confirm(
            `Delete "${file.filename}"?`
        );

        if (!ok) return;

        try {

            await deletePaper(file.filename);

            // Remove from sidebar
            setUploadedFiles(prev =>
                prev.filter(
                    paper => paper.filename !== file.filename
                )
            );

            // Update dashboard
            setWorkspaceStats(prev => ({
                ...prev,
                papers: prev.papers - 1,
                chunks: prev.chunks - file.chunks
            }));

            // Clear selection if deleted
            if (selectedPaper?.filename === file.filename) {
                setSelectedPaper(null);
            }

        } catch (err) {

            console.log(err);
            alert("Delete failed.");

        }

    }

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

                <h2 className="text-white font-semibold mb-5 flex items-center gap-2">

                    <FaDatabase />

                    Uploaded Papers

                </h2>

                {selectedPaper && (

                    <div className="mb-5 p-3 rounded-xl bg-green-900 border border-green-700">

                        <p className="text-green-300 text-sm">

                            Selected Paper

                        </p>

                        <p className="text-white font-semibold truncate">

                            📄 {selectedPaper.filename}

                        </p>

                    </div>

                )}

                {

                    uploadedFiles.length === 0 ?

                        <p className="text-gray-400 text-sm">

                            No PDFs Uploaded

                        </p>

                        :

                        uploadedFiles.map((file, index) => (

                            <div

                                key={index}

                                onClick={() => setSelectedPaper(file)}

                                className={`
                                    flex
                                    items-center
                                    gap-3
                                    p-3
                                    rounded-lg
                                    cursor-pointer
                                    mb-3
                                    transition
                                    ${selectedPaper?.filename === file.filename
                                        ? "bg-blue-600"
                                        : "bg-slate-800 hover:bg-slate-700"
                                    }
                                `}

                            >

                                <FaFilePdf className="text-red-500" />

                                <div className="flex-1">

                                    <p className="text-white truncate">

                                        {file.filename}

                                    </p>

                                    <p className="text-xs text-gray-400">

                                        {file.chunks} chunks

                                    </p>

                                </div>

                                <button

                                    onClick={(e) => {

                                        e.stopPropagation();

                                        handleDelete(file);

                                    }}

                                    className="text-red-400 hover:text-red-600"

                                >

                                    <FaTrash />

                                </button>

                            </div>

                        ))

                }

            </div>

        </div>

    );

}

export default Sidebar;