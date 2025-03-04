const SomaCalc = () => {
    const calcSoma = () => {
        let INDICE = 13, SOMA = 0, K = 0;
        while (K < INDICE) {
            K = K + 1;
            SOMA = SOMA + K;
        }
        return SOMA;
    };

    return (
        <div>
            <h2>Soma</h2>
            <p>Resultado: {calcSoma()}</p>
        </div>
    );
};

export default SomaCalc;
