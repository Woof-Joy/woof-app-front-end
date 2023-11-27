import React, { useEffect, useState } from "react";
import woofJoyApi from "../../../woof-joy-api";
import "../../../css/meu-perfil.css"
import CardMeusPets from './ModalCardMeusPets';


function ModalMeusPets() {
    // const userId = sessionStorage.getItem("userId")
    const userId = 3
    const token = sessionStorage.getItem("token")
    const [listDogs, setListDog] = useState([])
    const [dogBody,setDog] = useState({
        nome: "Fido",
        dtNasc: "2020-01-01",
        imgCachorro: "url_da_imagem",
        rga: true,
        peso: 20.5,
        raca: "Labrador",
        porte: "médio",
        convenio: false,
        carteirinha: "123456",
        genero: "M",
        agressivo: 2,
        deficiencia: false,
        fkDono: {
            "id": 1
        },
        observacaoList: [
            {
                "descricao": "Observação sobre o cachorro",
                "dataObservacao": "2023-11-26"
            }
        ]
    }
    )


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
        }, 10 * 60 * 1000);
        return () => clearInterval(intervalId);
    });



    function cadastrarPet() {
        woofJoyApi
            .post(`/dogs/${userId}`, dogBody, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                setDog(response.data)

            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.mensagem);

            });


    }

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
                    <button className="meu-perfil-btn" onClick={cadastrarPet}>Cadastrar Pet</button>
                </div>
            </section>
        </>
    )
}
export default ModalMeusPets;
