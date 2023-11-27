import Home from './screens/Home';
import Carrusel from './components/Carrusel';
import Card from './components/Cards';
import Footer from './components/Footer';

import imagen1 from './img/gdl.jpeg';
import imagen2 from './img/mty.jpeg';
import imagen3 from './img/tamp.jpeg';

import './css/Styles.css'
function App() {
  const cardsData = [
    {
      title: 'Guadalajara',
      image: imagen1,
      description: 'Ven y visital la iglesia',
    },
    {
      title: 'Monterrey N.L',
      image: imagen2,
      description: 'Que esperas para visitar moterrey, con sus her,mosas vistas',
    },
    {
      title: 'Tampico ',
      image: imagen3,
      description: 'ven y sinete la brisa de la playa de tampico',
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Home/>
      </header>
      <Carrusel/>

      {/* Contenedor para las tarjetas */}
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>

       <Footer/>
    </div>
 
  );
}

export default App;