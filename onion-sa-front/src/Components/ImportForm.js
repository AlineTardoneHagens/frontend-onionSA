// src/components/ImportForm.js
import React, { useState } from 'react';
import { importOrders } from '../Services/api';

const ImportForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        await importOrders(file);
        setMessage('Arquivo importado com sucesso!');
      } catch (error) {
        setMessage('Erro ao importar o arquivo.');
      }
    } else {
      setMessage('Por favor, selecione um arquivo.');
    }
  };

  return (
    <div>
      <h1>Importação de Pedidos</h1>
      <p>Descrição do sistema e exemplo de planilha.</p>
      <a href="https://docs.google.com/spreadsheets/d/1htc2DHNomvfUtr3pOizMjb0d6X9NuKvlGMw-mkUnaiM/edit?usp=sharing" download>
        Baixar exemplo de planilha
      </a>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Importar</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default ImportForm;
