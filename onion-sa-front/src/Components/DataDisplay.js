// src/components/DataDisplay.js
import React, { useEffect, useState } from 'react';
import { getSalesByRegion, getSalesByProduct, getOrders } from '../Services/api';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const DataDisplay = () => {
  const [salesByRegion, setSalesByRegion] = useState([]);
  const [salesByProduct, setSalesByProduct] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const regionResponse = await getSalesByRegion();
      const productResponse = await getSalesByProduct();
      const ordersResponse = await getOrders();
      setSalesByRegion(regionResponse);
      setSalesByProduct(productResponse);
      setOrders(ordersResponse);
    };
    fetchData();
  }, []);

  const getPieChartData = (data, labelKey, valueKey) => (
    {
    labels: data.map(item => item[labelKey]),
    datasets: [
      {
      data: data.map(item => item[valueKey]),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
    }],
  });


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Exibição de Dados</h1>
      <div className="mb-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Vendas por Região</h2>
        <Pie data={getPieChartData(salesByRegion, 'region', 'totalSales')} />
      </div>
      <div className="mb-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Vendas por Produto</h2>
        <Pie data={getPieChartData(salesByProduct, 'product', 'totalSales')} />
      </div>
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-2">Lista de Pedidos</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Cliente</th>
              <th className="py-2 px-4 border-b">Produto</th>
              <th className="py-2 px-4 border-b">Valor Final</th>
              <th className="py-2 px-4 border-b">Data de Entrega</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">{order.cliente}</td>
                <td className="py-2 px-4 border-b">{order.produto}</td>
                <td className="py-2 px-4 border-b">{order.valorFinal}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(order.dataEntrega).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataDisplay;
