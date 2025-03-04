import { useState } from 'react';
import CodeViewer from './common/CodeViewer';
import { actionButtonStyle, inputStyle } from '../styles/common';

const StringInverter = () => {
    const [input, setInput] = useState<string>('');
    const [reversed, setReversed] = useState<string>('');

    const invertString = (str: string) => {
        let result = '';
        for (let i = str.length - 1; i >= 0; i--) {
            result += str[i];
        }
        return result;
    };

    const handleInvert = () => {
        setReversed(invertString(input));
    };

    const sourceCode = `
const invertString = (str: string) => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
};
`;

    return (
        <div>
            <p style={{ marginBottom: '20px' }}>
                Digite um texto para inverter os caracteres:
            </p>
            
            <div style={{ marginBottom: '15px' }}>
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{...inputStyle, width: '250px'}}
                    placeholder="Digite algo..."
                />
                <button 
                    onClick={handleInvert}
                    style={actionButtonStyle}
                >
                    Inverter
                </button>
            </div>
            
            {reversed && (
                <p style={{ marginBottom: '15px' }}>
                    <strong>Resultado:</strong> {reversed}
                </p>
            )}
            
            <CodeViewer sourceCode={sourceCode} />
        </div>
    );
};

export default StringInverter;
