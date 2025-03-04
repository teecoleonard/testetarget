import { useState } from 'react';

const SomaCalc = () => {
    const [showCode, setShowCode] = useState(false);
    
    const calcSoma = () => {
        let INDICE = 13, SOMA = 0, K = 0;
        while (K < INDICE) {
            K = K + 1;
            SOMA = SOMA + K;
        }
        return SOMA;
    };

    const sourceCode = `
const calcSoma = () => {
    let INDICE = 13, SOMA = 0, K = 0;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    return SOMA;
};
`;

    return (
        <div>
            <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                Observe o trecho de código abaixo:<br/>
                int INDICE = 13, SOMA = 0, K = 0;<br/>
                Enquanto K &lt; INDICE faça { "{ K = K + 1; SOMA = SOMA + K; }" }<br/>
                Imprimir(SOMA);<br/><br/>
                Ao final do processamento, qual será o valor da variável SOMA?
            </p>

            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Resultado: {calcSoma()}
            </p>
            
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

export default SomaCalc;
