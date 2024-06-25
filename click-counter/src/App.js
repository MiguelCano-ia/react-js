import './App.css';

// Se importan los emojis
import emoji1 from './images/emoji1.png';
import emoji2 from './images/emoji2.png';
import emoji3 from './images/emoji3.png';
import emoji4 from './images/emoji4.png';
import emoji5 from './images/emoji5.png';
import Button from './components/Button'; // Componente Boton
import Counter from './components/Counter'; // Componente contador
import { useState } from 'react';

function App() {
  const [numClicks, setNumClicks] = useState(0); // Hook useState: [Estado actual, función para actualizar el estado] = useState(Estado inicial);

  const handleClick = () => { // Función que aumenta el contador de clicks
    setNumClicks(numClicks + 1); 
  };

  const resetClicks = () => { // Función que resetea el contador de clicks
    setNumClicks(0);
  };

  const selectEmoji = () => {
    if (numClicks >= 0 && numClicks < 10) { // Función que retorna un emoji dependiendo del número de clicks.
      return emoji1;
    } else if (numClicks >= 10 && numClicks < 20) {
      return emoji2
    } else if (numClicks >= 20 && numClicks < 30) {
      return emoji3
    } else if (numClicks >= 30 && numClicks < 40) {
      return emoji4
    } else {
      return emoji5
    }
  };

  return (
    <div className="App">
      <div className='emoji-logo-container'>
        <h1>Emoji clicks</h1>
        <img
          className='emoji-log'
          src={selectEmoji()} // Se invoca paratensis, porque esperamos un resultado.
          alt='emoji'
        />
      </div>
      <div className='main-container'>
        <Counter numClicks={numClicks} />
        <Button
          text='Click'
          isButtonClick={true} // Valor booleano true, que escoge la clase a aplicar en el boton.
          handleClick={handleClick} // No usas paréntesis porque no quieres que la función se ejecute inmediatamente, sino que se ejecute más tarde cuando se haga clic en el botón.
        />
        <Button 
          text='Reset'
          isButtonClick={false}
          handleClick={resetClicks}
        />
      </div>
    </div>
  );
}

export default App;
