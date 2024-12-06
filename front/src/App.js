import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Carosuel from './components/layout/Carosuel';

import Iniciopage from './pages/Iniciopage'
import Nosotrospage from './pages/Nosotrospage'
import Novedadespage from './pages/Novedadespage'
import Contactopage from './pages/Contactopage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
       <Routes>
       <Route path='/' element={<Iniciopage/>} />
        <Route path='inicio' element={<Iniciopage/>} />
        <Route path='nosotros' element={<Nosotrospage/>} />
        <Route path='novedades' element={<Novedadespage/>} />
        <Route path='contacto' element={<Contactopage/>} />
       </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>


  );
}

export default App;
