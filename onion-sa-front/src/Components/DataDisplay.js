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
      setSalesByRegion(regionResponse.data);
      setSalesByProduct(productResponse.data);
      setOrders(ordersResponse.data);
    };
    fetchData();
  }, []);

  const getPieChartData = (data, labelKey, valueKey) => ({
    labels: data.map(item => item[labelKey]),
    datasets: [{
      data: data.map(item => item[valueKey]),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
    }],
  });

  return (
    <div>
      <h1>Exibição de Dados</h1>
      <div>
        <h2>Vendas por Região</h2>
        <Pie data={getPieChartData(salesByRegion, 'Region', 'TotalSales')} />
      </div>
      <div>
        <h2>Vendas por Produto</h2>
        <Pie data={getPieChartData(salesByProduct, 'Product', 'TotalSales')} />
      </div>
      <div>
        <h2>Lista de Pedidos</h2>
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Produto</th>
              <th>Valor Final</th>
              <th>Data de Entrega</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.Cliente}</td>
                <td>{order.Produto}</td>
                <td>{order.ValorFinal}</td>
                <td>{new Date(order.DataEntrega).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataDisplay;
