import { useRef, useState } from "react";
import API from "../../services/api";
import { motion } from "framer-motion";
import {
  FiUploadCloud,
  FiCheckCircle,
  FiLoader,
  FiFileText,
} from "react-icons/fi";

function Upload({
  refreshPapers,
}) {

  const inputRef = useRef(null);

  const [uploading,setUploading]=useState(false);

  const [selectedFile,setSelectedFile]=useState("");

  const [message,setMessage]=useState("");

  async function uploadPDF(e){

    const file=e.target.files[0];

    if(!file) return;

    setSelectedFile(file.name);

    setUploading(true);

    setMessage("");

    const formData=new FormData();

    formData.append("file",file);

    try{

      await API.post("/upload",formData);

      setMessage("Upload Successful");

      if(refreshPapers){

        await refreshPapers();

      }

    }

    catch(err){

      console.log(err);

      setMessage("Upload Failed");

    }

    finally{

      setUploading(false);

    }

  }

  return(

    <div>

      <input

      ref={inputRef}

      type="file"

      accept=".pdf"

      className="hidden"

      onChange={uploadPDF}

      />

      <motion.button

      whileHover={{scale:1.02}}

      whileTap={{scale:.98}}

      onClick={()=>inputRef.current.click()}

      className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 transition px-4 py-3 text-sm font-medium flex items-center justify-center gap-3"

      >

        {uploading

        ? <FiLoader className="animate-spin"/>

        : <FiUploadCloud size={18}/>}

        {uploading

        ? "Uploading..."

        :"Upload PDF"}

      </motion.button>

      {selectedFile &&(

        <motion.div

        initial={{opacity:0,y:8}}

        animate={{opacity:1,y:0}}

        className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4"

        >

          <div className="flex items-start gap-3">

            <FiFileText className="text-blue-400 mt-1"/>

            <div className="min-w-0 flex-1">

              <p className="truncate text-sm text-white">

                {selectedFile}

              </p>

              {message &&(

                <div className={`mt-2 flex items-center gap-2 text-xs

                ${message.includes("Successful")

                ?"text-emerald-400"

                :"text-red-400"}

                `}>

                  {message.includes("Successful")

                  ?<FiCheckCircle/>

                  :null}

                  {message}

                </div>

              )}

            </div>

          </div>

        </motion.div>

      )}

    </div>

  )

}

export default Upload;