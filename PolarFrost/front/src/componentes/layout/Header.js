import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/layout/Header.css';
import logo from '../../ImagenesPolarfrost/POLAR SOMBRA.png'
import logo2 from '../../ImagenesPolarfrost/New-whatsapp-png-logo.png'
import Nav from './Nav'; 


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <img src={logo} alt="Logo" className="logo" />
        <div className="text-container">
          <h1>Service de Heladeras Capital Federal y GBA</h1>
          <h3>Hacemos reparaciones los 7 días de la semana las 24hs</h3>
        </div>
        <a href="https://api.whatsapp.com/send?phone=5491130915107" target="_blank" rel="noopener noreferrer" className="whatsapp">
          <img src={logo2} alt="Logo" className="logo2" />
        </a>
      </header>
    
      <div className="main-content">
        {/* Aquí va el contenido principal de tu página */}
      </div>
    </>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <header className="header">
//         <img src={logo} alt="Logo" className="logo" />
//         <div class="text-container">
//             <h1>Service de Heladeras Capital Federal y GBA </h1>
//             <h3>Hacemos reparaciones los 7 días de la semanas las 24hs </h3>
//         </div>
//         <a href="https://api.whatsapp.com/send?phone=TUNUMERO" target="_blank" class="whatsapp">
//         <img src={logo2} alt="Logo" className="logo2" />
//         </a>
//     </header>
//   );
// }

// export default Header;
