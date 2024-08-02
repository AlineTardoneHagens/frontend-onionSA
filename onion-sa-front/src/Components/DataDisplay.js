import React, { useEffect, useState } from 'react';
import { getSalesByRegion, getSalesByProduct, getOrders } from '../Services/api';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const DataDisplay = () => {
  const [salesByRegion, setSalesByRegion] = useState([]);
  const [salesByProduct, setSalesByProduct] = useState([]);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const regionResponse = await getSalesByRegion();
        const productResponse = await getSalesByProduct();
        const ordersResponse = await getOrders();
        setSalesByRegion(regionResponse);
        setSalesByProduct(productResponse);
        setOrders(ordersResponse);
      } catch (error) {
        setError('Houve um problema ao carregar os dados. Por favor, tente novamente mais tarde.');
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const getPieChartData = (data, labelKey, valueKey) => ({
    labels: data.map(item => item[labelKey]),
    datasets: [
      {
        data: data.map(item => item[valueKey]),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Exibição de Dados</h1>
      <p className="mb-4 text-center text-gray-700">
        Aqui você pode visualizar os gráficos e a lista de pedidos relacionados aos pedidos importados.
      </p>
      {error ? (
        <div className="text-red-500 text-center mb-4">{error}</div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center space-x-4 w-full mb-8">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-white rounded shadow-md mb-4">
              <h2 className="text-xl font-semibold mb-2 text-center">Vendas por Região</h2>
              {salesByRegion.length > 0 ? (
                <Pie data={getPieChartData(salesByRegion, 'region', 'totalSales')} />
              ) : (
                <p className="text-center text-gray-500">Nenhum dado disponível</p>
              )}
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-white rounded shadow-md mb-4">
              <h2 className="text-xl font-semibold mb-2 text-center">Vendas por Produto</h2>
              {salesByProduct.length > 0 ? (
                <Pie data={getPieChartData(salesByProduct, 'product', 'totalSales')} />
              ) : (
                <p className="text-center text-gray-500">Nenhum dado disponível</p>
              )}
            </div>
          </div>
          <div className="w-full max-w-4xl bg-white rounded shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2 text-center">Lista de Pedidos</h2>
            {orders.length > 0 ? (
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
            ) : (
              <p className="text-center text-gray-500">Nenhum pedido disponível</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DataDisplay;
