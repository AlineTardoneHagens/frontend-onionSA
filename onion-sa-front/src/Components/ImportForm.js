// src/components/ImportForm.js
import React, { useState } from 'react';
import { importOrders } from '../Services/api';
import { useNavigate } from 'react-router-dom';

const ImportForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        await importOrders(file);
        setMessage('Arquivo importado com sucesso!');
        navigate('/data');
      } catch (error) {
        console.error(error);
        setMessage('Erro ao importar o arquivo.');
      }
    } else {
      setMessage('Por favor, selecione um arquivo.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Importação de Pedidos</h1>
      <p className="mb-4">Descrição do sistema e exemplo de planilha.</p>
      <a
        href="https://docs.google.com/spreadsheets/d/1htc2DHNomvfUtr3pOizMjb0d6X9NuKvlGMw-mkUnaiM/edit?usp=sharing"
        download
        className="text-blue-500 underline mb-4"
      >
        Baixar exemplo de planilha
      </a>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 p-2 border border-gray-300"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Importar
        </button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export default ImportForm;
