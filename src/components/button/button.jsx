import React from "react";
import "../../css/button.css"


function Button({ buttonName, fontColor, bgColor }) {
    const buttonStyle = {
      color: fontColor,
      backgroundColor: bgColor,
    };

    return (
        <>
            <button style={buttonStyle}  className="component-button">{buttonName}</button>
        </>
    );
}
export default Button;