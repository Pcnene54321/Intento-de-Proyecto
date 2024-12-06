import React from 'react';
import "./Styles/Iniciopage.css";
import Carosuel from '../components/layout/Carosuel';

 const Iniciopage = (props) => {
  return (
    <main className='introduccion'>
          <Carosuel />
          <h1 className='titulo'>Viajero</h1>
          <p>Viajero es una empresa en la que todos puedan viajar a cualquiera parte del mundo,
            con todos los transportes necesarios, tranquilidad y comodidades, nuestra empresa tiene
            el objetivo de acercar propuestas versatiles y economicas al publico
            viajero en las distintas localidades de todo el pais.
          </p>
        </main>
  );
}

export default Iniciopage;