import logo from './logo.svg';
import Testimony from './components/Testimony'; // Importamos el componente Testimony
import testimonials from './Testimonials'; // Importamos el archivo Testimonials
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      </div>
        {
          testimonials.map((testimonial, index) => (
            <Testimony 
              key={index}
              name={testimonial.name} 
              country={testimonial.country}
              image={testimonial.image} 
              charge={testimonial.charge}
              company={testimonial.company} 
              testimony={testimonial.testimony}
            />
          ))
        }
      </div>
  );
}

export default App; // Exportamos el componente App