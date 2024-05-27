import React from "react";
import "../../css/button.css"


function Button({ buttonName, fontColor, buttonBackColor,displayOn, textShadow, buttonWidth, buttonHeigth, onClick, padding, disabled, cursor }) {
    const buttonStyle = {
      display: displayOn,
      color: fontColor,
      backgroundColor: buttonBackColor,
      textShadow: textShadow,
      width: buttonWidth,
      height: buttonHeigth,
      padding: padding,
      cursor:cursor
    };

    return (
        <>
            <button style={buttonStyle} onClick={onClick} disabled={disabled}  className="component-button">{buttonName}</button>
        </>
    );
}
export default Button;