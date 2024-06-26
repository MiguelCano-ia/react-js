import React from "react";

const ButtonClear = (props) => (
  <div className="button-clear" onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ButtonClear;