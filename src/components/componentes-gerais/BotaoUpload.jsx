import React, { useRef } from "react"
import "../../css/botao-upload.css"

function BotaoUpload({ onUpload }) {

    const fileUploadRef = useRef(null);

    const handleChange = (event) => {

        const file = event.target.files[0];
        if (file) {
            onUpload(file);
        }
    };
    return (
        <>
            <label for="file-upload" class="custom-file-upload">
                Upload
            </label>
            <input id="file-upload" ref={fileUploadRef} type="file" accept=".jpg, .jpeg, .png" onChange={handleChange}></input>
        </>
    )
}
export default BotaoUpload;