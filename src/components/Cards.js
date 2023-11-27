import React from 'react';
import '../css/Styles.css'; // Importa tus estilos CSS

const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img className="card-image" src={image} alt={title} />
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
