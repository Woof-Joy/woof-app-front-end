import React from "react";
import "../../css/button.css"


function Button({ buttonName, fontColor, buttonBackColor,displayOn, textShadow, buttonWidth, buttonHeigth }) {
    const buttonStyle = {
      display: displayOn,
      color: fontColor,
      backgroundColor: buttonBackColor,
      textShadow: textShadow,
      width: buttonWidth,
      height: buttonHeigth
      
    };

    return (
        <>
            <button style={buttonStyle}  className="component-button">{buttonName}</button>
        </>
    );
}
export default Button;