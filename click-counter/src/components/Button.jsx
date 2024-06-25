import React from "react";
import '../styles/Button.css'

function Button({ text, isButtonClick, handleClick }) { // Sintaxis desestruracción, solo nos referimos a la propiedad por su nombre, sin necesidad de usar props.
  return(
    <button className={isButtonClick ? 'button-click' : 'resert-button'} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;