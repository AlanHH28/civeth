import React, { useState } from 'react';
import '../css/Styles.css'; // Asegúrate de tener tu archivo CSS para estilos personalizados

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    edad: '',
    telefono: '',
    correo: '',
    contrasena: '',
    verificarContrasena: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Aquí puedes realizar acciones con los datos del formulario
  };

  return (
    <div className="centered-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" onChange={handleChange} value={formData.nombre} />
        </div>
        {/* ... otros campos del formulario */}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
