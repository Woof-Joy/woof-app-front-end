import "../../css/modal-agendar-servico.css"
import Button from "../button/button";
import React, { useEffect, useState } from "react";
import woofJoyApi from "../../woof-joy-api";


function ModalAgendarServico({opacityOn, widthOn, idParceiro, cancelarOn, sendOn}) {
    const [styleEdition, setStyleEdition] = useState({
        opacity: opacityOn,
        width: widthOn
    });


    useEffect(() => {
        setStyleEdition({
          opacity: opacityOn,
        });
      }, [opacityOn]);


    const parceiroWoofJoy = ""
    const valorServico = ""
    const dogWalker = "Dog Walker"
    const dogSitter = "Dog Sitter"
    const qtdServicosPrestados = 2
    const servicos = []
    if (qtdServicosPrestados <= 0) {
    } else if (qtdServicosPrestados == 1) {
        servicos.push(dogWalker)
    } else if (qtdServicosPrestados == 2) {
        servicos.push(dogWalker)
        servicos.push(dogSitter)

    }






    return (
        <>
            <div style={styleEdition} className="container-modal-agendar-servico">
                <h2>Agende o serviço desejado</h2>
                <br />

                <h5>Servico</h5>
                <select placeholder="Serviços disponíveis" className="select-modal-agendar-servico" name="" id="">
                    <option value="" disabled>Escolha...</option>

                    {servicos.map((s) => (
                        <option value="">{s}</option>
                    ))
                    }

                </select>

                <div className="container-dados-modal-agendar-servico">
                    <h5>Parceiro WoofJoy:{parceiroWoofJoy}</h5>
                    <h5>Preço do passeio:{valorServico}</h5>
                </div>

                <div className="container-inputs-modal-agendar-servico">
                    <h5>Início do servico</h5>
                    <div className="div-inputs-modal-agendar-servico"><input className="inputs-modal-agendar-servico" type="date" name="data" placeholder="Data" /> <input className="inputs-modal-agendar-servico" type="time" placeholder="Hora" /></div>
                    <h5>Fim do servico</h5>
                    <div className="div-inputs-modal-agendar-servico"><input className="inputs-modal-agendar-servico" type="date" name="data" placeholder="Data" /> <input className="inputs-modal-agendar-servico" type="time" placeholder="Hora" /></div>
                </div>

                <h5>Selecione o pet:</h5>
                <select placeholder="Serviços disponíveis" className="select-modal-agendar-servico" name="" id="">
                    <option value="" disabled>Escolha...</option>
                    {servicos.map((s) => (
                        <option value="">{s}</option>
                    ))
                    }


                </select>

                <div className="botoes-modal-agendar-servico">
                    <Button
                        buttonName="Cancelar"
                        fontColor="#DB4B90"
                        buttonBackColor="#D9D9D9"
                        onClick={cancelarOn}

                    />
                    <Button
                        buttonName="Agendar "
                        fontColor="white"
                        buttonBackColor="#DB4B90"
                        onClick={sendOn}

                    />
                </div>

            </div>

        </>
    )
}
export default ModalAgendarServico;