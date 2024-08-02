// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-lg font-bold">Onion SA</span>
      </div>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-gray-300">
          Importar Pedidos
        </Link>
        <Link to="/data" className="hover:text-gray-300">
          Exibir Dados
        </Link>
        <a
          href="https://aline-tardone.notion.site/Documenta-o-T-cnica-do-Projeto-Teste-Onion-S-A-090a180bda4449e7a4e803bbb533a207"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          Documentação Técnica
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
