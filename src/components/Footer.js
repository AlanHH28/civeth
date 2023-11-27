import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Viajes from '../img/viajeSPNG.png';
import IconoF from '../img/iconoFooter.png';
import '../css/Styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="iconFooter">
        <img className="footer-logo" src={Viajes} alt="Viajeros" />
      </div>
      <div className="footer-section">
        <h3><img className="iconoF" src={IconoF} alt="Icono" />Redes Sociales</h3>
        <div className="social-media">
          <a href="https://wa.me/tunumero" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://www.facebook.com/tupagina" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>

      <div className="footer-section-tc">
        <h3><img className="iconoF" src={IconoF} alt="Icono" />Términos y Condiciones
        </h3>
        <ul className="small-list"> {/* Agregamos la clase "small-list" */}
          <li><a href="/terminos-y-condiciones">Ver términos y condiciones</a></li>
          <li><a href="/terminos-y-condiciones">Política de cookies</a></li>
          <li><a href="/terminos-y-condiciones">Política de privacidad</a></li>
        </ul>
      </div>


      <div className="footer-section">
        <h3><img className="iconoF" src={IconoF} alt="Icono" />Quiénes Somos</h3>
        <a href="/quienes-somos">Conócenos</a>
      </div>
    </footer>
  );
};

export default Footer;
