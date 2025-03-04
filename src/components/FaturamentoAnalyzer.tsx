import { useEffect, useState } from 'react';
import dadosJson from '../dados.json';

interface FaturamentoDia {
    dia: number;
    valor: number;
}

const FaturamentoAnalyzer = () => {
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [aboveAverageDays, setAboveAverageDays] = useState<number>(0);
    const [average, setAverage] = useState<number>(0);
    const [showCode, setShowCode] = useState(false);
    const [faturamentoData, setFaturamentoData] = useState<FaturamentoDia[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            setFaturamentoData(dadosJson);
            setIsLoading(false);
        } catch (err) {
            setError("Erro ao carregar dados de faturamento");
            setIsLoading(false);
            console.error("Erro ao carregar dados:", err);
        }
    }, []);

    useEffect(() => {
        if (faturamentoData.length > 0) {
            const validValues = faturamentoData.filter(day => day.valor > 0);
            
            const min = Math.min(...validValues.map(day => day.valor));
            const max = Math.max(...validValues.map(day => day.valor));
            
            const totalValue = validValues.reduce((acc, curr) => acc + curr.valor, 0);
            const avg = totalValue / validValues.length;
            
            const daysAboveAverage = validValues.filter(day => day.valor > avg).length;

            // Atualizar estados
            setMinValue(min);
            setMaxValue(max);
            setAverage(avg);
            setAboveAverageDays(daysAboveAverage);
        }
    }, [faturamentoData]);

    const sourceCode = `
import dadosJson from '../../dados.json';

// Dentro do useEffect:
// Filtrar dias com faturamento maior que zero
const validValues = faturamentoData.filter(day => day.valor > 0);

// Calcular o menor e maior valor
const min = Math.min(...validValues.map(day => day.valor));
const max = Math.max(...validValues.map(day => day.valor));

// Calcular a média mensal (apenas dias com faturamento)
const totalValue = validValues.reduce((acc, curr) => acc + curr.valor, 0);
const avg = totalValue / validValues.length;

// Contar dias acima da média
const daysAboveAverage = validValues.filter(day => day.valor > avg).length;
`;

    if (isLoading) {
        return <div>Carregando dados de faturamento...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div>
            <p style={{ marginBottom: '20px' }}>
                Análise de faturamento diário de uma distribuidora baseada em dados externos (dados.json):
            </p>
            
            <div style={{ marginBottom: '15px' }}>
                <p><strong>Menor valor de faturamento:</strong> R$ {minValue.toFixed(2)}</p>
                <p><strong>Maior valor de faturamento:</strong> R$ {maxValue.toFixed(2)}</p>
                <p><strong>Média mensal:</strong> R$ {average.toFixed(2)}</p>
                <p><strong>Número de dias acima da média:</strong> {aboveAverageDays}</p>
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

export default FaturamentoAnalyzer;
