import { useState } from 'react';

const Fibonacci = () => {
    const [number, setNumber] = useState<number>(0);
    const [result, setResult] = useState<string>('');
    const [showCode, setShowCode] = useState(false);

    const checkFibonacci = (num: number) => {
        let a = 0, b = 1;
        while (b <= num) {
            if (b === num) return true;
            let temp = b;
            b = a + b;
            a = temp;
        }
        return false;
    };

    const handleCheck = () => {
        const belongs = checkFibonacci(number);
        setResult(belongs 
            ? `${number} pertence à sequência de Fibonacci!`
            : `${number} não pertence à sequência de Fibonacci.`
        );
    };

    const sourceCode = `
const checkFibonacci = (num: number) => {
    let a = 0, b = 1;
    while (b <= num) {
        if (b === num) return true;
        let temp = b;
        b = a + b;
        a = temp;
    }
    return false;
};
`;

    return (
        <div>
            <p style={{ marginBottom: '20px' }}>
                Informe um número para verificar se ele pertence à sequência de Fibonacci:
            </p>
            
            <div style={{ marginBottom: '15px' }}>
                <input 
                    type="number" 
                    value={number}
                    onChange={(e) => setNumber(Number(e.target.value))}
                    style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        marginRight: '10px'
                    }}
                />
                <button 
                    onClick={handleCheck}
                    style={{
                        padding: '8px 15px',
                        backgroundColor: '#3498db',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Verificar
                </button>
            </div>
            
            {result && (
                <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>{result}</p>
            )}
            
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

export default Fibonacci;
