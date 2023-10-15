import React from "react";
import "./botao.css";

const Botao = ({children, className, component: Component}) =>{
    return <Component className={`botao ${className}`}>{children}</Component>
    
};

Botao.defaultProps = {
    className: '',
}

export default Botao;