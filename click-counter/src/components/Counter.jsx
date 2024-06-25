import React from "react";
import '../styles/Counter.css';

function Counter({ numClicks }) { // Utiliza desestructuración para extraer numClicks de las props.
  return(
    <div className="counter">
      {numClicks}
    </div>
  );
}

export default Counter;