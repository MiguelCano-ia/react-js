import React from "react";
import '../styles/Button.css';

function Button(props) { // Función que evalua si los simbolos son: +, -, * , /, =
  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== 'AC') && (value !== '+/-') && (value !== '%');
  };

  // Los operadores ternarios, nos ayudan a escoger la clase correspondiente, segun el símbolo.
  return(
    <div
      className={`button-container ${isOperator(props.children) ? 'operator' : props.children === '0' ? 'number-cero' : !isNaN(props.children) ? 'number' : 'others'}`.trimEnd()} // trim: Elimina espacios. 
      onClick={() => props.handleClick(props.children)} // Escribimos una función como tal para el onclick, no un retorno.
    >
      {props.children}
    </div>
  );
}

export default Button;