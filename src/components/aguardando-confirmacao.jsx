// import React from "react";
// import "../css/aguardando-confirmacao.css"
// import Button from "./componentes-gerais/button";
// // import { LocalDate } from "js-joda";



// function AguardandoConfirmacao(props) {
//     const {
//         servico,
//         dataHoraInicio,
//         dataHoraFim,
//         clienteNome,
//     } = props

//     const formtDate = LocalDate.parse(dataHoraFim)

//     return (
//         <>
//             <div className="container-dados-card-meus-servicos">
//                 <div className="informacoes-parceiro-card-meus-servicos">
//                     <h3 className="tipo-servico">atividade: {servico}</h3>
//                     <h5>início: {dataHoraInicio}</h5>
//                     <h5>término:{dataHoraFim}</h5>
//                     <h6 className="nome-prestador">cliente: {clienteNome}</h6>
//                 </div>
//                 <div className="status">

//                     {formtDate.dayOfMonth() > LocalDate.now().dayOfMonth() ? (
//                             <h2 style={{ backgroundColor: "#49C483", borderRadius: "20px", color: "white", fontSize: "25px", padding: "4%" }}>{"REALIZADO"}</h2>
//                         ) : (
//                             <h2 style={{ backgroundColor: "#DB4B90", borderRadius: "20px", color: "white", fontSize: "25px", padding: "4%" }}>{"AGENDADO"}</h2>
//                         )}


//                 </div>
//             </div>
//         </>
//     );
// }
// export default AguardandoConfirmacao;