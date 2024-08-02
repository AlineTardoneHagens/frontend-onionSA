// src/api.js
import axios from 'axios'

// Configure a URL base da API
const api = axios.create({
  baseURL: 'http://localhost:5087/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Função para importar pedidos
export const importOrders = (file) => {
  const formData = new FormData()
  formData.append('file', file)

  return api.post('Import', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  },
  )
}

// Função para obter vendas por região
export const getSalesByRegion = async () => {
  return await consultar('pedidos/regiao');
}

// Função para obter vendas por produto
export const getSalesByProduct = async() => {
 return await consultar('pedidos/produto');
}

// Função para obter todos os pedidos
export const getOrders = async() => {
 return await consultar('pedidos/lista');
}
const consultar = async (url) => {
  const response = await api.get(url)
  console.log(response.data)
  return response.data

}
