import React, { useEffect, useState } from "react";
import woofJoyApi from "../../../woof-joy-api";
import "../../../css/meu-perfil.css"
import CardMeusPets from './ModalCardMeusPets';
import { Link } from "react-router-dom";


function ModalMeusPets() {
    // const userId = sessionStorage.getItem("userId")
    const userId = 3
    const token = sessionStorage.getItem("token")
    const [listDogs, setListDog] = useState([])
 


    function getDogs() {
        woofJoyApi
            .get(`/dogs/dono/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                setListDog(response.data)
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.mensagem);
            });
    }

    useEffect(() => {
        getDogs();
        const intervalId = setInterval(() => {
            getDogs();
        }, 1 * 60 * 1000);
        return () => clearInterval(intervalId);
    });




    return (
        <>
            <section className="modal-meus-pets-container">
                <p className='modal-meus-pets-titulo'>Meus pets</p>
                <div className='modal-meus-pets-area-cards'>
                    {listDogs?.map((d) => (
                        <CardMeusPets
                            key={d.id}
                            nome={d.nome}
                            dtNasc={d.dtNasc}
                            imgCachorro={d.imgCachorro}
                        />
                    ))}
                </div>
                <div className='meu-perfil-btn-cadastrar-pet'>
                    <Link to={"/cadastro-pet"} className="meu-perfil-btn">Cadastrar Pet</Link>
                </div>
            </section>
        </>
    )
}
export default ModalMeusPets;
