import { useState } from 'react';

const EstatePercentage = () => {
    const [showCode, setShowCode] = useState(false);
    
    const faturamento = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const total = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);
    const percentages = Object.entries(faturamento).map(([estado, valor]) => ({
        estado,
        valor,
        percentual: (valor / total * 100).toFixed(2)
    }));

    const sourceCode = `
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const total = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);
const percentages = Object.entries(faturamento).map(([estado, valor]) => ({
    estado,
    percentual: (valor / total * 100).toFixed(2)
}));
`;

    return (
        <div>
            <p style={{ marginBottom: '20px' }}>
                Percentual de representação que cada estado teve dentro do valor total mensal da distribuidora:
            </p>
            
            <div style={{ marginBottom: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Estado</th>
                            <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #ddd' }}>Valor (R$)</th>
                            <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #ddd' }}>Percentual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {percentages.map(({ estado, valor, percentual }) => (
                            <tr key={estado}>
                                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                                    <strong>{estado}</strong>
                                </td>
                                <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #eee' }}>
                                    {valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </td>
                                <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #eee' }}>
                                    {percentual}%
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td style={{ padding: '8px', fontWeight: 'bold' }}>Total</td>
                            <td style={{ padding: '8px', textAlign: 'right', fontWeight: 'bold' }}>
                                {total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </td>
                            <td style={{ padding: '8px', textAlign: 'right', fontWeight: 'bold' }}>100.00%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <button 
                onClick={() => setShowCode(!showCode)}
                style={{
                    backgroundColor: '#f0f0f0',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '15px',
                    fontSize: '14px'
                }}
            >
                {showCode ? 'Ocultar Código' : 'Ver Código Fonte'}
            </button>
            
            {showCode && (
                <pre style={{ 
                    backgroundColor: '#f8f8f8', 
                    padding: '10px', 
                    borderRadius: '4px',
                    overflow: 'auto',
                    marginTop: '10px',
                    border: '1px solid #ddd',
                    fontSize: '14px'
                }}>
                    {sourceCode}
                </pre>
            )}
        </div>
    );
};

export default EstatePercentage;
