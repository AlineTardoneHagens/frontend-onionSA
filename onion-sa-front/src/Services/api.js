// src/api.js
import axios from 'axios';

// Configure a URL base da API
const api = axios.create({
  baseURL: 'http://localhost:5000/api/', // Substitua com a URL da sua API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para importar pedidos
export const importOrders = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  
  return api.post('import/import', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// Função para obter vendas por região
export const getSalesByRegion = () => {
  return api.get('sales/region');
};

// Função para obter vendas por produto
export const getSalesByProduct = () => {
  return api.get('sales/product');
};

// Função para obter todos os pedidos
export const getOrders = () => {
  return api.get('sales/orders');
};
