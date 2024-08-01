// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImportForm from './Components/ImportForm';
import DataDisplay from './Components/DataDisplay';
import Navigation from './Components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ImportForm />} />
        <Route path="/data" element={<DataDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
