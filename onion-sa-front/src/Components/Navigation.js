// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Link to="/">Importar Pedidos</Link>
    <Link to="/data">Exibir Dados</Link>
  </nav>
);

export default Navigation;
