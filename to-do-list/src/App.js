import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <div className='container-image'>
        <img
          src={a}
          className='image'
        />
      </div>
      <div className='main-todo-list'>
        <h1>Mis Tareas</h1>
        <ToDoList></ToDoList>
      </div>
    </div>
  );
}

export default App;
