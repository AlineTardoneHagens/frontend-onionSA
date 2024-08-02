// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="bg-gray-800 p-4">
    <ul className="flex justify-around">
      <li>
        <Link to="/" className="text-white hover:text-gray-300">Importar Pedidos</Link>
      </li>
      <li>
        <Link to="/data" className="text-white hover:text-gray-300">Exibir Dados</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
