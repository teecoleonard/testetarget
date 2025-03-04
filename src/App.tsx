import React from 'react';
import './App.css';
import SomaCalc from './components/SomaCalc';
import Fibonacci from './components/Fibonacci';
import FaturamentoAnalyzer from './components/FaturamentoAnalyzer';
import EstatePercentage from './components/EstatePercentage';
import StringInverter from './components/StringInverter';

function App() {
  const sectionStyle: React.CSSProperties = {
    padding: '30px',
    marginBottom: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    backgroundColor: 'white'
  };

  return (
    <div className="App">
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '20px'
      }}>
        <h1 style={{ color: '#333', marginBottom: '30px', textAlign: 'center' }}>Target Sistemas - Teste</h1>
        
        {/* Sessão 1: Soma */}
        <div style={sectionStyle}>
          <h2 style={{ color: '#3498db', marginBottom: '20px' }}>1. Cálculo da Soma</h2>
          <SomaCalc />
        </div>
        
        {/* Sessão 2: Fibonacci */}
        <div style={sectionStyle}>
          <h2 style={{ color: '#3498db', marginBottom: '20px' }}>2. Verificador de Fibonacci</h2>
          <Fibonacci />
        </div>
        
        {/* Sessão 3: Faturamento */}
        <div style={sectionStyle}>
          <h2 style={{ color: '#3498db', marginBottom: '20px' }}>3. Análise de Faturamento</h2>
          <FaturamentoAnalyzer />
        </div>
        
        {/* Sessão 4: Percentual por Estado */}
        <div style={sectionStyle}>
          <h2 style={{ color: '#3498db', marginBottom: '20px' }}>4. Percentual por Estado</h2>
          <EstatePercentage />
        </div>
        
        {/* Sessão 5: Inverter String */}
        <div style={sectionStyle}>
          <h2 style={{ color: '#3498db', marginBottom: '20px' }}>5. Inversor de String</h2>
          <StringInverter />
        </div>
      </div>
    </div>
  );
}

export default App;
