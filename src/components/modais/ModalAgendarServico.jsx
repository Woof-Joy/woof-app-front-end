import "../../css/modal-agendar-servico.css";
import Button from "../componentes-gerais/button";
import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";

function ModalAgendarServico({ opacityOn, widthOn, idParceiro, cancelarOn, parceiroWoofJoy }) {
    const [styleEdition, setStyleEdition] = useState({
        opacity: opacityOn,
        width: widthOn,
    });
    const contatoIdAtual = sessionStorage.getItem("contatoId");
    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem("token");

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
            dogList: [],
        },
        role: "",
        listaItens: [],
        endereco: {
            id: "",
            cep: "",
            logradouro: "",
            numero: "",
            localidade: "",
            uf: "",
        },
    });

    const [servicoBody, setServicoBody] = useState({
        inicioDoServico: "",
        fimDoServico: "",
        idParceiro: idParceiro,
        tipoServico: "",
        idCliente: userId,
    });

    const [sendBody, setSendBody] = useState({
        message: "",
        idRemetente: userId,
        idDestinatario: contatoIdAtual,
        tipo: "doacao",
    });

    const [tipoServico, setTipoServico] = useState("");
    const [errorMessages, setErrorMessages] = useState({ inicio: "", fim: "" });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        // Formatando as datas no formato ISO 8601
        const formattedDate = new Date(value).toISOString();

        setServicoBody((prevServicoBody) => ({
            ...prevServicoBody,
            [name]: formattedDate,
        }));

        validateDates(name, formattedDate);

        setSendBody((prevSendBody) => ({
            ...prevSendBody,
            message: `Serviço Solicitado para com início: ${name === "inicioDoServico" ? formattedDate : servicoBody.inicioDoServico}, ` +
                `sendo finalizado na data: ${name === "fimDoServico" ? formattedDate : servicoBody.fimDoServico}. \n` +
                `Tipo de serviço: ${tipoServico}`,
        }));
    };

    const handleTipoServicoChange = (event) => {
        setTipoServico(event.target.value);
        setServicoBody((prevServicoBody) => ({
            ...prevServicoBody,
            tipoServico: event.target.value,
        }));

        setSendBody((prevSendBody) => ({
            ...prevSendBody,
            message: `Serviço Solicitado, com início: ${servicoBody.inicioDoServico}, ` +
                `sendo finalizado na data: ${servicoBody.fimDoServico}. \n` +
                `Tipo de serviço: ${event.target.value}`,
        }));
    };

    const validateDates = (name, value) => {
        const currentDateTime = new Date().toISOString();
        let errors = { ...errorMessages };

        if (name === "inicioDoServico") {
            errors.inicio = value < currentDateTime ? "A data de início deve ser maior que a data atual." : "";
        }
        if (name === "fimDoServico") {
            errors.fim = value <= servicoBody.inicioDoServico ? "A data de fim deve ser maior que a data de início." : "";
        }

        setErrorMessages(errors);
    };

    const sendMensage = (sendBody) => {
        woofJoyApi
            .post(`/notification`, sendBody, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                console.log(response.status);

                setSendBody({
                    message: "",
                    idRemetente: userId,
                    idDestinatario: contatoIdAtual,
                    tipo: "doacao",
                });
            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido.mensagem);
            });
    };

    const agendarServico = () => {
        if (errorMessages.inicio || errorMessages.fim) {
            alert("Por favor, corrija os erros antes de agendar o serviço.");
            return;
        }

        woofJoyApi
            .post(`/servicos`, servicoBody, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resposta) => {
                alert(`Agendado com sucesso`);
                cancelarOn();
                sendMensage(sendBody);
                setStyleEdition({
                    opacity: 0,
                });
            })
            .catch((erro) => {
                alert(`Preencha todos os campos corretamente`);
                console.log(servicoBody)
            });
    };

    const getInfoCliente = () => {
        woofJoyApi
            .get(`/users/${userId}`)
            .then((resposta) => {
                setUsuario(resposta.data);
            })
            .catch((erro) => {
                console.log(erro.status);
            });
    };

    useEffect(() => {
        setStyleEdition({
            opacity: opacityOn,
        });
        getInfoCliente();
    }, [opacityOn]);

    return (
        <>
            <div className="fundo-modal">
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
                        <option value="Dog Walker">Dog Walker</option>
                        <option value="Dog Sitter">Dog Sitter</option>
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
                                name="inicioDoServico"
                                value={servicoBody.inicioDoServico.split(".")[0]}
                                onChange={handleInputChange}
                            />
                            {errorMessages.inicio && <p className="error-message">{errorMessages.inicio}</p>}
                        </div>
                        <h5>Fim do serviço</h5>
                        <div className="div-inputs-modal-agendar-servico">
                            <input
                                className="inputs-modal-agendar-servico"
                                type="datetime-local"
                                placeholder="Hora"
                                name="fimDoServico"
                                value={servicoBody.fimDoServico.split(".")[0]}
                                onChange={handleInputChange}
                            />
                            {errorMessages.fim && <p className="error-message">{errorMessages.fim}</p>}
                        </div>
                    </div>

                    <div className="botoes-modal-agendar-servico">
                        <Button
                            buttonName="Cancelar"
                            fontColor="#DB4B90"
                            buttonBackColor="#D9D9D9"
                            onClick={() => cancelarOn()}
                        />
                        <Button
                            buttonName="Agendar"
                            fontColor="white"
                            buttonBackColor="#DB4B90"
                            onClick={() => agendarServico()}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalAgendarServico;
