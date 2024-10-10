import React, { useState } from 'react';
import ContractManager from './components/ContractManager';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <h1>ContractManager Pro</h1>
      <ContractManager />
    </div>
  );
}

export default App;
