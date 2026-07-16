import { useState } from "react";
import API from "../services/api";
import { FaUpload } from "react-icons/fa";

function Upload() {

    const [message, setMessage] = useState("");

    async function uploadPDF(e) {

        const file = e.target.files[0];

        if (!file) return;

        const formData = new FormData();

        formData.append("file", file);

        try {

            const res = await API.post("/upload", formData);

            setMessage(`✅ ${res.data.filename}`);

        } catch {

            setMessage("❌ Upload Failed");

        }

    }

    return (

        <div>

            <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 transition rounded-xl flex justify-center items-center gap-3 p-4 text-white font-semibold">

                <FaUpload />

                Upload PDF

                <input
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={uploadPDF}
                />

            </label>

            <p className="mt-3 text-green-400 text-sm">

                {message}

            </p>

        </div>

    );

}

export default Upload;