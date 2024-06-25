import React from "react";
import '../styles/ToDo.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ToDo = ({ id, text, complete, toDoComplete, deleteToDo }) => (
  <div className={complete ? 'to-do-container complete' : 'to-do-container'}>
    <div
      className="to-do-text"
      onClick={() => toDoComplete(id)}
      >
      {text}
    </div>
    <div
      className="to-do-icons-container"
      onClick={() => deleteToDo(id)}
    >
      <AiOutlineCloseCircle className="to-do-icon" />
    </div>
  </div>
);

export default ToDo;