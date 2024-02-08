import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/MenuPage.css'; 
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const MenuPage = () => {
  const navigate = useNavigate();
  const [tokenRemoved, setTokenRemoved]= useState(false)

  const cerrarsesion = () => {
    Cookies.remove('token');
    setTokenRemoved(true);
  };

  useEffect(() => {
    // Redirigir a la página de inicio después de eliminar el token
    if (tokenRemoved) {
      navigate('/');
    }
  }, [tokenRemoved]);
  return (
    <div className="menu-container">
      <h2 className="menu-title">Menú</h2>
      <nav className="menu-nav">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/monofasico" className="menu-link">
              Monofásico
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/trifasico" className="menu-link">
              Trifásico
            </Link>
          </li>
        </ul>
      </nav>
      <button className="close-button" onClick={cerrarsesion}>
              Cerrar Sesion</button>
    </div>
  );
};

export default MenuPage;
