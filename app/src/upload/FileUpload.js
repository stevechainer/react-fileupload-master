import React, { useState } from "react";
import axios from "axios"

const FileUpload = () => {


    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8000/upload', formData);
            console.log(">>>>>>>File Uploaded>>>>>>>>>>");
        } catch (error) {
            console.error("err");
        }
    }

    return (
        <>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleFileUpload}>Upload</button>
            </div>
        </>
    )
}
export default FileUpload;
