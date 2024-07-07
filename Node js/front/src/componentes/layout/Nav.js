import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de que esta importación esté al principio del archivo



const Nav = ({ scrolled }) => {
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/heladeras">HELADERAS</Link></li>
        <li><Link to="/aires">AIRES</Link></li>
        <li><Link to="/garantia">GARANTIA</Link></li>
        <li><Link to="/contacto">CONTACTO</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
