import React from "react"
import "../css/botao-upload.css"

function BotaoUpload() {
    return (
        <>
            <label for="file-upload" class="custom-file-upload">
                Upload
            </label>
            <input id="file-upload" type="file" accept=".jpg, .jpeg, .png"></input>
        </>
    )
}
export default BotaoUpload;