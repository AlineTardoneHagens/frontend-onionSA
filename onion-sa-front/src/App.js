import React from 'react';
import Header from './Components/Navbar'; // Ajuste o caminho conforme a estrutura do seu projeto
import ImportForm from './Components/ImportForm';
import DataDisplay from './Components/DataDisplay';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/import" element={<ImportForm />} />
        <Route path="/data" element={<DataDisplay />} />
        <Route path="/" element={<ImportForm />} /> {/* Ou qualquer outro componente de página inicial */}
      </Routes>
    </Router>
  );
}

export default App;
