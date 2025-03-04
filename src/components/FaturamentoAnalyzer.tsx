import { useEffect, useState } from 'react';

interface FaturamentoDia {
    dia: number;
    valor: number;
}

const faturamentoData: FaturamentoDia[] = [
    // ... your JSON data here ...
];

const FaturamentoAnalyzer = () => {
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [aboveAverageDays, setAboveAverageDays] = useState<number>(0);

    useEffect(() => {
        const validValues = faturamentoData.filter(day => day.valor > 0);
        const min = Math.min(...validValues.map(day => day.valor));
        const max = Math.max(...validValues.map(day => day.valor));
        const average = validValues.reduce((acc, curr) => acc + curr.valor, 0) / validValues.length;
        const daysAboveAverage = validValues.filter(day => day.valor > average).length;

        setMinValue(min);
        setMaxValue(max);
        setAboveAverageDays(daysAboveAverage);
    }, []);

    return (
        <div>
            <h2>Faturamento Analysis</h2>
            <p>Menor valor: R$ {minValue.toFixed(2)}</p>
            <p>Maior valor: R$ {maxValue.toFixed(2)}</p>
            <p>Dias acima da média: {aboveAverageDays}</p>
        </div>
    );
};

export default FaturamentoAnalyzer;
