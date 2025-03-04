import { useState } from 'react';

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

    return (
        <div>
            <h2>String Inverter</h2>
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleInvert}>Invert</button>
            <p>Resultado: {reversed}</p>
        </div>
    );
};

export default StringInverter;
