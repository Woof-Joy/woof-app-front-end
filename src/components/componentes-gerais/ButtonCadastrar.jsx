import React from "react"
import "../../css/botao-upload.css"

function BotaoCadastrar() {
    return (
        <>
            <label for="file-upload" class="custom-file-upload">
                Cadastrar Pet
            </label>
            <input id="file-upload" type="file" accept=".jpg, .jpeg, .png"></input>
        </>
    )
}
export default BotaoCadastrar;