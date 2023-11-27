import React, { useState } from 'react';
import Logo from '../img/logo.png';
import '../css/Styles.css';


const NavBar = () => {
  const [serviciosMenuOpen, setServiciosMenuOpen] = useState(false);
  const [cotizacionesMenuOpen, setCotizacionesMenuOpen] = useState(false);

  const toggleServiciosMenu = () => {
    setServiciosMenuOpen(!serviciosMenuOpen);
  };

  const toggleCotizacionesMenu = () => {
    setCotizacionesMenuOpen(!cotizacionesMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
      <img src={Logo} alt="Logo de la empresa" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/">Boletos</a></li>
        <li>
          <span onClick={toggleServiciosMenu}>Servicios</span>
          {serviciosMenuOpen && (
            <ul className="sub-menu">
              <li><a href="/servicio1">Viajes especiales</a></li>
              <li><a href="/servicio2">Mudanzas</a></li>
              <li><a href="/servicio2">Paqueteria</a></li>
            </ul>
          )}
        </li>
        <li>
          <span onClick={toggleCotizacionesMenu}>Cotizaciones</span>
          {cotizacionesMenuOpen && (
            <ul className="sub-menu">
            <li><a href="/servicio1">Viajes especiales</a></li>
              <li><a href="/servicio2">Mudanzas</a></li>
              <li><a href="/servicio2">Paqueteria</a></li>
            </ul>
          )}
        </li>
        <li><a href="/acerca-de">Registro</a></li>
        <li><a href="/contacto" className="login-button">Inicio de sesión</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
