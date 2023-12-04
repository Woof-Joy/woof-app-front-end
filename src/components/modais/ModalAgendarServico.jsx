import "../../css/modal-agendar-servico.css"
import Button from "../componentes-gerais/button";
import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";


function ModalAgendarServico({ opacityOn, widthOn, idParceiro, cancelarOn, sendOn, parceiroWoofJoy }) {
    const [styleEdition, setStyleEdition] = useState({
        opacity: opacityOn,
        width: widthOn
    });
    const contatoIdAtual = sessionStorage.getItem("contatoId")
    const userId = sessionStorage.getItem("userId")
    const token = sessionStorage.getItem("token")

    useEffect(() => {
        setStyleEdition({
            opacity: opacityOn,
        });
    }, [opacityOn]);



    const [usuario, setUsuario] = useState({
        id: "",
        nomeCompleto: "",
        cpf: "",
        email: "",
        senha: "",
        dataNasc: "",
        imgUsuario: null,
        descricao: null,
        parceiro: null,
        cliente: {
            idCliente: "",
            dogList: []
        },
        role: "",
        listaItens: [],
        endereco: {
            id: "",
            cep: "",
            logradouro: "",
            numero: "",
            localidade: "",
            uf: ""
        }
    });


    const [servicoBody, setServicoBody] = useState({
        inicioDoServico: "2020-12-12T12:12:12",
        fimDoServico: "2025-12-12T12:12:12",
        idCachorros: [2],
        idParceiro: contatoIdAtual,
        tipoServico: "dogWalker"
    });

    const [sendBody, setsendBody] = useState({
        message: `Serviço Solicitado para com início: ${servicoBody.inicioDoServico},`+
                  `sendo finalizado na data: ${servicoBody.inicioDoServico}.\n`+
                  `Tipo de serviço: ${servicoBody.tipoServico}`,
        idRemetente: userId,
        idDestinatario: contatoIdAtual,
        tipo: "doacao",
    });

    const [tipoServico, setTipoServico] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUsuario({
            ...usuario,
            [name]: value
        });

        if (name === "inicioTime" || name === "fimTime") {
            setServicoBody({
                ...servicoBody,
                [name]: value
            });
        }
    };

    const handleTipoServicoChange = (event) => {
        setTipoServico(event.target.value);
        setServicoBody({
            ...servicoBody,
            tipoServico: event.target.value
        });
    };



    function sendMensage(sendBody) {
        woofJoyApi
            .post(`/notification`, sendBody, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                console.log(response.status);

                setsendBody({
                    message: "",
                    idRemetente: userId,
                    idDestinatario: contatoIdAtual,
                    tipo: "doacao",
                });
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.mensagem);
            });
    }
    const [opacityAfterAgendamento, setOpacityAfterAgendamento] = useState(0);


    const agendarServico = () => {
        woofJoyApi
            .post(`/servicos`, servicoBody, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resposta) => {
                alert(resposta.status);
                sendMensage(sendBody)
                setStyleEdition({
                    opacity:0
                })
            })
            .catch((erro) => {
                alert(`Erro ao criar o usuário: ${erro.message}`);
            });
    };

    const getInfoCliente = () => {
        woofJoyApi
            .get(`/users/${userId}`)
            .then((resposta) => {
                setUsuario(resposta.data);
            })
            .catch((erro) => {
                alert("erro:" + erro.status);
                console.log(erro.status);
            });
    };

    useEffect(() => {
        setStyleEdition({
            opacity: opacityOn
        });
        getInfoCliente();
    }, [opacityOn]);

    return (
        <>
            <div style={styleEdition} className="container-modal-agendar-servico">
                <h2>Agende o serviço desejado</h2>
                <br />

                <h5>Serviço</h5>
                <select
                    placeholder="Serviços disponíveis"
                    className="select-modal-agendar-servico"
                    name="tipoServico"
                    value={tipoServico}
                    onChange={handleTipoServicoChange}
                >
                    <option value="" disabled>Escolha...</option>
                    <option key={servicoBody.tipoServico} value={servicoBody.tipoServico}>
                        dogWalker
                    </option>
                    <option key={servicoBody.tipoServico} value={servicoBody.tipoServico}>
                        dogSitter
                    </option>
                </select>

                <div className="container-dados-modal-agendar-servico">
                    <h5>Parceiro WoofJoy: {parceiroWoofJoy}</h5>
                </div>
                <div className="container-inputs-modal-agendar-servico">
                    <h5>Início do serviço</h5>
                    <div className="div-inputs-modal-agendar-servico">
                        <input
                            className="inputs-modal-agendar-servico"
                            type="datetime-local"
                            placeholder="Data"
                            name="inicioTime"
                            value={servicoBody.inicioDoServico}
                            onChange={handleInputChange}
                        />
                    </div>
                    <h5>Fim do serviço</h5>
                    <div className="div-inputs-modal-agendar-servico">
                        <input
                            className="inputs-modal-agendar-servico"
                            type="datetime-local"
                            placeholder="Hora"
                            name="fimTime"
                            value={servicoBody.fimDoServico}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <h5>Selecione o pet:</h5>
                <select placeholder="Seus pets" className="select-modal-agendar-servico" name="idCachorros" id="" onChange={handleInputChange}>
                    <option value="" disabled>Escolha...</option>
                    {usuario.cliente.dogList.map((dog) => (
                        <option key={dog.id} value={dog.id}>{dog.nome}</option>
                    ))}
                </select>


                <div className="botoes-modal-agendar-servico">
                    <Button
                        buttonName="Cancelar"
                        fontColor="#DB4B90"
                        buttonBackColor="#D9D9D9"
                        onClick={cancelarOn}
                    />
                    <Button
                        buttonName="Agendar"
                        fontColor="white"
                        buttonBackColor="#DB4B90"
                        onClick={() => agendarServico()}
                    />
                </div>
            </div>
        </>
    );
}

export default ModalAgendarServico;