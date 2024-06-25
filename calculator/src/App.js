//!Los valores dentro de las etiquetas de componentes  "button" son los promps.children. 
// En la linea 33 definimos la función directamente.

import Button from './Components/Button';
import Screen from './Components/Screen';
import ButtonClear from './Components/ButtonClear';
import Logo from './Components/Logo';
import { useState } from 'react';
import { evaluate } from 'mathjs'; // Libria para el calculo de operaciones matématicas en formato string.
import './App.css';

function App() {

  let [input, setInput] = useState('');

  const addInput = value => {
    setInput(input += value);
  };
  
  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Ingrese valores a la calculadora.")
    }
  };

  return (
    <div className='App'>
      <Logo />
      <div className='calculator-container'>
        <Screen input={input}>0</Screen>
        <div className='row'>
          <ButtonClear handleClear={() => setInput('')}> 
            A/C
          </ButtonClear>
          <Button handleClick={addInput}>+/-</Button> 
          <Button handleClick={addInput}>%</Button>
          <Button handleClick={addInput}>÷</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={calculateResult}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
