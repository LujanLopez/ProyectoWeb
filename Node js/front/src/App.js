import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/layout/Header'; // Asegúrate de que la ruta sea correcta
import Nav from './componentes/layout/Nav'; // Asegúrate de que la ruta sea correcta
import Footer from './componentes/layout/Footer'; // Asegúrate de que la ruta sea correcta

import HomePage from './pages/HomePage';
import HeladerasPage from './pages/HeladerasPage';
import AiresPage from './pages/AiresPage';
import GarantiaPage from './pages/GarantiaPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/heladeras" element={<HeladerasPage />} />
          <Route path="/aires" element={<AiresPage />} />
          <Route path="/garantia" element={<GarantiaPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;