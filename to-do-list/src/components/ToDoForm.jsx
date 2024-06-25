import React from "react";
import '../styles/ToDoForm.css';

const ToDoForm = (props) => (
  <form className="to-do-form">
    <input
      className="to-do-input"
      type="text"
      placeholder="Escribe una Tarea"
      name="texto"
   />
   <button className="to-do-button">
      Agregar Tarea
   </button>
  </form>
);

export default ToDoForm;