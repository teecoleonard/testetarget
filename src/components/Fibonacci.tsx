import { useState } from 'react';

const Fibonacci = () => {
    const [number, setNumber] = useState<number>(0);
    const [result, setResult] = useState<string>('');

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
            ? `${number} pertence à sequência de Leonardo Fibonacci!`
            : `${number} não pertence à sequência de Leonardo Fibonacci.`
        );
    };

    return (
        <div>
            <h2>Leonardo Fibonacci Checador</h2>
            <input 
                type="number" 
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <button onClick={handleCheck}>Check</button>
            <p>{result}</p>
        </div>
    );
};

export default Fibonacci;
