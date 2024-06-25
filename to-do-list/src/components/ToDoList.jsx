import React, { useState } from "react";
import '../styles/ToDoList.css';
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  return(
  // Fragementos que no se ven reflejados en HTML
  <> 
    <ToDoForm />
    <div className='to-do-list-container'>
      {
        tasks.map((toDo) =>
          <ToDo></ToDo>
        )
      }
    </div>
  </>
  );
}

export default ToDoList;