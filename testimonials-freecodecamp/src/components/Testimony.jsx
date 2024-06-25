import React from "react"; //? Importa la libreria de React
import '../styles/Testimony.css'; //? Importa los estilos del componente Testimony

function Testimony(props) { //? Funcion que retorna el componente Testimony
  return (
    <div className='testimony-container'>
      <img className='image-testimony' src={require(`../images/testimonio-${props.image}.png`)} alt={`${props.name}`} />
      <div className="container-text-testimony">
        <p className="name-testimony">
          <strong>{props.name}</strong> en {props.country}
        </p>
        <p className="charge-testimony">
          {props.charge} en <strong>{props.company}</strong>
        </p>
        <p className="text-testimony">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony; //* Unico componente que se exporta